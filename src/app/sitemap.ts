import { createClient } from "@/prismicio";
import { MetadataRoute } from "next";

async function getAllBlogPosts() {
  "use server";
  try {
    return await createClient().getAllByType("blog_post", {
      fetch: ["blog_post.title"],
      pageSize: 100,
    });
  } catch (e) {
    throw new Error("Failed to fetch blog posts");
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts();

  const pages: MetadataRoute.Sitemap = [
    {
      url: "https://barrymichaeldoyle.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://barrymichaeldoyle.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://barrymichaeldoyle.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
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
