import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Login from "./Login";
import contact from "./Contact"

const Header = () => {
  const navigate = useNavigate(); // Fix the useNavigate hook usage
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginPopup = () => {
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  // Remove unused state variables

  const goToHome = () => {
    navigate("/");
  };
  
  const goToAddProduct = () => {
    navigate("/addProduct");
  };
  
  const goToLogin = () => {
    navigate("/login");
  };
  
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container p-5 flex justify-between bg-white shadow-lg fixed top-0 sticky">
      <a className="">
        <h1 className="font-bold text-3xl">WizaardSystem</h1>
      </a>
      <div className="space-x-6 font-semibold text-lg ">
        <a onClick={goToHome} className="py-4 px-2 text-black hover:border-b-4 border-customColor font-semibold">Home</a>
        <a href="#about" className="py-4 px-2 text-black font-semibold hover:border-b-4 border-customColor font-semibold">About</a>
        <a href="#products" className="py-4 px-2 text-black font-semibold hover:border-b-4 border-customColor font-semibold">Products</a>
        <a href="#contact" className="py-4 px-2 text-black font-semibold hover:border-b-4 border-customColor font-semibold">Contact</a>
        <button onClick={openLoginPopup} className="py-2 px-2 text-white font-semibold hover:border-b-4 border-customColor font-semibold bg-black rounded-lg">Login</button>
      </div>
      {isLoginOpen && <Login onClose={closeLoginPopup} />}
    </div>
  );
};

export default Header;
