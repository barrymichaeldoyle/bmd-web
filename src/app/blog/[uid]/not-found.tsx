import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/Card";
import { buttonClassName } from "@/components/styles";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card>
        <Image
          src="/where-are-you.gif" // Replace with your own 404 image if available
          alt="Not Found"
          width={400}
          height={300}
          className="mb-8 mx-auto shadow-lg rounded-lg"
        />
        <h1 className="text-4xl font-bold mb-2">Blog Post Not Found</h1>
        <p className="mb-4 text-lg">
          Oops! The post you&apos;re looking for doesn&apos;t seem to exist.
        </p>
        <Link href="/" className={buttonClassName}>
          See all Posts
        </Link>
      </Card>
    </div>
  );
}
