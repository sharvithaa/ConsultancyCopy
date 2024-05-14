import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./Productcard"; // Import the ProductCard component

const Product = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("https://consultancycopy-be.onrender.com/api/product/read");
      setProductList(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-10 p-5">
      <h2 className="text-center text-3xl font-bold mb-5">Products</h2>
      <div className="flex flex-wrap">
        {productList.length !== 0 &&
          productList.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default Product;
