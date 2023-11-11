import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";

import { BlogPostDocument } from "../../../prismicio-types";
import { renderTitle } from "./renderTitle";
import { formatDate } from "./utils";

interface PostItemProps {
  post: BlogPostDocument;
  index: number;
}

export function PostItem({
  post: { uid, data, tags, first_publication_date, last_publication_date },
  index,
}: PostItemProps) {
  return (
    <Link href={`/blog/${uid}`}>
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
            <h2 className="text-black dark:text-white text-2xl font-bold">
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
        </div>
      </Card>
    </Link>
  );
}
