import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import login from '../assets/Login.gif';

const Login = ({ onClose }) => { // Accept onClose as a prop
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", loginData);
      const responseData = response.data;
      localStorage.setItem("token", responseData.token);
      navigate(responseData.isAdmin ? "/admin" : "/");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password");
    }
  };

  const handleClose = () => {
    // Call onClose function to close the popup
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="border bg-white flex items-center rounded-2xl shadow-3xl">
        <div className="float-left rounded-2xl overflow-hidden">
          <img src={login} alt="Login" height="50px"/>
        </div>
        <div className='flex flex-col gap-0.5 p-4 w-1/2 '>
          <div className="flex justify-end">
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-800 focus:outline-none" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h3 className='mt-2.5 font-bold text-2xl'>Login</h3>
          <p className=''>Just some details to get you in!</p>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label className='my-1.5 mb-3'>
                <input type="text" name="email" placeholder='Email' value={loginData.email} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
              </label>
              <div className="my-1.5"></div>
              <label className='my-1.5'>
                <input type="password" name="password" placeholder='Password' value={loginData.password} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
              </label>
              <div className="text-sm text-red-500 mb-1.5">{error}</div>
            </fieldset>
            <div className="btn mt-2 flex justify-center mb-1.5">
              <button type="submit" className='text-white hover:text-gray-500 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 bg-customColor'>Login</button>
            </div>
          </form>
          <p className='text-black hover:underline hover:text-white-500 mt-1.5 text-center'>
            Don't have an account? <Link to="/signup" className='text-black hover:underline hover:text-white-500'>Signup</Link>
          </p>
          <div className="footer rounded-[10px] grid grid-cols-2 mt-2">
            <a href="" className='text-black flex justify-start hover:underline hover:text-white-500'>Support</a>
            <a href="" className='text-black flex justify-end hover:underline hover:text-white-500'>Customer Care</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
