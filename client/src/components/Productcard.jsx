import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { addToCart } from "../store/cartActions";
import { useDispatch } from "react-redux";
import axios from "axios";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(props.product);
  const [token, setToken] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const amountInputRef = useRef();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  const handleUpdate = (id) => {
    navigate("/update/" + id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("https://consultancycopy-be.onrender.com/api/product/delete/" + id);
      console.log(response.data);
      if (response.data === "Product deleted!") {
        // Call the getProduct function passed as a prop from the parent component
        props.getProduct();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddToCart = (product) => {
    const product_item = {
      product: product,
      amount: amountInputRef.current.value,
    };
    dispatch(addToCart(product_item));
  };

  const handleBuyNow = (product) => {
    // Add the product to the cart
    handleAddToCart(product);
    // Redirect to the cart page
    navigate("/cart");
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-xl overflow-hidden mb-5">
      <img
        className="w-auto h-48 object-cover object-center"
        src={product.images}
        alt="Product image"
      />
      <div className="m-2 p-2">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-gray-800">Rs.{product.price}</span>
        </div>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <button
          variant="contained"
          color="primary"
          onClick={() => handleAddToCart(product)}
          className="bg-customColor text-white rounded-lg m-2 p-2 font-semibold"
        >
          + Add
        </button>
        <input
          ref={amountInputRef}
          className="w-16 rounded-none py-1 px-2 text-sm"
          type="number"
          min={1}
          max={5}
          step={1}
          defaultValue={1}
        />
        <button
          variant="contained"
          color="primary"
          onClick={() => handleBuyNow(product)}
          className="bg-customColor text-white rounded-lg m-2 p-2 font-semibold"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
