import React from "react";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Home Page</h1>
        <p className="text-lg text-gray-700 mb-4">
          Discover our services and offerings. We are here to help you achieve
          your goals.
        </p>
        <p className="text-lg text-gray-700">
          Our team is committed to providing exceptional service and support.
        </p>
      </div>
    </>
  );
};

export default Home;
