import Link from 'next/link';

export default function CollectionsShowcase() {
  const collections = [
    {
      title: 'REXZIO Candles',
      description: 'Handcrafted luxury candles. 7 signature fragrances from Golden Amber Vanilla to Lavender Bloom.',
      image: '/images/ChatGPT Image Feb 13, 2026, 12_01_19 PM.png',
      link: '/collections/candles',
      categories: ['Premium Soy Wax', 'Hand-Poured', '7 Signature Scents'],
    },
    {
      title: 'Signature Fragrances',
      description: 'Luxury scent creations for modern living. Perfumes, room sprays, and essential oil blends.',
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80',
      link: '/collections/fragrances',
      categories: ['Eau de Parfum', 'Room Sprays', 'Essential Oils'],
    },
    {
      title: 'Premium Basmati Rice',
      description: 'Extra-long grain. Aged to perfection. Export grade quality from Himalayan farms.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
      link: '/collections/basmati-rice',
      categories: ['Export Grade', 'Aged 18-24 Months', 'APEDA Certified'],
    },
    {
      title: 'Indian Oils Collection',
      description: 'Traditional cold-pressed oils in premium packaging. Mustard, sesame, and coconut varieties.',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
      link: '/collections/oils',
      categories: ['Cold Pressed', 'Traditional Methods', 'Export Ready'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Luxury lifestyle products across fragrance, home, and gourmet foods. Each collection crafted with precision and designed for global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Link 
              key={index} 
              href={collection.link}
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {collection.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {collection.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.categories.map((cat, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-primary-600 font-semibold">
                  Explore Collection
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
