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
  const [open, setOpen] = useState(false);
  const [accountDialog, setAccountDialog] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
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
  }, [total, addedItems, totalAmount]);

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
    if (!authContext.token) {
      setOpen(true);
    } else {
      setConfirmShow(true);
    }
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleGoToLogin = () => {
    setShowLogin(true);
    setAccountDialog(true);
    setOpen(false);
  };

  const handleCreateAccount = () => {
    setShowLogin(false);
    setAccountDialog(true);
    setOpen(false);
  };

  const handleCloseAccountDialog = async () => {
    setAccountDialog(false);
    setConfirmShow(true);
  };

  const handleCancel = () => {
    setConfirmShow(false);
  };

  const handleConfirm = async () => {
    const order = {
      userID: localStorage.getItem("userId"),
      firstName: checkoutForm.firstName,
      lastName: checkoutForm.lastName,
      address: checkoutForm.address,
      city: checkoutForm.city,
      country: checkoutForm.country,
      zipCode: checkoutForm.zipCode,
      totalAmount: totalAmount,
      items: addedItems,
      createdDate: new Date(),
    };
    try {
      const response = await axios.post("http://localhost:5000/order/create", {
        data: order,
      });
      console.log(response.data);
      if (response.data === "Order saved to the database!") {
        setConfirmShow(false);
        navigate("/orders");
      }
    } catch (e) {
      console.log(e);
    }
    console.log(order);
  };

  return (
    <div>
      <Header/>
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
            {/* Checkout form */}
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

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2">
                    <button
                      onClick={handleCreateAccount}
                      className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 mr-3"
                    >
                      Create Account
                    </button>
                    <button
                      onClick={handleGoToLogin}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {confirmShow && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 mr-3"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirm}
                      className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;
