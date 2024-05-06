import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { addToCart, removeFromCart } from "../store/cartActions";
import emptyCart from "../assets/emptycart.png";
import axios from "axios";
import Header from "../components/Header";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);
  const addedItems = useSelector((state) => state.cartStore.addedItems);
  const total = useSelector((state) => state.cartStore.total);
  const [totalAmount, setTotalAmount] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  useEffect(() => {
    if (total !== undefined) {
      setTotalAmount(`Rs.${total.toFixed(2)}`);
    }
  }, [total, addedItems]);

  const goBack = () => {
    navigate("/");
  };

  const cartItemRemoveHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const cartItemAddHandler = (item) => {
    const product_item = {
      product: item,
      amount: 1,
    };
    dispatch(addToCart(product_item));
  };

  const handleCheckout = async () => {
    const order = {
      userID: localStorage.getItem("userId"),
      firstName: checkoutForm.firstName,
      lastName: checkoutForm.lastName,
      address: checkoutForm.address,
      city: checkoutForm.city,
      country: checkoutForm.country,
      zipCode: checkoutForm.zipCode,
      totalAmount: parseFloat(totalAmount.replace("Rs.", "")),
      items: addedItems,
      createdDate: new Date(),
    };
    try {
      const response = await axios.post("http://localhost:5000/order/create", {
        data: order,
      });
      console.log(response.data);
      if (response.data === "Order saved to the database!") {
        // Redirect to the payment page
        navigate("/payment");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10">
        {addedItems.length !== 0 ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white shadow-md rounded">
              <h2 className="text-lg font-semibold mb-5">Your Cart</h2>
              <ul>
                {addedItems.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center justify-between border-b py-3"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 mr-3"
                      />
                      <span>{item.title}</span>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => cartItemRemoveHandler(item._id)}
                        className="px-3 py-1 bg-gray-200 rounded-md mr-2"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => cartItemAddHandler(item)}
                        className="px-3 py-1 bg-gray-200 rounded-md ml-2"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-5">
                <span>Total:</span>
                <span>{totalAmount}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Checkout
              </button>
            </div>
            <div className="p-5 bg-white shadow-md rounded">
              <div className="p-5 bg-white shadow-md rounded">
                <h2 className="text-lg font-semibold mb-5">Checkout Form</h2>
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={checkoutForm.firstName}
                      onChange={handleFormInput}
                      className="border p-2 rounded-md"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={checkoutForm.lastName}
                      onChange={handleFormInput}
                      className="border p-2 rounded-md"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={checkoutForm.address}
                      onChange={handleFormInput}
                      className="border p-2 rounded-md"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={checkoutForm.city}
                      onChange={handleFormInput}
                      className="border p-2 rounded-md"
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={checkoutForm.country}
                      onChange={handleFormInput}
                      className="border p-2 rounded-md"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      value={checkoutForm.zipCode}
                      onChange={handleFormInput}
                      className="border p-2 rounded-md"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-10">
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mb-5"
            >
              Back to Shop
            </button>
            <img src={emptyCart} alt="Empty Cart" className="w-48 h-48" />
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
