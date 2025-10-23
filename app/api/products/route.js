import { supabase } from '../../../lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ products: data });
}

export async function POST(req) {
  const body = await req.json();
  const { name, slug, price, description, image_url, category, stock } = body;
  const { data, error } = await supabase.from('products')
    .insert([{ name, slug, price, description, image_url, category, stock }])
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ product: data }, { status: 201 });
}
