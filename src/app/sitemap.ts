import { MetadataRoute } from "next";

import { createClient } from "@/prismicio";

import { ALL_BLOG_POSTS_PAGE_ORDERINGS } from "./blog/actions";

async function getAllBlogPosts() {
  "use server";
  try {
    return await createClient().getAllByType("blog_post", {
      fetch: ["blog_post.title"],
      pageSize: 100,
      orderings: ALL_BLOG_POSTS_PAGE_ORDERINGS,
    });
  } catch (e) {
    console.error("error fetching blog posts:", e);
    throw new Error("failed to fetch blog posts");
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use server";
  const posts = await getAllBlogPosts();

  const pages: MetadataRoute.Sitemap = [
    {
      url: "https://barrymichaeldoyle.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://barrymichaeldoyle.com/blog/${post.uid}`,
    lastModified: new Date(post.last_publication_date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...pages, ...postEntries];
}
