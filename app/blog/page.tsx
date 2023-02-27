"use client";

import { motion, useCycle } from "framer-motion";
import { allBlogs } from "contentlayer/generated";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
import DropSelect from "@/components/DropSelect";
import Image from "next/image";

export default function BlogPage() {
  const [blogItemsOnDisplay, setBlogItemsOnDisplay] = useState(allBlogs);
  const [refresh, toggleRefresh] = useCycle(false, true);

  const blogVariants = {
    refreshed: {
      x: [-1000, 0],
      transition: { duration: 0.8 },
    },
    unrefreshed: {
      x: [-1000, 0],
      transition: { duration: 0.8 },
    },
  };

  // Filter and return posts
  const renderPosts = () => {
    return (
      <motion.div
        initial={true}
        animate={refresh ? "refreshed" : "unrefreshed"}
      >
        {blogItemsOnDisplay.map((blog, index) => (
          <motion.div
            key={index}
            variants={blogVariants}
            whileTap={{ scale: 0.9 }}
          >
            <BlogCard
              title={blog.title}
              summary={blog.summary}
              image={blog.image}
              slug={blog.slug}
              topics={blog.tags}
            ></BlogCard>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  // Function to filter blogs
  function filterBlogs(technology: string) {
    toggleRefresh();
    if (technology === "None") {
      setBlogItemsOnDisplay(allBlogs);
    } else {
      setBlogItemsOnDisplay(
        allBlogs.filter((blog) => {
          const blogTech = new Set(blog.technologies);
          return blogTech.has(technology);
        })
      );
    }
  }

  // Filter by technologies and render filter option
  const techFilter = () => {
    const techSet = new Set<string>();
    allBlogs.forEach((blog) => {
      blog.technologies.forEach((tech) => techSet.add(tech));
    });

    return (
      <div className="flex relative justify-end">
        <DropSelect
          label="Filter by technology"
          items={Array.from(techSet)}
          onSelect={filterBlogs}
        ></DropSelect>
      </div>
    );
  };

  return (
    <section className="h-[100%]">      
      {techFilter()}     
      {renderPosts()}
    </section>
  );
}
