import PostCard from "@/components/postCard/postCard";
import React from "react";

const blogPage = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="w-full md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
    </div>
  );
};

export default blogPage;
