import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } =
    useContext(CartContext);

  const cartTotal = getCartTotal(cartItems);

  return (
    <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                An overview of your order
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                {cartItems.length} Items
              </h2>
            </div>

            {cartItems.map((cartItem) => (
              <div
                className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group"
                key={cartItem.id}
              >
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button
                      onClick={() => removeFromCart(cartItem)}
                      className="group rounded-l-xl px-5 py-[8px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                    >
                      <svg
                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[5px]  text-center bg-transparent"
                      placeholder={cartItem.quantity}
                    />
                    <button
                      onClick={() => addToCart(cartItem)}
                      className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                    >
                      <svg
                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="w-full md:max-w-[126px]">
                  <img
                    src={cartItem.image}
                    alt="perfume bottle image"
                    className="mx-auto rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                  <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                      <h6 className="font-semibold text-base leading-7 text-black">
                        {cartItem.name}
                      </h6>
                    </div>
                  </div>

                  <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                      ${cartItem.price * cartItem.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length > 0 ? (
              <button
                type="button"
                className=" text-center bg-red-500 rounded-sm mt-10 py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-red-700"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            ) : (
              <p className="text-center mt-10 text-xl font-semibold text-gray-600">
                You have no item to show
              </p>
            )}
          </div>

          <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order details
            </h2>
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-medium text-lg leading-8 text-gray-600">
                  Subtotal
                </p>
                <p className="font-medium text-lg leading-8 text-gray-600">
                  ${cartTotal}
                </p>
              </div>
              <form>
                <div className="flex justify-between">
                  <p className=" mb-1.5 text-gray-600 text-sm font-medium">
                    Shipping
                  </p>
                  <p className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Free
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className=" mb-1.5 text-gray-600 text-sm font-medium">
                    Estimated Tax
                  </p>
                  <p className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                    $ -
                  </p>
                </div>

                <div className="flex items-center justify-between py-8">
                  <p className="font-medium text-xl leading-8 text-black">
                    Total
                  </p>
                  <p className="font-semibold text-xl leading-8 text-Black">
                    ${cartTotal}
                  </p>
                </div>
                <Link to="/checkout">
                  <button
                    type="button"
                    className="w-full text-center bg-black rounded-sm py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-gray-700"
                  >
                    Checkout
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
