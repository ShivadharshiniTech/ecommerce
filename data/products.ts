import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Lavender Dreams',
    description: 'Relax and unwind with our calming lavender scented candle. Perfect for bedtime rituals and meditation.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1602874801006-96ef1db90c0d?w=800&h=800&fit=crop',
    category: 'Relaxation',
    scent: 'Lavender',
    burnTime: '40-45 hours',
    weight: '200g',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Vanilla Bliss',
    description: 'Sweet and comforting vanilla fragrance that creates a warm, inviting atmosphere in any room.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=800&fit=crop',
    category: 'Comfort',
    scent: 'Vanilla',
    burnTime: '35-40 hours',
    weight: '180g',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Citrus Burst',
    description: 'Energizing blend of orange, lemon, and grapefruit essential oils. Refreshes and revitalizes your space.',
    price: 849,
    image: 'https://images.unsplash.com/photo-1603006905362-59e2f6f39c56?w=800&h=800&fit=crop',
    category: 'Energizing',
    scent: 'Citrus',
    burnTime: '38-42 hours',
    weight: '200g',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Sandalwood Serenity',
    description: 'Exotic sandalwood fragrance that brings peace and tranquility. Ideal for yoga and mindfulness.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1588854337115-1c67d89ff88a?w=800&h=800&fit=crop',
    category: 'Meditation',
    scent: 'Sandalwood',
    burnTime: '45-50 hours',
    weight: '220g',
    inStock: true,
  },
  {
    id: '5',
    name: 'Rose Garden',
    description: 'Romantic rose petal scent that fills your home with elegance and sophistication.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1602874801296-4c29e8f683e3?w=800&h=800&fit=crop',
    category: 'Romance',
    scent: 'Rose',
    burnTime: '40-45 hours',
    weight: '200g',
    inStock: true,
  },
  {
    id: '6',
    name: 'Ocean Breeze',
    description: 'Fresh marine scent reminiscent of coastal mornings. Clean and invigorating.',
    price: 849,
    image: 'https://images.unsplash.com/photo-1608181689522-8f3f87756474?w=800&h=800&fit=crop',
    category: 'Fresh',
    scent: 'Ocean',
    burnTime: '38-42 hours',
    weight: '200g',
    inStock: true,
  },
  {
    id: '7',
    name: 'Cinnamon Spice',
    description: 'Warm and cozy cinnamon blend perfect for autumn evenings and festive celebrations.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1602874940069-f9c52cd57dad?w=800&h=800&fit=crop',
    category: 'Seasonal',
    scent: 'Cinnamon',
    burnTime: '35-40 hours',
    weight: '180g',
    inStock: true,
  },
  {
    id: '8',
    name: 'Eucalyptus Mint',
    description: 'Refreshing eucalyptus and mint combination. Perfect for focus and clarity.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1602874801031-ce2f0d05cc93?w=800&h=800&fit=crop',
    category: 'Wellness',
    scent: 'Eucalyptus',
    burnTime: '40-45 hours',
    weight: '200g',
    inStock: true,
  },
  {
    id: '9',
    name: 'Jasmine Night',
    description: 'Delicate jasmine flowers create an exotic, sensual atmosphere. Perfect for evening relaxation.',
    price: 949,
    image: 'https://images.unsplash.com/photo-1602874801202-60e11b1f70a6?w=800&h=800&fit=crop',
    category: 'Luxury',
    scent: 'Jasmine',
    burnTime: '42-47 hours',
    weight: '210g',
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
