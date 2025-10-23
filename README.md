# giftcity-next

Next.js + Supabase starter for THE GIFT CITY — an e-commerce demo.

## What is included
- Next.js App Router scaffold (pages/components)
- Supabase schema (`schema.sql`) for products, orders, users, order_items
- Server routes for products, orders, and Cloudinary upload
- Tailwind CSS basic setup
- Admin-protected pattern using Supabase auth and `users.is_admin` flag

## Quickstart (local)
1. Install dependencies: `npm install`
2. Create `.env.local` with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000

   CLOUDINARY_CLOUD_NAME=...
   CLOUDINARY_API_KEY=...
   CLOUDINARY_API_SECRET=...
   ```
3. Run locally: `npm run dev`
4. In Supabase SQL editor, run `schema.sql` to create tables and seed sample products.

## Deploy
- Push to GitHub and import project in Vercel.
- Set the same environment variables in Vercel (except `.local`).
- Deploy.

## Notes
- This is a starter scaffold. Add validation, auth flows, and Stripe for payments if needed.
- Keep service role keys secret and only used server-side.
