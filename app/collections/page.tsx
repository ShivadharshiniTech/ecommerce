import Link from 'next/link';

const collections = [
  {
    id: 'candles',
    name: 'REXZIO Candles',
    description: 'Handcrafted luxury candles with premium soy wax and signature fragrances',
    image: '/images/ChatGPT Image Feb 13, 2026, 12_01_19 PM.png',
    href: '/collections/candles',
    categories: ['Home Fragrance', 'Luxury Gifts', 'Artisanal']
  },
  {
    id: 'fragrances',
    name: 'Signature Fragrances',
    description: 'Refined perfumes and room sprays crafted for discerning tastes',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80',
    href: '/collections/fragrances',
    categories: ['Perfumes', 'Room Sprays', 'Essential Oils']
  },
  {
    id: 'basmati-rice',
    name: 'Premium Basmati Rice',
    description: 'Export-quality aged basmati rice from the finest farms',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
    href: '/collections/basmati-rice',
    categories: ['Aged Basmati', 'Organic Options', 'Export Grade']
  },
  {
    id: 'oils',
    name: 'Indian Oils Collection',
    description: 'Cold-pressed mustard, sesame, and coconut oils for export markets',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
    href: '/collections/oils',
    categories: ['Cold-Pressed', 'Traditional', 'Premium Grade']
  }
];

export default function CollectionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-orange-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
            REXZIO Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated range of premium lifestyle and gourmet products, crafted in India for the global market
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link 
                href={collection.href} 
                key={collection.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {collection.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {collection.categories.map((category) => (
                      <span 
                        key={category}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Explore Collection
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Interested in Bulk Orders?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer private label, OEM manufacturing, and export services for all our product lines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/exports" className="btn-primary">
              Learn About Exports
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
