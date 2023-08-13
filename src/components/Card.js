/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Card = ({ category }) => {
  const { title, image, _id } = category;

  // console.log(product)
  // console.log("card", product.Average_Rating);
  return (
    <div>
      <div className="max-w-sm p-4 shadow-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-300 bg-black text-accent">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center"></div>
          <Link className="text-primary" href={`/category/${_id}`}>
            See All Products
          </Link>
          {/* <a rel="noopener noreferrer" href="#">
            
          </a> */}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt="category pic"
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="flex items-center text-xs">
              {/* <span>6 min ago</span> */}
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-accent">{title}</h3>
            </a>
            {/* <p className="leadi text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
