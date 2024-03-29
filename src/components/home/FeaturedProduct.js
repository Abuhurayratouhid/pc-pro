/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../Card";
import Link from "next/link";

const FeaturedProduct = ({ products }) => {
  // console.log("products file", products);
  return (
    <div className="min-h-screen bg-secondary lg:px-36">
      <h1 className="text-5xl text-accent font-bold text-center py-20">
        Featured product{" "}
      </h1>
      {/* Product Card  */}
      <div className="flex gap-5 justify-between flex-wrap">
        {products.map((product) => (
          <div
            key={product._id}
            className="max-w-sm p-4 shadow-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-300 bg-black text-accent"
          >
            <div className="flex justify-between pb-4 border-bottom">
              <div className="flex items-center">
                <p className="mb-0 capitalize text-primary">
                  $ {product.Price}
                </p>
              </div>
              <p className="text-primary">{product.Status}</p>
              {/* <a rel="noopener noreferrer" href="#">
                
              </a> */}
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="flex items-center text-xs">
                  <span>{product.Category}</span>
                </div>
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold ">{product.title}</h3>
                </a>
                <p className="leadi text-gray-600">{product.Description}</p>
                <p>Rating: {product.Average_Rating}</p>
                <div className="flex justify-center">
                  <Link
                    className="text-primary px-3 py-2 rounded-lg underline"
                    href={`product/${product._id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
