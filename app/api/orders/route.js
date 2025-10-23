import { supabase } from '../../../lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { name, phone, email, address, items, total, payment_method } = body;

  const { data: order, error: oerr } = await supabase.from('orders')
    .insert([{ name, phone, email, address, total, payment_method }])
    .select()
    .single();
  if (oerr) return NextResponse.json({ error: oerr.message }, { status: 500 });

  const orderItems = items.map(i => ({ order_id: order.id, product_id: i.product_id, qty: i.qty, price: i.price }));
  const { error: ierr } = await supabase.from('order_items').insert(orderItems);
  if (ierr) return NextResponse.json({ error: ierr.message }, { status: 500 });

  return NextResponse.json({ order_id: order.id }, { status: 201 });
}
