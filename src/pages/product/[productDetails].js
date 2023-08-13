import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import React from "react";

const productDetails = ({ product }) => {
  // console.log("single product data", product);
  const {
    title,
    image,
    Status,
    Category,
    Price,
    Description,
    Features,
    Average_Rating,
    Individual_Rating,
    Reviews,
  } = product;
  return (
    <div className="min-h-[80vh] text-accent bg-secondary">
      <h1 className="text-center  font-semibold text-3xl py-5">All details </h1>
      <div className=" w-full lg:min-h-[40vh] flex flex-col lg:flex-row justify-between">
        <div className="left flex  justify-center items-center  w-full">
          <Image
            src={image}
            width={400}
            height={400}
            alt="Product Image"
          ></Image>
        </div>
        <div className="right p-3  w-full ">
          <h3 className="text-2xl font-semibold ">Info:</h3>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p>Product Category: {Category}</p>
            <p>Description: {Description}</p>
            <p>Price: ${Price}</p>
            <p>Product status: {Status}</p>
            <p>Individual Ratings: {Individual_Rating}</p>
            <p>Average Ratings: {Average_Rating}</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:min-h-[40vh] flex flex-col lg:flex-row justify-between">
        <div className="left p-3 flex justify-center w-full">
          <div className="">
            <h4 className="text-2xl font-semibold "> Key Features:</h4>
            <p>Brand: {Features.Brand}</p>
            <p>Model: {Features.Model}</p>
            <p>Specification: {Features.Specification}</p>
            <p>Voltage: {Features.Voltage}</p>
          </div>
        </div>
        <div className="right p-3  w-full ">
          <h4 className="text-2xl font-semibold "> Product Review:</h4>
          <div>
            {Reviews.map((review) => (
              <p key={review}>{review}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;

productDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      productDetails: product._id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/product/${params.productDetails}`
  );
  const data = await res.json();
  // console.log("single product data", data);

  return {
    props: {
      product: data,
    },
  };
};
