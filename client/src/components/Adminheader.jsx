import React, { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';

const Adminheader = () => {
  const navigate = useNavigate(); // Fix the useNavigate hook usage
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginPopup = () => {
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  // Remove unused state variables

//   const goToHome = () => {
//     navigate("/");
//   };
  
//   const goToAddProduct = () => {
//     navigate("/addProduct");
//   };
  
//   const goToLogin = () => {
//     navigate("/login");
//   };
  
//   const logOut = () => {
//     localStorage.clear();
//     navigate("/");
//   };

  return (
    <div className="container p-5 flex justify-between bg-white shadow-lg fixed top-0 sticky">
      <a className="">
        <h1 className="font-bold text-3xl">WizaardSystem</h1>
      </a>
      <div className="space-x-6 font-semibold text-lg ">
        <a  className="py-4 px-2 text-black hover:border-b-4 border-customColor font-semibold">Home</a>
        <Link to="/addproduct"className="py-4 px-2 text-black font-semibold hover:border-b-4 border-customColor font-semibold">AddProduct</Link>
        <Link to="/update/:id" className="py-4 px-2 text-black font-semibold hover:border-b-4 border-customColor font-semibold">UpdateProduct</Link>
        <Link to="/delete/:id" className="py-4 px-2 text-black font-semibold hover:border-b-4 border-customColor font-semibold">DeleteProdcut</Link>
        <Link to="/orders" className="py-4 px-2 text-black font-semibold hover:border-b-4 border-customColor font-semibold">Orders</Link>
      </div>
      {/* {isLoginOpen && <Login onClose={closeLoginPopup} />} */}
    </div>
  );
};

export default Adminheader;
