import React from "react";

const Contact=()=>
{
    return(
            <div className='mb-10 flex flex-col gap-0.5 items-center' >
            <h3 className='mt-2.5 font-bold text-2xl text-center'>Contact Us</h3>
            <p className=''>Get Quotation!!</p>
            <label className='my-1.5'>
                <input type="text" placeholder='Name' className='bg-transparent  text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500'  />
            </label>
            <label className='my-1.5'>
                <input type="email/number" placeholder='Email/Phone' className='bg-transparent  text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
            </label> 
            <label className="my-1.5">
                <input type="textarea" placeholder="Your message" className="bg-transparent  text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500"></input>
            </label>
           <div className="mt-2 flex justify-center">
               <button className='bg-black text-white hover:text-[gray] p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500 '>Send</button>
            </div>
        </div>

    )
}
export default Contact;