import AdminProtected from '../../components/AdminProtected';
import Link from 'next/link';

export default function AdminHome() {
  return (
    <AdminProtected>
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <ul className="mt-4">
          <li className="mb-2"><Link href="/admin/products">Products</Link></li>
          <li className="mb-2"><Link href="/admin/orders">Orders</Link></li>
        </ul>
      </div>
    </AdminProtected>
  );
}
