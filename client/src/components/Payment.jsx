import React from 'react';

const Payment = () => {
    return (
        <div className="container mx-auto py-10">
            <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="row">
                    <div className="col">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Billing Address</h3>
                        <div className="inputBox mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name:</label>
                            <input type="text" id="name" placeholder="Enter your full name" required className="input" />
                        </div>
                        <div className="inputBox mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input type="text" id="email" placeholder="Enter email address" required className="input" />
                        </div>
                        {/* Other billing address fields */}
                    </div>
                    <div className="col">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment</h3>
                        <div className="inputBox mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Card Accepted:</label>
                            <img src="https://i.ibb.co/X38b5PF/card-img.png" alt="Accepted Cards" className="card-img" />
                        </div>
                        <div className="inputBox mb-4">
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name On Card:</label>
                            <input type="text" id="cardName" placeholder="Enter card name" required className="input" />
                        </div>
                        <div className="inputBox mb-4">
                            <label htmlFor="cardNum" className="block text-sm font-medium text-gray-700">Credit Card Number:</label>
                            <input type="text" id="cardNum" placeholder="1111-2222-3333-4444" maxLength="19" required className="input" />
                        </div>
                        {/* Other payment fields */}
                    </div>
                </div>
                <input type="submit" value="Proceed to Checkout" className="submit_btn mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" />
            </form>
        </div>
    );
};
export default Payment;
