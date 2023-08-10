import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const PcBuilder = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center font-bold my-10">
        Start Build your own PC:
      </h1>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
