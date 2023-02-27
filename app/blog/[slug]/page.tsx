import { notFound } from "next/navigation";
import { Mdx } from "components/Mdx";
import { allBlogs } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const details = () => {
    return (
      <div className="m-auto font-tabs bg-white text-black p-2 mb-2 rounded-md">
        <p>
          <strong>Technologies:</strong> {post.technologies.join(", ")}
        </p>
        <p>
          <strong>Topics:</strong> {post.tags.join(", ")}
        </p>
        <p>
          <strong>Summary:</strong> {post.summary}
        </p>
        {post.medium && (
          <p>
            <strong>Medium:</strong>{" "}
            <a
              href={post.medium}
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              {post.medium}
            </a>
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="min-w-100vw max-w-fit p-3 m-4">
      <h1 className="font-bold text-3xl font-heading">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-4 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 text-black dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.date}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
      </div>
      {details()}
      <Mdx code={post.body.code} />
    </section>
  );
}
