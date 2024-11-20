import { Product, Brand } from '../types';

export const products: Product[] = [
  // Men's Products
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    category: 'men'
  },
  {
    id: 2,
    name: 'Men\'s Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80',
    category: 'men'
  },
  {
    id: 3,
    name: 'Men\'s Running Shoes',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
    category: 'men'
  },
  {
    id: 4,
    name: 'Men\'s Leather Backpack',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
    category: 'men'
  },
  {
    id: 5,
    name: 'Men\'s Slim Fit Blazer',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    category: 'men'
  },
  {
    id: 6,
    name: 'Men\'s Wool Sweater',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
    category: 'men'
  },
  {
    id: 7,
    name: 'Men\'s Chinos',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80',
    category: 'men'
  },
  {
    id: 8,
    name: 'Men\'s Oxford Shirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80',
    category: 'men'
  },

  // Women's Products
  {
    id: 9,
    name: 'Summer Floral Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80',
    category: 'women'
  },
  {
    id: 10,
    name: 'Women\'s Leather Jacket',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&q=80',
    category: 'women'
  },
  {
    id: 11,
    name: 'Women\'s Knit Cardigan',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80',
    category: 'women'
  },
  {
    id: 12,
    name: 'Pleated Skirt',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80',
    category: 'women'
  },
  {
    id: 13,
    name: 'High-Waist Jeans',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80',
    category: 'women'
  },
  {
    id: 14,
    name: 'Women\'s Yoga Leggings',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80',
    category: 'women'
  },
  {
    id: 15,
    name: 'Printed Summer Dress',
    price: 85.99,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80',
    category: 'women'
  }
];

export const brands: Brand[] = [
  {
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
  },
  {
    name: 'Adidas',
    logo: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80',
  },
  {
    name: 'Puma',
    logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80',
  },
  {
    name: 'Under Armour',
    logo: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80',
  },
  {
    name: 'New Balance',
    logo: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80',
  },
  {
    name: 'Reebok',
    logo: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80',
  },
  {
    name: 'Converse',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
  },
  {
    name: 'Vans',
    logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80',
  }
];