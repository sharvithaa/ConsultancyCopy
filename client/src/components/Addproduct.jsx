import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Adminheader from "./Adminheader";

const AddProduct = () => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
      title: "",
      description: "",
      images: "",
      price: "",
      thumbnail: "",
    });

    const handleInputChanges = (event) => {
        const { name, value } = event.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSave = async () => {
        console.log(productData);
        try {
          const response = await axios.post("https://consultancycopy-be.onrender.com/api/product/create", productData);
          if (response.status === 201) {
            navigate("/");
          }
        } catch (e) {
          console.log(e);
        }
    };

    return(
        <div>
            <Adminheader/>
        <div className="flex justify-center items-center pt-20">
            <div className="bg-white shadow-md p-6 w-96">
                <h1 className="text-xl font-semibold mb-4">Add Product</h1>
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <input
                            type="text"
                            name="title"
                            value={productData.title}
                            onChange={handleInputChanges}
                            placeholder="Title"
                            className="border rounded p-2 w-full"
                        />
                        <input
                            type="text"
                            name="description"
                            value={productData.description}
                            onChange={handleInputChanges}
                            placeholder="Description"
                            className="border rounded p-2 w-full"
                        />
                        <div className="space-y-2">
                            <input
                                type="text"
                                name="images"
                                value={productData.images}
                                onChange={handleInputChanges}
                                placeholder="Image link"
                                className="border rounded p-2 w-full"
                            />
                            <input
                                type="number"
                                name="price"
                                value={productData.price}
                                onChange={handleInputChanges}
                                placeholder="Price"
                                className="border rounded p-2 w-full"
                            />
                            <input
                                type="text"
                                name="thumbnail"
                                value={productData.thumbnail}
                                onChange={handleInputChanges}
                                placeholder="Thumbnail"
                                className="border rounded p-2 w-full"
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleSave}
                    className="bg-customColor text-white px-4 py-2 mt-4 rounded hover:bg-black transition duration-300"
                >
                    Save
                </button>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;
