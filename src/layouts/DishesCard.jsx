import React from 'react';

function DishesCard({ img, title, price, onRemove, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center ">
      <img src={img} alt={title} className="h-40  w-60 object-cover rounded-lg" />
      <h3 className=" text-black text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-700 font-bold">{price} Rs</p>
      <div className="mt-4 flex justify-around">
        <button onClick={onEdit} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
        <button onClick={onRemove} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}

export default DishesCard;
