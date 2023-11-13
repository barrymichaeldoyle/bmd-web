import { createClient } from "@/prismicio";
import { Ordering } from "@prismicio/client";

export async function getAllBlogPostsPageData({ tag }: { tag?: string }) {
  "use server";
  const [posts, tags] = await Promise.all([getBlogPosts(tag), getTags()]);
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
    return await createClient().getTags();
  } catch (e) {
    console.error("Error fetching tags:", e);
    throw new Error("Failed to fetch tags");
  }
}
