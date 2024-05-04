import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Adminheader from "./Adminheader";

const DeleteProduct = () => {
  const navigate = useNavigate();
  const [productId, setProductId] = useState("");
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/product/get/${productId}`);
      console.log(response.data);
      setProductData(response.data);
      setError(null); // Clear any previous error
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Error fetching product"); // Set error message
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/product/delete/${productId}`);
      if (response.data === "Product deleted successfully") {
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Error deleting product"); // Set error message
    }
  };

  return (
    <div>
        <Adminheader/>
    <div className="flex justify-center items-center pt-20">
      <div className="w-full max-w-lg">
        <div className="bg-white shadow-md p-6">
          <h1 className="text-xl font-semibold mb-4">Delete Product</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-4">
              <input
                type="text"
                value={productId}
                onChange={handleInputChange}
                placeholder="Enter Product ID"
                className="border rounded p-2 w-full"
              />
              <button
                onClick={getProduct}
                className="bg-customColor text-white px-4 py-2 mt-4 rounded hover:bg-black transition duration-300"
              >
                Get Product Details
              </button>
              {productData && (
                <div>
                  <p className="font-semibold">Title: {productData.title}</p>
                  <p>Description: {productData.description}</p>
                  <p>Price: {productData.price}</p>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600 transition duration-300"
                  >
                    Delete Product
                  </button>
                </div>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteProduct;
