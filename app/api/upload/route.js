import { NextResponse } from 'next/server';
import cloudinary from '../../../lib/cloudinary';
import streamifier from 'streamifier';

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('file');
  if (!file) return NextResponse.json({ error: 'no file' }, { status: 400 });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve) => {
    const stream = cloudinary.uploader.upload_stream({ folder: 'giftcity' }, (err, result) => {
      if (err) resolve(NextResponse.json({ error: err.message }, { status: 500 }));
      else resolve(NextResponse.json({ url: result.secure_url }));
    });
    streamifier.createReadStream(buffer).pipe(stream);
  });
}
