import React from "react";
import Card from "../Card";

const FeaturedCategories = () => {
  return (
    <div className="min-h-screen bg-secondary lg:px-36">
      <h1 className="text-5xl text-accent font-bold text-center py-20">
        Featured Categories{" "}
      </h1>

      {/* featured card  */}
      <div className="flex gap-5 justify-between flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FeaturedCategories;
