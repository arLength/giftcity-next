'use client';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const c = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(c);
    } catch (e) { setCart([]); }
  }, []);

  const total = cart.reduce((s, i) => s + (i.qty * Number(i.price)), 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? <p>No items in cart.</p> : (
        <div>
          {cart.map(item => (
            <div key={item.product_id} className="flex items-center gap-4 border p-3 mb-2 bg-white rounded">
              <img src={item.image_url} alt={item.name} className="w-24 h-24 object-cover"/>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Qty: {item.qty}</p>
                <p>Price: ₹{item.price}</p>
              </div>
            </div>
          ))}
          <p className="mt-4 font-bold">Total: ₹{total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
