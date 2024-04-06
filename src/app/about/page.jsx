import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src="/about.png" height="500" width="500" />
        <div className="lg:max-w-[50%]">
          <h1 className="text-5xl font-bold">
            {" "}
            We create digital ideas that are bigger,bolder, braver and better.
          </h1>
          <p className="py-6">
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
          <div className="stats  bg-transparent border-none flex flex-col md:flex-row ">
            <div className="stat">
              <div className="stat-value text-[#3673fd]">10 k+</div>
              <div className="stat-desc text-white">Years of experience</div>
            </div>

            <div className="stat">
              <div className="stat-value text-[#3673fd]">4,200</div>
              <div className="stat-desc text-white">People reached</div>
            </div>

            <div className="stat">
              <div className="stat-value text-[#3673fd]">1,200</div>
              <div className="stat-desc text-white my-1">
                Services and plugins
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
