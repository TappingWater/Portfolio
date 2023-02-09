"use client";

import { allBlogs } from "contentlayer/generated";
import BlogCard from "@/components/BlogCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";

export default function BlogPage() {
  const displayNumItems = 4;

  const [blogItemsOnDisplay, setBlogItemsOnDisplay] = useState(
    allBlogs.slice(0, displayNumItems)
  );
  let [loading, setLoading] = useState(true);
  let [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      console.log("fetching next set");
      setBlogItemsOnDisplay((prevBlogList) => {
        const end =
          prevBlogList.length + displayNumItems > allBlogs.length
            ? allBlogs.length
            : prevBlogList.length + displayNumItems;
        setHasMore(end == allBlogs.length ? false: true); 
        const nextItems = allBlogs.slice(prevBlogList.length, end);
        setLoading(!loading);
        return prevBlogList.concat(nextItems);
      });
    }, 1000);
  };

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    marginBottom: "20",
    borderColor: "white"
  };

  const loader = () => {
    return (      
      <PacmanLoader
        className="mt-[2px]"                
        cssOverride={override}
        size={20}
        color="white"
        margin='10'
      />
    );
  }

  const infiniteScroll = () => {
    return (
      <InfiniteScroll        
        dataLength={blogItemsOnDisplay.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={loader()}
      >
        {blogItemsOnDisplay.map((blog, index) => (
          <div key={index}>
            <BlogCard
              title={blog.title}
              summary={blog.summary}
              image={blog.image}
              slug = {blog.slug}
            ></BlogCard>
          </div>
        ))}
      </InfiniteScroll>
    );
  };

  return <section className="h-[100%]">{infiniteScroll()}</section>;
}
