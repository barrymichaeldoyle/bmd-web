"use server";
import { createClient } from "@/prismicio";

export async function getPageData({ tag }: { tag?: string }) {
  const [posts, tags] = await Promise.all([getBlogPosts(tag), getTags()]);
  return { posts, tags };
}

async function getBlogPosts(tag?: string) {
  try {
    const getParams = {
      fetch: ["blog_post.title", "blog_post.cover_image"],
      pageSize: 100,
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
  try {
    return await createClient().getTags();
  } catch (e) {
    console.error("Error fetching tags:", e);
    throw new Error("Failed to fetch tags");
  }
}
