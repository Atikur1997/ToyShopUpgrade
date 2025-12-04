import React, { useState, useEffect } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

const Myparcels = () => {
  // Load cart from localStorage or start empty
  const [parcels, setParcels] = useState(() => {
    const saved = localStorage.getItem("parcels");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("parcels", JSON.stringify(parcels));
  }, [parcels]);

  // Remove a parcel by id
  const handleRemove = (id) => {
    setParcels(parcels.filter((item) => item.id !== id));
  };

  // Handle pay button click
  const handlePay = () => {
    alert("Payment successful!");
    setParcels([]); // Clear cart after payment
  };

  if (parcels.length === 0) {
    return (
      <div className="text-center mt-20">
        <CiDeliveryTruck className="mx-auto text-6xl text-gray-400" />
        <h2 className="text-2xl font-bold mt-4">No parcels yet!</h2>
        <p className="text-gray-500">Add items to see them here.</p>
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">My Parcels</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Item</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">${item.price}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-6">
        <button
          onClick={handlePay}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Myparcels;
