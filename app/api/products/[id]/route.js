import { supabase } from '../../../../lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
  const { id } = params;
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function GET(req, { params }) {
  const { id } = params;
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json({ product: data });
}
