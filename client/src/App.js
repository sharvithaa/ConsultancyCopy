import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "./util/authRoutes";

import HomePage from "./components/Home";
import AddProductPage from "./components/Addproduct";
import UpdateProductPage from "./components/Updateproduct"
import DeleteProductPage from "./components/Deleteproduct"
import AuthPage from "./components/authPage";
import CartPage from "./components/cartPage";
import Payment from "./components/Payment";

import { AuthContext } from "./context/authContext";
import { useState } from "react";
import AdminPage from "./components/AdminPage";
import OrdersPage from "./components/orderpage";
import Signup from "./components/Signup";

function App() {
  const [userLoggedData, setUserLoggedData] = useState({
    token: null,
    userId: null,
    isAdmin: false,
  });

  const login = (token, userId, isAdmin) => {
    //console.log("app token", token);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("isAdmin", isAdmin);
    setUserLoggedData({ token: token, userId: userId, isAdmin: isAdmin });
  };

  const logout = () => {
    setUserLoggedData({ token: null, userId: null, isAdmin: false });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
  };

  return (
    <AuthContext.Provider
      value={{
        token: userLoggedData.token,
        userId: userLoggedData.userId,
        isAdmin: userLoggedData.isAdmin,
        login: login,
        logout: logout,
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<CartPage />} />
        {/* protected views*/}
        <Route
          path="/addProduct"
          element={
            <RequiredAuth>
              <AddProductPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/update/:id"
          element={
            <RequiredAuth>
              <UpdateProductPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/delete/:id"
          element={
            <RequiredAuth>
              <DeleteProductPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequiredAuth>
              <AdminPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/payment"
          element={
            <RequiredAuth>
              <Payment />
            </RequiredAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequiredAuth>
              <OrdersPage />
            </RequiredAuth>
          }
        />
      </Routes>
      
    </AuthContext.Provider>
  );
}

export default App;
