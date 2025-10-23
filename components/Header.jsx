import Link from 'next/link';

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/"><span className="font-bold text-xl">THE GIFT CITY</span></Link>
        <nav>
          <Link href="/"><span className="mx-2">Home</span></Link>
          <Link href="/cart"><span className="mx-2">Cart</span></Link>
          <Link href="/admin"><span className="mx-2">Admin</span></Link>
        </nav>
      </div>
    </header>
  );
}
