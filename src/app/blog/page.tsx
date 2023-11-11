import { Metadata } from "next";

import { getPageData } from "./actions";
import { TagSelect } from "./TagSelect";
import { PostItem } from "./PostItem";

export const metadata: Metadata = {
  title: "Programming Blog - Code & Insights | Barry Michael Doyle",
  description:
    "Join me on a coding journey! Discover programming tutorials, tech reviews, and industry insights on my blog. Perfect for developers of all levels.",
};

export default async function AllBlogPostsPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const { posts, tags } = await getPageData({ tag: searchParams.tag });

  return (
    <>
      <div className="flex justify-between items-center mb-8 px-4">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <TagSelect tags={tags} selectedTag={searchParams.tag} />
      </div>

      {posts.map((post, index) => (
        <PostItem key={post.id} post={post} index={index} />
      ))}
    </>
  );
}
