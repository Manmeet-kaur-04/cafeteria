import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const DishesUserCard = ({ img, title, price,onAddToCart }) => {
  return (
    <div className="bg-slate-300 w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl" src={img} alt={`${title} image`} />
      <div className="space-y-4">
        <h3 className="text-black text-center font-bold text-xl pt-6">{title}</h3>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold  text-lg">{price}</h3>
          <Button title="Add to cart" onClick={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

DishesUserCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default DishesUserCard;
