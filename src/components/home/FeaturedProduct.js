/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../Card";

const FeaturedProduct = () => {
  return (
    <div className="min-h-screen bg-secondary lg:px-36">
      <h1 className="text-5xl text-accent font-bold text-center py-20">
        Featured product{" "}
      </h1>
      {/* Product Card  */}
      <Card />
    </div>
  );
};

export default FeaturedProduct;
