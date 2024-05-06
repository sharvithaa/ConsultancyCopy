import React, { useEffect, useState } from "react";
import NavBar from "../components/Adminheader";
import axios from "axios";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.get("http://localhost:5000/order/" + userId);
      setOrders(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const sortByDateASC = () => {
    let arrayForSort = [...orders];
    //ascending
    const ascArray = arrayForSort.sort((a, b) => {
      const date1 = new Date(a.createdDate);
      const date2 = new Date(b.createdDate);
      return date1 - date2;
    });
    setOrders(ascArray);
  };

  const sortByDateDESC = () => {
    let arrayForSort = [...orders];
    //descending
    const ascArray = arrayForSort.sort((a, b) => {
      const date1 = new Date(a.createdDate);
      const date2 = new Date(b.createdDate);
      return date2 - date1;
    });
    setOrders(ascArray);
  };

  return (
    <div>
      <NavBar/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-3xl font-semibold">Order history</h1>
          <div className="space-x-4">
            <button
              className="bg-customColor hover:bg-black text-white px-4 py-2 rounded-lg"
              onClick={sortByDateASC}
            >
              Sort by Date (ASC)
            </button>
            <button
              className="bg-customColor hover:bg-black text-white px-4 py-2 rounded-lg"
              onClick={sortByDateDESC}
            >
              Sort by Date (DESC)
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order) => (
            <div key={order._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order number:</p>
                    <p className="font-semibold">{order._id}</p>
                  </div>
                  <p className="font-semibold">{order.createdDate}</p>
                </div>
                <div className="mb-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">Processing...</span>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">Order Details</h2>
                  <hr className="my-2" />
                  <p>{order.firstName} {order.lastName}</p>
                  <h2 className="text-xl font-semibold mt-4">Shipping</h2>
                  <hr className="my-2" />
                  <p>{order.address}</p>
                  <p>{order.zipCode}</p>
                  <p>{order.country}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Products</h2>
                  <hr className="my-2" />
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item) => (
                        <tr key={item._id}>
                          <td>{item.title}</td>
                          <td>Rs.{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{order.totalAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
