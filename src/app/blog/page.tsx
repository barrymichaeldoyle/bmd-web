import { Tag } from "@/components/tag";
import { createClient } from "@/prismicio";
import Link from "next/link";

import { renderTitle } from "./renderTitle";
import { formatDate } from "./[uid]/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming Blog - Code & Insights | Barry Michael Doyle",
  description:
    "Join me on a coding journey! Discover programming tutorials, tech reviews, and industry insights on my blog. Perfect for developers of all levels.",
};

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

export default async function AllBlogPostsPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">My Blog</h1>
      {posts.map(
        ({
          id,
          uid,
          data,
          tags,
          first_publication_date,
          last_publication_date,
        }) => (
          <Link key={id} href={`/blog/${uid}`}>
            <article className="mb-4 p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800 cursor-pointer hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition">
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
                  <span> • Updated on {formatDate(last_publication_date)}</span>
                )}
              </div>
            </article>
          </Link>
        ),
      )}
    </>
  );
}
