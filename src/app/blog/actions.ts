import { Ordering } from "@prismicio/client";

import { createClient } from "@/prismicio";

/**
 * Just use the last known an update this value from time to time.
 */
const DEFAULT_FOLLOWERS_COUNT = 5013;

export async function getAllBlogPostsPageData({ tag }: { tag?: string }) {
  "use server";
  const [postsResults, tagsResults, devCommunityFollowersCountResults] =
    await Promise.allSettled([
      getBlogPosts(tag),
      getTags(),
      getDevCommunityFollowersCount(),
    ]);

  const posts = postsResults.status === "fulfilled" ? postsResults.value : [];
  const tags = tagsResults.status === "fulfilled" ? tagsResults.value : [];
  const devCommunityFollowersCount =
    devCommunityFollowersCountResults.status === "fulfilled"
      ? devCommunityFollowersCountResults.value
      : DEFAULT_FOLLOWERS_COUNT;

  return { devCommunityFollowersCount, posts, tags };
}

export const ALL_BLOG_POSTS_PAGE_ORDERINGS: Ordering[] = [
  { field: "document.first_publication_date", direction: "desc" },
];

async function getBlogPosts(tag?: string) {
  "use server";
  try {
    const getParams = {
      fetch: ["blog_post.title", "blog_post.cover_image"],
      pageSize: 100,
      orderings: ALL_BLOG_POSTS_PAGE_ORDERINGS,
    };
    if (tag) {
      return await createClient().getAllByTag(tag, getParams);
    }
    return await createClient().getAllByType("blog_post", getParams);
  } catch (e) {
    console.error("error fetching blog posts:", e);
    throw new Error("failed to fetch blog posts");
  }
}

async function getTags() {
  "use server";
  try {
    return (await createClient().getTags()).sort((a, b) => a.localeCompare(b));
  } catch (e) {
    console.error("error fetching tags:", e);
    throw new Error("failed to fetch tags");
  }
}

async function getDevCommunityFollowersCount() {
  "use server";
  try {
    const response = await fetch("https://dev.to/api/users/me", {
      method: "GET",
      headers: {
        "api-key": process.env.DEV_TO_API_KEY || "",
        contentType: "application/json",
        accept: "application/vnd.forem.api-v1+json",
      },
    });

    if (!response.ok) {
      console.error("error fetching Dev.to user:", response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data?.followers_count || DEFAULT_FOLLOWERS_COUNT;
  } catch (e) {
    console.error("error fetching Dev.to followers:", e);
    throw new Error("failed to fetch Dev.to followers");
  }
}
