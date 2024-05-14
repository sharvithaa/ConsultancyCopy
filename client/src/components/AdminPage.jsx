import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import i1 from '../assets/register (2).png'
import i3 from '../assets/shopping-cart (2).png'
import i2 from '../assets/order.png'
// Assuming you don't need Pagination and not_found_pic anymore
import ProductCard from "../components/Productcard";
import Header from "../components/Adminheader";

const pageSize = 12;

const AdminPage = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setproductCount] = useState(0);
  const [orderCount, setorderCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get("https://consultancycopy-be.onrender.com/api/admin/admin");
        setUserCount(response.data.userCount);
        setproductCount(response.data.productCount);
        setorderCount(response.data.orderCount);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };
    fetchUserCount();
  }, []);










  const [productList, setProductList] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("all");
  const [sortValue, setSortValue] = useState("Select value");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("https://consultancycopy-be.onrender.com/api/product");
      setProductList(response.data);
      setOriginalData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value === "") {
      setProductList(originalData);
    } else {
      setProductList(
        originalData.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleSort = (value) => {
    let arrayForSort = [...productList];
    setSortValue(value);
    if (value === "ascendingprice") {
      arrayForSort.sort((a, b) => a.price - b.price);
    } else if (value === "descendingprice") {
      arrayForSort.sort((a, b) => b.price - a.price);
    } else if (value === "ascendingrating") {
      arrayForSort.sort((a, b) => a.rating - b.rating);
    } else if (value === "descendingrating") {
      arrayForSort.sort((a, b) => b.rating - a.rating);
    } else if (value === "ascpricediscount") {
      arrayForSort.sort(
        (a, b) => a.discountPercentage - b.discountPercentage
      );
    } else if (value === "descpricediscount") {
      arrayForSort.sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );
    }
    setProductList(arrayForSort);
  };

  const handleCatChange = (value) => {
    setCategory(value);
    if (value === "all") {
      setProductList(originalData);
    } else {
      setProductList(originalData.filter((item) => item.category === value));
    }
  };

  const handleClearFilters = () => {
    setSearchValue("");
    setCategory("all");
    setSortValue("Select value");
    setProductList(originalData);
  };

  return (
    <div className="container">
       <Header/>
       <h1 className="font-semibold text-5xl text-customColor text-center m-5 p-5">Welcome Admin!!</h1>
      <div className="m-10 p-5 grid grid-cols-3 ">       
        <div className="m-2 p-2 box-border shadow-md rounded-lg w-4/5 text-center">
          <div className="flex justify-center items-center">
            <img src={i1} className="flex justify-center items-center"></img>
          </div>
          <h2 className="text-lg font-medium ">Registered users</h2>
          <h2 className="text-lg font-medium"> {userCount}</h2>
        </div>

        <div className="m-2 p-2 box-border shadow-md rounded-lg w-4/5 text-center">
          <div className="flex justify-center items-center">
            <img src={i2} className="flex justify-center items-center"></img>
          </div>
          <h2 className="text-lg font-medium ">Product</h2>
          <h2 className="text-lg font-medium"> {productCount}</h2>
        </div>

        <div className="m-2 p-2 box-border shadow-md rounded-lg w-4/5 text-center">
          <div className="flex justify-center items-center">
            <img src={i3} className="flex justify-center items-center"></img>
          </div>
          <h2 className="text-lg font-medium ">Orders</h2>
          <h2 className="text-lg font-medium"> {orderCount}</h2>
        </div>
      </div>

      

      
    </div>
  );
};

export default AdminPage;
