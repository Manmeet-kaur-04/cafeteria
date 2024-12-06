import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DishesCard from '../layouts/DishesCard';

function Dishes() {
  const [newDish, setNewDish] = useState({ title: '', price: '', img: '' });
  const [dishes, setDishes] = useState([]);
  const [editingDish, setEditingDish] = useState(null);

  // Fetch dishes from the backend
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://localhost:8002/api/dishes');
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };
    fetchDishes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDish((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDish = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8002/api/dishes', newDish);
      setDishes((prev) => [...prev, response.data.dish]);
      setNewDish({ title: '', price: '', img: '' });
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };

  const handleEditDish = (dish) => {
    setEditingDish(dish);
    setNewDish({ title: dish.title, price: dish.price, img: dish.img });
  };

  const handleUpdateDish = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8002/api/dishes/${editingDish._id}`, newDish);
      const updatedDish = response.data.dish;
      setDishes((prevDishes) =>
        prevDishes.map((dish) => (dish._id === updatedDish._id ? updatedDish : dish))
      );
      setEditingDish(null);
      setNewDish({ title: '', price: '', img: '' });
    } catch (error) {
      console.error('Error updating dish:', error);
    }
  };

  const handleRemoveDish = async (id) => {
    try {
      await axios.delete(`http://localhost:8002/api/dishes/${id}`);
      setDishes((prevDishes) => prevDishes.filter((dish) => dish._id !== id));
    } catch (error) {
      console.error('Error deleting dish:', error);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className="text-4xl font-semibold text-black text-center pt-24 pb-10">Our Dishes</h1>

        <form onSubmit={editingDish ? handleUpdateDish : handleAddDish} className="mb-8 flex flex-col items-center">
          <input
            type="text"
            name="title"
            placeholder="Dish Title"
            value={newDish.title}
            onChange={handleInputChange}
            required
            className="bg-slate-300 text-black mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Dish Price"
            value={newDish.price}
            onChange={handleInputChange}
            required
            className="bg-slate-300 text-black mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={newDish.img}
            onChange={handleInputChange}
            required
            className="bg-slate-300 text-black mb-2 p-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            {editingDish ? 'Update Dish' : 'Add Dish'}
          </button>
        </form>

        <div className="flex flex-wrap bg-cover gap-8 justify-center">
          {dishes.map((dish) => (
            <DishesCard
              key={dish._id}
              img={dish.img}
              title={dish.title}
              price={dish.price}
              onRemove={() => handleRemoveDish(dish._id)}
              onEdit={() => handleEditDish(dish)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dishes;
