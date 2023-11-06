import { asText } from "@prismicio/client";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { Tag } from "@/components/tag";
import { createClient } from "@/prismicio";

import { customRenderers } from "./customRenderers";
import { formatDate } from "./utils";
import { Title } from "./Title";

type BlogPostpageParams = { params: { uid: string } };

async function getBlogPost(uid: string) {
  "use server";
  try {
    const post = await createClient().getByUID("blog_post", uid, {});
    return {
      markdown: asText(post.data.content, { separator: "\n" }),
      firstPublicationDate: post.first_publication_date,
      lastPublicationDate: post.last_publication_date,
      tags: post.tags,
      title: post.data.title,
    };
  } catch (e) {
    throw new Error("Failed to fetch blog post");
  }
}

export async function generateStaticParams() {
  "use server";
  try {
    return (
      await createClient().getAllByType("blog_post", {
        fetch: ["blog_post.uid"],
      })
    ).map((post) => ({ uid: post.uid }));
  } catch (e) {
    throw new Error("Failed to generate static params for blog posts");
  }
}

export async function generateMetadata(
  { params }: BlogPostpageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  "use server";
  try {
    const post = await createClient().getByUID("blog_post", params.uid, {});

    const title = post.data.meta_title || (await parent).title;
    const description =
      post.data.meta_description || (await parent).description;

    return { title, description };
  } catch (e) {
    throw new Error("Failed to generate metadata for blog post");
  }
}

export default async function BlogPostPage({ params }: BlogPostpageParams) {
  const { markdown, title, tags, firstPublicationDate, lastPublicationDate } =
    await getBlogPost(params.uid);

  return (
    <article className="prose lg:prose-xl mx-auto">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
        <div className="flex">
          <Image
            alt="Barry Michael Doyle Profile Picture"
            src="/profile.png"
            width={60}
            height={60}
            priority
            className="rounded-full border-4 border-primary shadow-lg"
          />
          <div className="flex flex-col justify-center ml-4">
            <span className="font-bold text-lg">Barry Michael Doyle</span>
            <div className="text-gray-600 dark:text-gray-300 font-light text-xs">
              <span>Posted on {formatDate(firstPublicationDate)}</span>
              {firstPublicationDate !== lastPublicationDate && (
                <span> • Updated on {formatDate(lastPublicationDate)}</span>
              )}
            </div>
          </div>
        </div>

        {title && <Title title={title} />}
        <div className="mt-4 mb-8">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <Markdown
          components={customRenderers}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </Markdown>
      </div>
    </article>
  );
}
