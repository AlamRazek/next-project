import React from "react";

const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-300 font-bold">Author</span>
      <span className="font-medium">{user.username} </span>
    </div>
  );
};

export default PostUser;
