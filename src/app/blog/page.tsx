import { Metadata } from "next";
import Link from "next/link";
import { FaDev } from "react-icons/fa";

import { Card } from "@/components/Card";

import { getAllBlogPostsPageData } from "./actions";
import { TagSelect } from "./TagSelect";
import { PostItem } from "./PostItem";
import Image from "next/image";
import { buttonClassName } from "@/components/styles";

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
  const { posts, tags } = await getAllBlogPostsPageData({
    tag: searchParams.tag,
  });

  return (
    <>
      <div className="flex justify-between items-center mb-8 px-4">
        <h1 className="text-3xl font-bold">My Blog</h1>
        {tags.length > 0 && (
          <TagSelect tags={tags} selectedTag={searchParams.tag} />
        )}
      </div>

      <div className="flex flex-row gap-4">
        <div>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <PostItem key={post.id} post={post} index={index} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <Card>
                <Image
                  src="/where-are-you.gif"
                  alt="Not Found"
                  width={400}
                  height={300}
                  className="mb-8 mx-auto shadow-lg rounded-lg"
                />
                <h1 className="text-4xl font-bold mb-2">Posts Not Found</h1>
                <p className="mb-4 text-lg">
                  Oops! Looks like our API has let us down. Please try again
                  later!
                </p>
                <Link href="/contact" className={buttonClassName}>
                  Let Me Know Here
                </Link>
              </Card>
            </div>
          )}
        </div>

        <Card as="aside" className="hidden md:block h-fit w-[550px]">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            Published on <FaDev className="ml-2 w-8 h-8" />
          </h2>
          <p className="mb-2">
            I also share my blog posts on the <strong>Dev.to</strong> community.
            This is where I gather reactions and comments for my posts.
          </p>
          <p className="mb-4">
            Follow me there to be notified when I post something new.
          </p>
          <Link
            href="https://dev.to/barrymichaeldoyle"
            className="flex items-center space-x-2"
          >
            <FaDev />
            <span>Barry Michael Doyle on Dev.to</span>
          </Link>
        </Card>
      </div>
    </>
  );
}
