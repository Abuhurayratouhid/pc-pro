import Image from "next/image";
import React from "react";
import headPhone from "../../assets/Headpone.png";

const ComingSoon = () => {
  return (
    <div className="lg:min-h-[70vh] md:flex justify-between items-center lg:px-36 bg-secondary text-accent">
      {/* <h1>Home banner</h1> */}
      <div className="left">
        <Image
          className="rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          src={headPhone}
          width={400}
          height={400}
          alt="PC"
        ></Image>
      </div>
      <div className="right p-5 lg:p-0">
        <h1 className="text-5xl tracking-widest text-center lg:text-start font-bold uppercase">
          Coming Soon
        </h1>
        <p className="mt-8 text-center lg:text-start uppercase">
          Crafting Custom PCs for Ultimate Performance <br /> and Boundless
          Possibilities
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-primary shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white px-3 py-2 rounded-xl mt-8">
            Pre Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
