import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Banner from "@/components/home/Banner";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const Home = () => {
  return <Banner />;
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
