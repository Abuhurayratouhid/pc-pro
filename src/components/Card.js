/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div>
      <div className="max-w-sm p-4 shadow-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-300 bg-black text-accent">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize ">
              Photography
            </a>
          </div>
          <Link className="text-primary" href="/">
            All Details
          </Link>
          {/* <a rel="noopener noreferrer" href="#">
            
          </a> */}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/random/480x360/?4"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leadi text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
