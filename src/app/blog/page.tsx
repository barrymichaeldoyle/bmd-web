import { Tag } from "@/components/tag";
import { createClient } from "@/prismicio";
import Link from "next/link";

import { renderTitle } from "./renderTitle";

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
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      {posts.map(({ id, uid, data, tags }) => (
        <Link key={id} href={`/blog/${uid}`}>
          <article className="mb-4 p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800 cursor-pointer hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition">
            {data.title && (
              <h2 className="text-2xl font-bold">{renderTitle(data.title)}</h2>
            )}
            <div className="mt-2">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
