import React from "react";
import Card from "../Card";

const FeaturedCategories = ({ catagories }) => {
  // console.log("Categories file", catagories);
  return (
    <div className="min-h-screen bg-secondary lg:px-36">
      <h1 className="text-5xl text-accent font-bold text-center py-20">
        Featured Categories{" "}
      </h1>

      {/* featured card  */}
      <div className="flex gap-5 justify-between flex-wrap">
        {catagories.map((category) => (
          <Card key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
