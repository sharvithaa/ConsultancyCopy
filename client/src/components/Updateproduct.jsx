import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Adminheader from "./Adminheader";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("https://consultancycopy-be.onrender.com/get/" + id);
      console.log(response.data);
      setProductData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    setProductData({ ...productData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put("https://consultancycopy-be.onrender.com/update/" + id, {
        data: productData,
      });
      if (response.data === "Product updated successfully!") {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Adminheader/>
    <div className="flex justify-center items-center pt-20">
      <div className="w-full max-w-lg">
        <div className="bg-white shadow-md p-6">
          <h1 className="text-xl font-semibold mb-4">Update Product</h1>
          <div className="grid grid-cols-1 gap-4 ">
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={productData.title || ""}
                onChange={handleInputChanges}
                placeholder="Title"
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                name="description"
                value={productData.description || ""}
                onChange={handleInputChanges}
                placeholder="Description"
                className="border rounded p-2 w-full"
              />
            <div className="space-y-4">
              <input
                type="text"
                name="images"
                value={productData.images || ""}
                onChange={handleInputChanges}
                placeholder="Image link"
                className="border rounded p-2 w-full"
              />
              <input
                type="number"
                name="price"
                value={productData.price || ""}
                onChange={handleInputChanges}
                placeholder="Price"
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                name="thumbnail"
                value={productData.thumbnail || ""}
                onChange={handleInputChanges}
                placeholder="Thumbnail"
                className="border rounded p-2 w-full"
              />
              </div>
            </div>
          </div>
          <button
            onClick={handleUpdate}
            className="bg-customColor text-white px-4 py-2 mt-4 rounded hover:bg-black transition duration-300 block w-full"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UpdateProduct;