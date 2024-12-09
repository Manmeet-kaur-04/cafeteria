
import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Add .js extension
import Admin from './models/Admin.js'; // Add .js extension
import Adminsign from './models/AdminSign.js';
import cors from 'cors';
import dishesRoutes from './routes/dishes.js'
import ordersRoutes from './routes/orders.js'
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.error('MongoDB Connection Failed:', err.message);
    process.exit(1);
  });

   

app.use('/api/dishes', dishesRoutes);
app.use('/api/orders', ordersRoutes);

// Routes

app.post('/admin/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the username or email already exists
    const existingAdmin = await Adminsign.findOne({ $or: [{ username }, { email }] });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Create and save the new admin
    const newAdmin = new Adminsign({ username, email, password });
    await newAdmin.save();

    // Generate a JWT token
    const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Admin registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Admin Login with Username and Email
app.post('/admin/login', async (req, res) => {
  const { username, email } = req.body; // Accept username and email

  console.log('Login attempt:', { username, email });

  try {
    // Find admin in the correct collection
    const admin = await Adminsign.findOne({ username, email });
    if (!admin) {
      console.log('Admin not found'); // Debug log
      return res.status(404).json({ message: 'Admin not found or invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    console.log('Login successful for admin:', admin.username);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error.message); // Debug log
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Restaurant App Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
