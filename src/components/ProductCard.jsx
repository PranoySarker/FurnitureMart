import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden  hover:shadow-lg">
      <div className="relative">
        <img className="w-full" src={product.image} alt="Product Image" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.details}</p>

        <p className="font-bold text-lg ">$19.99</p>
        <button
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 mt-2"
        >
          <span className="mr-2">
            <img src="./images/Added.png" alt="" />
          </span>
          Sign in with Apple
        </button>
      </div>
    </div>
  );
};

export default ProductCard;