import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
}, {
  collection: 'dishesdb'  // Ensure you're targeting the correct collection
});

const Dish = mongoose.model('Dish', dishSchema);
export default Dish;
