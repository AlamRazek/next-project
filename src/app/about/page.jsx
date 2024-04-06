import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    /*     <div className="">
      <div className="">
        <h2>About Agency</h2>
        <h2>
         
        </h2>
        <p>
          We create digital ideas that are bigger,bolder nad braver.We believe
          in good ideas flexibility and precission. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facilis, animi atque. Quasi impedit quia
          deleniti eos minus laboriosam temporibus harum nesciunt, beatae et
          sunt, natus nulla architecto eveniet excepturi fuga tenetur aliquam
          deserunt error consequatur laborum autem unde aperiam. Reprehenderit.
        </p>
      </div>
      <div className=""></div>
    </div> */
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src="/about.png" height="500" width="500" />
        <div className="max-w-[50%]">
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
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>

              <div className="stat-value text-[#3673fd]">10 k+</div>
              <div className="stat-desc text-white">Years of experience</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>

              <div className="stat-value text-[#3673fd]">4,200</div>
              <div className="stat-desc text-white">People reached</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>

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
