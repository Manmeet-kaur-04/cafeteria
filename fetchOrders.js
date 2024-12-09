import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

 // Enable CORS to allow requests from your frontend
app.use(express.json()); // Parse JSON requests

// Route to fetch orders from the hosted API and return to the frontend
app.get('/', async (req, res) => {
  console.log('Request received at /fetch-orders');
  try {
    const response = await axios.get('https://smart-food-ordering.onrender.com/orderList');
    const orders = response.data;
    console.log('Orders fetched:', orders); // Log fetched data
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ message: 'Failed to fetch orders from external API.' });
  }
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
