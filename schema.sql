-- enable extensions
create extension if not exists "pgcrypto";

-- users
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  is_admin boolean default false,
  created_at timestamptz default now()
);

-- products
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  price numeric(10,2) not null,
  description text,
  image_url text,
  category text,
  stock integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- orders
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  name text not null,
  phone text,
  email text,
  address text,
  total numeric(10,2) not null,
  payment_method text,
  status text default 'pending',
  created_at timestamptz default now()
);

-- order items
create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  qty integer not null default 1,
  price numeric(10,2) not null
);

-- sample seed
insert into products (name, slug, price, description, image_url, category, stock)
values
('Lucky Ganesh Idol','lucky-ganesh',299.00,'Small Ganesh idol for home decor','https://res.cloudinary.com/demo/image/upload/sample.jpg','decor',50),
('Love Mug','love-mug',249.00,'Ceramic mug with love print','https://res.cloudinary.com/demo/image/upload/sample.jpg','gifts',100);
