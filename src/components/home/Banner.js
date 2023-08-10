import Image from "next/image";
import React from "react";
import pc from "../../assets/pc-banner-1.png";

const Banner = () => {
  return (
    <div className="lg:min-h-[60vh] md:flex justify-between items-center lg:px-36 bg-secondary text-accent">
      {/* <h1>Home banner</h1> */}
      <div className="left p-5 lg:p-0">
        <h1 className="text-5xl tracking-widest text-center lg:text-start font-bold uppercase">
          Unleash Your <br /> Digital Dreams
        </h1>
        <p className="mt-8 text-center lg:text-start uppercase">
          Crafting Custom PC for Ultimate Performance <br /> and Boundless
          Possibilities
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-primary shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white px-3 py-2 rounded-xl mt-8">
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
