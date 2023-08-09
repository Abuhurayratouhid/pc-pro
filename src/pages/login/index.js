import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen">
      <h1>Login page</h1>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
