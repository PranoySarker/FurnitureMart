import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import CartPage from "./page/CartPage";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/authContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Checkout from "./page/Checkout";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
