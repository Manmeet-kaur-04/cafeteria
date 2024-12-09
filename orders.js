import express from 'express';
import Order from '../models/Order.js'; // Adjust the path to your Order model
const router = express.Router();

// Route to fetch all orders
// Assuming you're fetching orders in orders.js route handler
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});
  

// Route to update order status
// In orders.js route file
router.put('/:orderId', async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(updatedOrder); // Return the updated order
    } catch (error) {
      console.error("Error updating order:", error);
      res.status(500).json({ message: 'Error updating order' });
    }
  });
  

export default router;
