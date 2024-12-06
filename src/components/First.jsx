import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function First() {
  const navigate = useNavigate();

  // Ensure no scrollbars on the page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Clean up when the component unmounts
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-0">
      <div className="flex flex-row justify-center gap-6 w-full max-w-screen-xl">
        {/* First Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="https://cdn.prod.website-files.com/63f501f2fcfc599ea419f99b/64be97db21ab250bbc9de311_6448ef4ad9e05e2c379265de_iStock-1139899123.jpeg"
            alt="Order"
            className="h-32 w-full object-cover rounded-lg"
          />
          <div className="mt-4">
            <button
              onClick={() => navigate("/Orders")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Go to Orders
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A="
            alt="Add Dish"
            className="h-32 w-full object-cover rounded-lg"
          />
          <div className="mt-4">
            <button
              onClick={() => navigate("/dishes")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Add Dishes
            </button>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="https://yonetim.buserproject.com/Content/img/products/2028/16291-restoran-chair.jpg"
            alt="Add Dish"
            className="h-32 w-full object-cover rounded-lg"
          />
          <div className="mt-4">
            <button
              onClick={() => navigate("/tables")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Tables
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
