import Banner from "@/components/home/Banner";
import ComingSoon from "@/components/home/ComingSoon";
import Experience from "@/components/home/Experience";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const Home = ({ products, catagories }) => {
  return (
    <>
      <Banner />
      <Experience />
      <FeaturedProduct products={products} />
      <ComingSoon />
      <FeaturedCategories catagories={catagories} />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:5000/products");
  const products = await res1.json();

  // console.log("All Products", products);

  const res2 = await fetch("http://localhost:5000/categories");
  const catagories = await res2.json();
  // console.log(catagories)

  return {
    props: {
      products: products,
      catagories: catagories,
    },
    // revalidate: 100,
  };
};
