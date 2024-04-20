import React, { useState } from "react";
import login from '../assets/Login.gif';
import { Link } from "react-router-dom";

const Login = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Call onClose function passed from parent
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };

    if (formData.username === "") {
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);

    // Check if there are no errors, then proceed with form submission
    if (newErrors.username === "" && newErrors.password === "") {
      console.log("Form submitted:", formData);
      // Add logic here to handle form submission, e.g., API call
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="border bg-white flex items-center rounded-2xl shadow-3xl">
            <div className="float-left rounded-2xl overflow-hidden">
              <img src={login} alt="Login" height="50px"/>
            </div>
            <div className='flex flex-col gap-0.5 p-4 w-1/2'>
              <button onClick={handleClose} className="absolute top-4 right-52 m-20 text-gray-500 hover:text-gray-800 focus:outline-none">
                {/* Close symbol */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className='mt-2.5 font-bold text-2xl'>Login</h3>
              <p className=''>Just some details to get you in!</p>
              <form onSubmit={handleSubmit}>
                <label className='my-1.5'>
                  <input type="text" name="username" placeholder='Username' value={formData.username} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
                </label>
                <div className="text-sm text-red-500 h-2 mb-4">{errors.username}</div>
                <label className='my-1.5'>
                  <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
                </label>
                <div className="text-sm text-red-500 h-2 mb-2">{errors.password}</div>
                <div className="btn mt-2 flex justify-center">
                  <button type="submit" className='text-white hover:text-gray-500 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 bg-customColor'>Login</button>
                </div>
              </form>
              <label className='text-black hover:underline hover:text-white-500 mt-1.5 text-center'>
                <p className=''>Don't have an account?<a href="/signup" className='text-black'>Signup</a></p>
              </label>
              <div className="footer rounded-[10px] grid grid-cols-2 mt-2">
                <a href="" className='text-black flex justify-start hover:underline hover:text-white-500'>Support</a>
                <a href="" className='text-black flex justify-end hover:underline hover:text-white-500'>Customer Care</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
