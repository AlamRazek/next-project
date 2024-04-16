import PostCard from "@/components/postCard/postCard";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const blogPage = async () => {
  const posts = await getData();

  return (
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <div key={post.id} className="w-full md:w-[45%] xl:w-[30%]">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default blogPage;
