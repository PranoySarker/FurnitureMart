import React from "react";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="flex gap-5">
        <div className="w-1/3">
          <HomeLeft />
        </div>
        <div className="border-t sm:border-t-0 sm:border-s border-gray-200"></div>
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
