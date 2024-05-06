import React from "react";
import pic from "../assets/20943401.jpg";

const Contact = () => {
  return (
    <div className="mb-10 flex flex-col md:flex-row gap-0.5 items-center">
      {/* Image */}
      <div className="md:w-1/2">
        <img src={pic} alt="Contact" className="w-full" />
      </div>
      {/* Form */}
      <div className="md:w-1/2">
        <div className="flex flex-col gap-0.5 p-4">
          <h3 className="mt-2.5 font-bold text-2xl text-center">Contact Us</h3>
          <p className="flex justify-center">Get Quotation!!</p>
          <label className="my-1.5 flex justify-center">
            <input
              type="text"
              placeholder="Name"
              className="w-4/6 bg-transparent text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500"
            />
          </label>
          <label className="my-1.5 flex justify-center">
            <input
              type="email/number"
              placeholder="Email/Phone"
              className="w-4/6 bg-transparent text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500"
            />
          </label>
          <label className="my-1.5 flex justify-center">
            <textarea
              placeholder="Your message"
              className="w-4/6 bg-transparent text-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500"
            ></textarea>
          </label>
          <div className="mt-2 flex justify-center ">
            <button className="w-4/6 bg-black text-white hover:text-[gray] p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
