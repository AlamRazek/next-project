import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Notfound page...</h1>
      <button className="block btn bg-red-500 text-white py-2 px-4 rounded">
        {" "}
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
