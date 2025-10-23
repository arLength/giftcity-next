export default async function ProductPage({ params }) {
  const slug = params.slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { cache: 'no-store' });
  const data = await res.json();
  const product = (data.products || []).find(p => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image_url} alt={product.name} className="w-full h-96 object-cover rounded"/>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">₹{product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
