import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component for individual order items
const OrderItem = ({ order, onComplete }) => {
  const orderId = order._id;  // Use _id directly since it's available in your order object
  console.log("Order ID in OrderItem:", orderId);  // Debug log to check the order ID

  return (
    <div className={`p-4 border rounded-lg mb-2 ${order.status === 'completed' ? 'bg-slate-300' : 'bg-white'}`}>
      <h3 className="text-lg font-semibold">Order {orderId}</h3>
      <div className="mt-2 space-y-2">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.name} (x{item.quantity})</span>
            <span>{(item.price * item.quantity).toFixed(2)} Rs</span>
          </div>
        ))}
      </div>
      {order.status === 'pending' && (
        <div className="mt-2 flex space-x-2">
          <button
            onClick={() => onComplete(orderId)}  // Pass the correct orderId (_id)
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Mark as Completed
          </button>
        </div>
      )}
    </div>
  );
};


function Orders() {
  const [orders, setOrders] = useState([]);
  const [showCompletedOrders, setShowCompletedOrders] = useState(false);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8002/api/orders');
        console.log("Fetched orders:", response.data); // Log the fetched orders
        setOrders(response.data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };
    fetchOrders();
  }, []);

  // Mark order as completed
  const markAsCompleted = async (orderId) => {
    console.log("Updating order with ID:", orderId); // Log the orderId to verify
    if (!orderId) {
      console.error("Order ID is undefined!");
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8002/api/orders/${orderId}`, { status: 'completed' });
      console.log("Order updated:", response.data);

      // Update the local state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: 'completed' } : order
        )
      );
    } catch (error) {
      console.error("Failed to update order:", error);
    }
  };

  // Toggle display of completed orders
  const toggleCompletedOrders = () => {
    setShowCompletedOrders((prev) => !prev);
  };

  const completedOrders = orders.filter((order) => order.status === 'completed');
  const pendingOrders = orders.filter((order) => order.status === 'pending');

  return (
    <div className="min-h-screen flex-row text-black bg-slate-200 mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Order Status</h1>

      {/* Button to toggle completed orders */}
      <button
        onClick={toggleCompletedOrders}
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        {showCompletedOrders ? 'Hide Completed Orders' : 'Show Completed Orders'}
      </button>

      {/* Completed Orders Section (only visible when toggled) */}
      {showCompletedOrders && (
        <div className="w-full mb-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Completed Orders</h2>
          {completedOrders.length > 0 ? (
            completedOrders.map((order) => (
              <OrderItem key={order._id} order={order} onComplete={markAsCompleted} />
            ))
          ) : (
            <p>No completed orders.</p>
          )}
        </div>
      )}

      {/* Pending Orders Section */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4 text-yellow-600">Pending Orders</h2>
        {pendingOrders.length > 0 ? (
          pendingOrders.map((order) => (
            <OrderItem key={order._id} order={order} onComplete={markAsCompleted} />
          ))
        ) : (
          <p>No pending orders.</p>
        )}
      </div>
    </div>
  );
}


export default Orders;
