import React, { useState, useEffect } from "react";
import signup from '../assets/Sign up.gif';

const Signup = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false); // Set initial state to false

  useEffect(() => {
    setIsOpen(true); // Open the component once it's mounted
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleClose = () => {
    setIsOpen(false);
    window.location.href = "/"; // Redirect to the home page
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

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = "";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    } else {
      newErrors.password = "";
    }

    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);

    // Check if there are no errors, then proceed with form submission
    if (
      newErrors.username === "" &&
      newErrors.email === "" &&
      newErrors.password === "" &&
      newErrors.confirmPassword === ""
    ) {
      console.log("Form submitted:", formData);
      // Add logic here to handle form submission, e.g., API call
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="border bg-white flex items-center rounded-2xl">
            <div className="float-right rounded-2xl overflow-hidden">
              <img src={signup} alt="Signup" height="50px" />
            </div>
            <div className='flex flex-col gap-0.5 p-4 w-1/2'>
              <button onClick={handleClose} className="absolute top-16 right-72 text-gray-500 hover:text-gray-800 focus:outline-none">
                {/* Close symbol */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className='mt-2.5 font-bold text-2xl'>Signup</h3>
              <p className=''>Just some details to get you in!</p>
              <form onSubmit={handleSubmit}>
                <label className='my-1.5'>
                  <input type="text" name="username" placeholder='Username' value={formData.username} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
                </label>
                <div className="text-sm text-red-500 h-2 mb-2">{errors.username}</div>
                <label className='my-1.5'>
                  <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
                </label>
                <div className="text-sm text-red-500 h-2 mb-2">{errors.email}</div>
                <label className='my-1.5'>
                  <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
                </label>
                <div className="text-sm text-red-500 h-2 mb-2">{errors.password}</div>
                <label className='my-1.5'>
                  <input type="password" name="confirmPassword" placeholder='Confirm password' value={formData.confirmPassword} onChange={handleInputChange} className='bg-transparent w-full text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
                </label>
                <div className="text-sm text-red-500 h-2 mb-2">{errors.confirmPassword}</div>
                <div className="btn mt-2 flex justify-center">
                  <button className='text-white hover:text-gray-500 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 bg-customColor'>Signup</button>
                </div>
              </form>
              <label className='text-black hover:underline hover:text-white-500 mt-1.5 text-center'>
                <p className=''>Already registered?<a href="/login" className='text-black'>Login</a></p>
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

export default Signup;
