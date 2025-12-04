import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { Star } from "lucide-react";

const ToyDetails = () => {
  const toyData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const toy = toyData.find((t) => t.toyId === parseInt(id));

  if (!toy) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-semibold text-gray-600">Toy not found 😢</p>
      </div>
    );
  }

  // Add to cart handler
  const handleAddToCart = () => {
    // Get existing parcels from localStorage
    const storedParcels = JSON.parse(localStorage.getItem("parcels")) || [];

    // Check if toy is already in cart
    const exists = storedParcels.find((p) => p.id === toy.toyId);
    if (exists) {
      alert("This toy is already in your parcels!");
      return;
    }

    // Add new toy to parcels
    const newParcel = {
      id: toy.toyId,
      name: toy.toyName,
      price: toy.price,
      quantity: 1,
    };

    const updatedParcels = [...storedParcels, newParcel];
    localStorage.setItem("parcels", JSON.stringify(updatedParcels));
    alert("Toy added to My Parcels!");
    navigate("/dashboard"); // Optional: redirect to My Parcels page
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-10 space-y-12">
      {/* Toy Info Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="flex-1 flex justify-center items-start bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl shadow-2xl p-6 md:p-10">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-full md:w-[90%] h-[350px] md:h-[550px] object-fit rounded-2xl shadow-lg"
          />
        </div>

        {/* Toy Details */}
        <div className="flex-1 flex flex-col justify-between bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-purple-700">
              {toy.toyName}
            </h1>
            <p className="text-lg text-gray-500 italic">{toy.subCategory}</p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="text-3xl font-bold text-green-600">
                ${toy.price.toFixed(2)}
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={22} fill="currentColor" />
                <span className="font-semibold">{toy.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{toy.description}</p>
          </div>

          {/* Seller Info */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <p className="font-semibold text-gray-700">
              Seller: <span className="text-gray-900">{toy.sellerName}</span>
            </p>
            <p className="text-gray-500">{toy.sellerEmail}</p>
            <p className="font-medium text-lg mt-2">
              Available Quantity:{" "}
              <span className="text-primary">{toy.availableQuantity}</span>
            </p>
          </div>

          {/* Add to Cart */}
          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full py-3 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              🛒 Add to My Parcels
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
          Why Kids Love It ❤️
        </h2>
        <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
          This toy inspires creativity, learning, and fun. Designed for kids who
          love adventure and imagination — perfect for solo or group play.
        </p>
      </div>
    </div>
  );
};

export default ToyDetails;
