import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="relative  w-[100%] h-96 ">
        <Image src="/about.png" alt="" fill></Image>
      </div>
    </div>
  );
};

export default AboutPage;
