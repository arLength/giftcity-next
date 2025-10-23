import ProductGrid from '../components/ProductGrid';

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { cache: 'no-store' });
  const json = await res.json();
  const products = json.products || [];

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">THE GIFT CITY</h1>
      <ProductGrid products={products} />
    </section>
  );
}
