import React from 'react';

function Cart() {
    const [cartItems, setCartItems] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);



    const removeItem = (titleToRemove) => {
        const updatedCartItems = cartItems.filter(item => item.title !== titleToRemove);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Update local storage
    };

  return (
 <div className='h-screen text-black bg-slate-100 p-5'>
            <h1 className='text-3xl  font-bold mb-4 '>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className='text-lg'>Your cart is empty.</p>
            ) : (
                <ul className='bg-slate-100 space-y-4'>
                    {cartItems.map((item, index) => (
                        <li key={index} className='bg-slate-300 p-4 rounded-md'>
                            <h2 className='font-semibold'>{item.title}</h2>
                            <p>Price: ${item.price}</p>
                            <button 
                                onClick={() => removeItem(item.title)} // Pass the item title
                                className="px-6 py-1  text-white border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
  );
}

export default Cart;

