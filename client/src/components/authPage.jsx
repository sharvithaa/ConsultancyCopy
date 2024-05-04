import React, { useState } from "react";
import NavBar from "../components/Header";
import LoginForm from "../components/Login";
import RegisterForm from "../components/Signup";

const AuthPage = () => {
  const [loginShow, setLoginShow] = useState(true);

  const handleSignup = () => {
    setLoginShow(!loginShow);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        {loginShow ? (
          <LoginForm showSignup={handleSignup} />
        ) : (
          <RegisterForm showSignup={handleSignup} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
