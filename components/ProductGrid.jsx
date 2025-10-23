export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p.id} className="border rounded p-4 bg-white">
          <img src={p.image_url} alt={p.name} className="h-48 w-full object-cover rounded" />
          <h2 className="mt-3 text-xl font-semibold">{p.name}</h2>
          <p className="text-gray-600">₹{p.price}</p>
          <p className="mt-2 text-sm">{p.description?.slice(0, 120)}</p>
          <a className="mt-3 inline-block text-indigo-600" href={`/product/${p.slug}`}>View</a>
        </div>
      ))}
    </div>
  );
}
