import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import { AuthProvider } from "./context/authContext";
import { ProductProvider } from "./context/ProductContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
