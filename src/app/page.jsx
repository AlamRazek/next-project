import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen  text-white">
      <div className="hero-content  flex-col lg:flex-row-reverse ">
        <div className="bg-transparent ">
          <Image src="/hero.gif" alt="" width="500" height="500" className="" />
        </div>
        <div className="lg: w-[50%]">
          <h1 className="text-5xl font-bold">Creative Thoughts Agency.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-3">
            <button
              className=" px-4 py-3  cursor-pointer
             border-none rounded-md bg-[#3673fd] text-white"
            >
              Learn More
            </button>
            <button
              className=" px-4 py-3  min-w-28 cursor-pointer
             border-none rounded-md bg-[#ffffff] text-black"
            >
              Contact
            </button>
          </div>
          <div className="lg: my-3">
            <Image
              src="/brands.png"
              alt=""
              width="500"
              height="500"
              className="filter grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
