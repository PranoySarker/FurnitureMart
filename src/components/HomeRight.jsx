import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard";

const HomeRight = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full grid grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeRight;
