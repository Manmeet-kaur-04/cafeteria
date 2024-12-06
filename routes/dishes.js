import express from 'express';
import Dish from '../models/Dish.js';

const router = express.Router();

// Create a new dish
router.post('/', async (req, res) => {
  const { title, price, img } = req.body;
  try {
    const newDish = new Dish({ title, price, img });
    await newDish.save();
    res.status(201).json({ message: 'Dish created successfully', dish: newDish });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create dish', error: error.message });
  }
});

// Update a dish by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, price, img } = req.body;
  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      id,
      { title, price, img },
      { new: true, runValidators: true }
    );
    if (!updatedDish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.status(200).json({ message: 'Dish updated successfully', dish: updatedDish });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update dish', error: error.message });
  }
});

// Delete a dish by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDish = await Dish.findByIdAndDelete(id);
    if (!deletedDish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.status(200).json({ message: 'Dish deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete dish', error: error.message });
  }
});

// Get all dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dishes', error: error.message });
  }
});

export default router;
