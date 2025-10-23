'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminProducts(){
  const [products, setProducts] = useState([]);
  useEffect(()=>{ fetchProducts(); }, []);
  async function fetchProducts(){
    const res = await fetch('/api/products');
    const json = await res.json();
    setProducts(json.products || []);
  }
  async function deleteProduct(id){
    if(!confirm('Delete product?')) return;
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="space-y-3">
        {products.map(p=>(
          <div key={p.id} className="p-3 bg-white border rounded flex justify-between">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-600">₹{p.price}</div>
            </div>
            <div>
              <button onClick={()=>deleteProduct(p.id)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
