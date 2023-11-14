import { Ordering } from "@prismicio/client";

import { createClient } from "@/prismicio";

export async function getAllBlogPostsPageData({ tag }: { tag?: string }) {
  "use server";
  const [postsResults, tagsResults] = await Promise.allSettled([
    getBlogPosts(tag),
    getTags(),
  ]);

  const posts = postsResults.status === "fulfilled" ? postsResults.value : [];
  const tags = tagsResults.status === "fulfilled" ? tagsResults.value : [];

  return { posts, tags };
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
    console.error("Error fetching blog posts:", e);
    throw new Error("Failed to fetch blog posts");
  }
}

async function getTags() {
  "use server";
  try {
    return (await createClient().getTags()).sort((a, b) => a.localeCompare(b));
  } catch (e) {
    console.error("Error fetching tags:", e);
    throw new Error("Failed to fetch tags");
  }
}

// TODO: Implement once support for pagination exists
// async function getDevCommunityFollowersCount() {
//   "use server";
//   try {
//     const response = await fetch(
//       "https://dev.to/api/followers/users?page=1&per_page=1",
//       {
//         method: "GET",
//         headers: {
//           "api-key": process.env.DEV_TO_API_KEY || "",
//           contentType: "application/json",
//           accept: "application/vnd.forem.api-v1+json",
//         },
//       },
//     );

//     if (!response.ok) {
//       console.error("Error fetching Dev.to followers:", response);
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     console.log(response.headers);
//     console.log(response.headers.get("x-total-count"));

//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.error("Error fetching Dev.to followers:", e);
//     throw new Error("Failed to fetch Dev.to followers");
//   }
// }
