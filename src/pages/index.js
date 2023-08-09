import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <h1>Home page</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
