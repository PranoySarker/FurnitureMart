import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

const HomeRight = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="w-full">
      <div>right</div>
    </div>
  );
};

export default HomeRight;
