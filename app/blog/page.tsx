"use client";

import { allBlogs } from "contentlayer/generated";
import BlogCard from "@/components/BlogCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";

export default async function BlogPage() {
  const [blogItemsOnDisplay, setBlogItemsOnDisplay] = useState(
    allBlogs.slice(0, 4)
  );

  const fetchMoreData = () => {
    setTimeout(() => {
      setBlogItemsOnDisplay((prevBlogList) => {
        const end =
          prevBlogList.length + 4 > allBlogs.length
            ? prevBlogList.length + 4
            : allBlogs.length;
        const nextItems = blogItemsOnDisplay.slice(prevBlogList.length, end);
        return prevBlogList.concat(nextItems);
      });
    }, 1500);
  };

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  const loader = () => {
    return (      
      <PacmanLoader
        color={"#ffffff"}        
        cssOverride={override}
        size={150}
      />
    );
  }

  const infiniteScroll = () => {
    return (
      <InfiniteScroll
        dataLength={allBlogs.length}
        next={fetchMoreData}
        hasMore={true}
        loader={loader()}
      >
        {blogItemsOnDisplay.map((blog, index) => (
          <div key={index}>
            <BlogCard
              title={blog.title}
              summary={blog.summary}
              image={blog.image}
            ></BlogCard>
          </div>
        ))}
      </InfiniteScroll>
    );
  };

  return <section>{infiniteScroll()}</section>;
}
