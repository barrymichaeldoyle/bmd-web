import { Metadata } from "next";
import Link from "next/link";

import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { createClient } from "@/prismicio";

import { renderTitle } from "./renderTitle";
import { formatDate } from "./utils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programming Blog - Code & Insights | Barry Michael Doyle",
  description:
    "Join me on a coding journey! Discover programming tutorials, tech reviews, and industry insights on my blog. Perfect for developers of all levels.",
};

async function getAllBlogPosts() {
  "use server";
  try {
    return await createClient().getAllByType("blog_post", {
      fetch: ["blog_post.title", "blog_post.cover_image"],
      pageSize: 100,
    });
  } catch (e) {
    console.error("Error fetching blog posts:", e);
    throw new Error("Failed to fetch blog posts");
  }
}

export default async function AllBlogPostsPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">My Blog</h1>
      {posts.map(
        (
          {
            id,
            uid,
            data,
            tags,
            first_publication_date,
            last_publication_date,
          },
          index,
        ) => (
          <Link key={id} href={`/blog/${uid}`}>
            <Card as="article" hover noPadding>
              {data.cover_image?.url && (
                <Image
                  alt={data.cover_image.alt || data.title || "Blog Post Image"}
                  src={data.cover_image.url}
                  width={data.cover_image.dimensions.width}
                  height={data.cover_image.dimensions.height}
                  className="w-full rounded-t-md"
                  priority={index < 5}
                />
              )}
              <div className="p-4">
                {data.title && (
                  <h2 className="text-2xl font-bold">
                    {renderTitle(data.title)}
                  </h2>
                )}
                <div className="mt-2">
                  {tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-light text-xs pt-2 pl-2">
                  <span>Posted on {formatDate(first_publication_date)}</span>
                  {first_publication_date !== last_publication_date && (
                    <span>
                      {" "}
                      • Updated on {formatDate(last_publication_date)}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </Link>
        ),
      )}
    </>
  );
}
