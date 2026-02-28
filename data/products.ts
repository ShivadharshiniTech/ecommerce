import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Golden Amber Vanilla',
    description: 'Rich amber base with creamy vanilla notes. A warm and cozy fragrance that creates an inviting atmosphere perfect for intimate gatherings and relaxation.',
    price: 1299,
    image: '/images/WhatsApp Image 2026-02-28 at 11.13.32 PM.jpeg',
    category: 'Signature',
    scent: 'Amber Vanilla',
    burnTime: '40-50 hours',
    weight: '200g',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Mysore Sandalwood',
    description: 'Authentic Mysore sandalwood essence. Earthy, calm, and classic - perfect for meditation, yoga, and creating a peaceful sanctuary in your home.',
    price: 1499,
    image: '/images/WhatsApp Image 2026-02-28 at 11.13.31 PM.jpeg',
    category: 'Signature',
    scent: 'Sandalwood',
    burnTime: '45-50 hours',
    weight: '200g',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Royal Oud Rose',
    description: 'Premium oud blended with delicate rose petals. Rich, floral, and luxurious - a sophisticated scent for elegant spaces and special occasions.',
    price: 1699,
    image: '/images/WhatsApp Image 2026-02-28 at 11.13.30 PM.jpeg',
    category: 'Signature',
    scent: 'Oud Rose',
    burnTime: '45-50 hours',
    weight: '200g',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Jasmine Sambac',
    description: 'Night-blooming jasmine fragrance. Elegant, floral, and pure - capturing the essence of tropical evenings and timeless romance.',
    price: 1399,
    image: '/images/WhatsApp Image 2026-02-28 at 11.13.18 PM.jpeg',
    category: 'Signature',
    scent: 'Jasmine',
    burnTime: '40-50 hours',
    weight: '200g',
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Cedar Musk Reserve',
    description: 'Cedarwood base with warm musk undertones. Deep, woody, and refined - a masculine scent perfect for studies, libraries, and sophisticated spaces.',
    price: 1399,
    image: '/images/WhatsApp Image 2026-02-28 at 11.13.16 PM.jpeg',
    category: 'Signature',
    scent: 'Cedar Musk',
    burnTime: '45-50 hours',
    weight: '200g',
    inStock: true,
  },
  {
    id: '6',
    name: 'Bergamot Citrus Glow',
    description: 'Zesty bergamot with bright citrus notes. Fresh, bright, and uplifting - energizes your space and awakens the senses.',
    price: 1199,
    image: '/images/WhatsApp Image 2026-02-28 at 11.13.11 PM.jpeg',
    category: 'Signature',
    scent: 'Bergamot Citrus',
    burnTime: '40-45 hours',
    weight: '200g',
    inStock: true,
  },
  {
    id: '7',
    name: 'Lavender Bloom',
    description: 'Pure French lavender essence. Soft, calm, and relaxing - ideal for bedtime rituals, stress relief, and creating a tranquil bedroom sanctuary.',
    price: 1199,
    image: '/images/WhatsApp Image 2026-02-28 at 10.55.18 PM.jpeg',
    category: 'Signature',
    scent: 'Lavender',
    burnTime: '40-45 hours',
    weight: '200g',
    inStock: true,
  },
  {
    id: '8',
    name: 'Golden Amber Vanilla - Event Mini',
    description: 'Our bestselling Golden Amber Vanilla in a 100ml size, perfect for gifts, weddings, and corporate events.',
    price: 699,
    image: '/images/WhatsApp Image 2026-02-28 at 11.13.32 PM (1).jpeg',
    category: 'Event Mini',
    scent: 'Amber Vanilla',
    burnTime: '20-25 hours',
    weight: '100g',
    inStock: true,
  },
  {
    id: '9',
    name: 'Mysore Sandalwood - Event Mini',
    description: 'Classic Mysore Sandalwood in a compact 100ml format, ideal for return gifts and party favors.',
    price: 749,
    image: '/images/ChatGPT Image Feb 13, 2026, 12_11_28 PM.png',
    category: 'Event Mini',
    scent: 'Sandalwood',
    burnTime: '20-25 hours',
    weight: '100g',
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.scent.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};
