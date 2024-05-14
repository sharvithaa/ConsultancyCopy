import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signup from '../assets/Sign up.gif';

const Signup = ({ onClose }) => { // Accept onClose as a prop
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    isadmin: false
  });

  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    // If it's the admin checkbox, set the checked status directly
    const newValue = name === "isadmin" ? checked : value;
    setUserData({ ...userData, [name]: newValue });
  };

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("https://consultancycopy-be.onrender.com/api/users/signup", userData);
      console.log("Signup successful:", response.data);
      // Assuming the response contains token, userId, and isAdmin
      onClose(); // Close the popup
      navigate("/login"); // Redirect to home page after successful registration
    } catch (error) {
      console.error("Error registering user:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // Display the server's error message
        setErrorMessage(error.response.data.error || "An error occurred. Please try again.");
      } else if (error.request) {
        // The request was made but no response was received
        // This could happen due to network issues or server being down
        setErrorMessage("Could not connect to the server. Please try again later.");
      } else {
        // Something else happened in making the request that triggered an error
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  const handleClosePopup = () => {
    // Call onClose function to close the popup
    onClose();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="border bg-white flex items-center rounded-2xl">
          {/* Image */}
          <div className="float-right rounded-2xl overflow-hidden">
            <img src={signup} alt="Signup" height="50px" />
          </div>
          {/* Form */}
          <div className='flex flex-col gap-0.5 p-4 w-1/2'>
            <h3 className='mt-2.5 font-bold text-2xl'>Signup</h3>
            <p className=''>Just some details to get you in!</p>
            <form onSubmit={handleRegister} method="POST">
              {/* Username input */}
              <label className='my-1.5'>
                <input type="text" name="username" placeholder='Username' onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
              </label>
              <div className="my-1.5"></div>
              {/* Email input */}
              <label className='my-1.5'>
                <input type="email" name="email" placeholder='Email' onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
              </label>
              <div className="my-1.5"></div>
              {/* Password input */}
              <label className='my-1.5'>
                <input type="password" name="password" placeholder='Password' onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
              </label>
              <div className="my-1.5"></div>
              {/* Confirm password input */}
              <label className='my-1.5'>
                <input type="password" name="confirmPassword" placeholder='Confirm password' onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
              </label>
              <label className='my-1.5'>
                <input
                  type="checkbox"
                  name="isadmin"
                  checked={userData.isadmin}
                  onChange={handleInputChange}
                  className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500'
                />
                Admin?
              </label>
              {/* Submit button */}
              <div className="btn mt-2 flex justify-center">
                <button type="submit" className='text-white hover:text-gray-500 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 bg-customColor'>Signup</button>
                <button type="button" onClick={handleClosePopup} className='text-white hover:text-gray-500 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 bg-red-500 ml-4'>Close</button>
              </div>
            </form>
            {/* Login link */}
            <label className='text-black hover:underline hover:text-white-500 mt-1.5 text-center'>
              <p className=''>Already registered?<a href="/login" className='text-black'>Login</a></p>
            </label>
            {/* Footer */}
            <div className="footer rounded-[10px] grid grid-cols-2 mt-2">
              <a href="" className='text-black flex justify-start hover:underline hover:text-white-500'>Support</a>
              <a href="" className='text-black flex justify-end hover:underline hover:text-white-500'>Customer Care</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
