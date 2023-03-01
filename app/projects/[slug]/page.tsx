import { notFound } from "next/navigation";
import { Mdx } from "components/Mdx";
import { allProjects } from "@/.contentlayer/generated/index.mjs";
import Balancer from "react-wrap-balancer";
import { Project } from "contentlayer/generated";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({params}:{params: Project}): Promise<Metadata> {
  const post = allProjects.find((post) => post.slug === params.slug);
  return {
    title: `Chanaka's Projects | ${post!.title}`,
    description: `Chanaka Perera, Projects, ${post!.title}, ${post!.summary}, ${post!.technologies}`
    
  }
}

export default async function ProjectPost({ params }:{params: Project}) {
  const post = allProjects.find((post) => post.slug === params.slug);

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
          <strong>Summary:</strong> {post.summary}
        </p>
        {post.github && (
          <p>
            <strong>Github:</strong>{" "}
            <a
              href={post.github}
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              {post.github}
            </a>
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="m-auto w-[80%] p-3 text-justify">
      <h1 className="font-bold text-3xl font-heading">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-4 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 text-black dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
      </div>
      {details()}
      <Mdx code={post.body.code} />
    </section>
  );
}
