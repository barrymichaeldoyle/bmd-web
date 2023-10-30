import { createClient } from "@/prismicio";

async function getAllBlogPosts() {
  try {
    return await createClient().getAllByType("blog_post", {
      fetch: ["blog_post.title"],
    });
  } catch (e) {
    throw new Error("Failed to fetch blog posts");
  }
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <h1>My Blog Page</h1>
      <p>{JSON.stringify(posts)}</p>
    </>
  );
}
