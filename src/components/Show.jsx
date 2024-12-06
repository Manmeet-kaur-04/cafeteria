import React, { useState } from 'react';
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img4.jpg";
import img8 from "../assets/img/img5.jpg";
import img9 from "../assets/img/img6.jpg";
import img10 from "../assets/img/img4.jpg"; 
import DishesUserCard from "../layouts/DishesUserCard"; 
import { useNavigate } from 'react-router-dom';
const dishesData = [
  { img: img1, title: "Dish 1", price: "100.99" },
  { img: img2, title: "Dish 2", price: "112.99" },
  { img: img3, title: "Dish 3", price: "910.99" },
  { img: img4, title: "Dish 4", price: "11.99" },
  { img: img5, title: "Dish 5", price: "510.99" },
  { img: img6, title: "Dish 6", price: "212.99" },
  { img: img7, title: "Dish 7", price: "112.99" },
  { img: img8, title: "Dish 8", price: "112.99" },
  { img: img9, title: "Dish 9", price: "12.99" },
  { img: img10, title: "Dish 10", price: "212.99" },
];

function Show() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (dish) => {
    setCart((prevCart) => [...prevCart, dish]);
    console.log(`Added to cart: ${dish.title}`);
  };

  const handleCheckout = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart'); 
  };

  return (
    <div className=" bg-slate-100 min-h-screen flex flex-col">
      <h1 className="text-4xl text-black font-semibold text-center pt-24 pb-10">Our Dishes</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {dishesData.map((dish, index) => (
          <DishesUserCard 
            key={index} 
            img={dish.img} 
            title={dish.title} 
            price={dish.price} 
            onAddToCart={() => addToCart(dish)} 
          />
        ))}
      </div>
      <button onClick={handleCheckout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Go to Cart
      </button>
    </div>
  );
}

export default Show;
