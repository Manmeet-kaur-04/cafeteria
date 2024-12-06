import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  }
},{
        collection: 'ordersdb' ,
        timestamps: true 
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
