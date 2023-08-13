/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/components/layout/RootLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const categoryProducts = ({ category }) => {
  const { products } = category;
  //   const router = useRouter();
  //   const { categoryId } = router.query;
  //   console.log("categoryId", products);
  return (
    <div className="min-h-screen bg-secondary lg:px-36">
      <h1>categoryProducts page </h1>

      <div className="flex gap-5 justify-between flex-wrap">
        {products.map((product) => (
          <div
            key={product.Product_Name}
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
                  src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg"
                  alt="Product Image"
                  className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="flex items-center text-xs">
                  <span>{product.Category}</span>
                </div>
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold ">
                    {product.Product_Name}
                  </h3>
                </a>
                <p className="leadi text-gray-600">{product.Description}</p>
                <p>
                  Rating:{" "}
                  {product.Average_Rating ? product.Average_Rating : "4.3"}
                </p>
                <div className="flex justify-center">
                  <Link
                    key={product.Product_Name}
                    className="text-primary px-3 py-2 rounded-lg underline"
                    href={`product/${product.id}`}
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

export default categoryProducts;

categoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();
  //   console.log(products);

  const paths = categories.map((cat) => ({
    params: {
      categoryId: cat._id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  //   const id = params.categoryId.toString();
  //   console.log(params);
  const res = await fetch(
    `http://localhost:5000/category/${params.categoryId}`
  );
  const data = await res.json();
  //   console.log("single product data", data);

  return {
    props: {
      category: data,
    },
  };
};
