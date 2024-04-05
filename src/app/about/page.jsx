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
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
