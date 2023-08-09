import Image from "next/image";
import React from "react";
import pc from "../../assets/pc-banner-1.png";

const Banner = () => {
  return (
    <div className="lg:min-h-[80vh] md:flex justify-between items-center lg:px-36 bg-secondary text-accent">
      {/* <h1>Home banner</h1> */}
      <div className="left p-5">
        <h1 className="text-5xl text-center lg:text-start font-bold uppercase">
          Unleash Your <br /> Digital Dreams
        </h1>
        <p className="mt-8 text-center lg:text-start">
          Crafting Custom PCs for Ultimate Performance <br /> and Boundless
          Possibilities
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-primary  text-white px-3 py-2 rounded-xl mt-8">
            Build your own
          </button>
        </div>
      </div>
      <div className="right">
        <Image src={pc} width={500} height={500} alt="PC"></Image>
      </div>
    </div>
  );
};

export default Banner;
