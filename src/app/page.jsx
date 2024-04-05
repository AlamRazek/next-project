import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-white text-black">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <Image
          src="/about.png"
          className="max-w-sm rounded-lg "
          alt=""
          width="500"
          height="500"
        />
        <div className="lg: w-[50%]">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-primary">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
