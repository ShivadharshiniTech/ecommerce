import Link from 'next/link';

export default function FragrancesCollection() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/ChatGPT Image Feb 13, 2026, 12_08_10 PM.png" 
            alt="REXZIO Fragrances" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Signature Fragrances
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Refined perfumes and room sprays crafted for discerning tastes
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Luxury Fragrance Collection
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            REXZIO Signature Fragrances combine traditional perfumery with modern scent profiles. Our range includes personal perfumes, room sprays, and essential oil blends designed to elevate everyday moments.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Each fragrance is crafted with premium ingredients and housed in elegant, minimalist packaging.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Our Fragrance Range
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eau de Parfum</h3>
              <p className="text-gray-600 mb-4">
                Long-lasting personal fragrances in 50ml and 100ml sizes
              </p>
              <span className="text-sm text-purple-600 font-medium">12-15% concentration</span>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Room Sprays</h3>
              <p className="text-gray-600 mb-4">
                Instant fragrance for homes, offices, and hospitality spaces
              </p>
              <span className="text-sm text-purple-600 font-medium">200ml bottles</span>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Oil Blends</h3>
              <p className="text-gray-600 mb-4">
                Pure therapeutic-grade blends for diffusers and wellness
              </p>
              <span className="text-sm text-purple-600 font-medium">15ml and 30ml</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scent Profiles */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Signature Scent Profiles
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Floral & Fresh</h3>
              <p className="text-gray-600">Jasmine, Rose, Neroli, White Tea</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Woody & Spicy</h3>
              <p className="text-gray-600">Sandalwood, Cedar, Cardamom, Vetiver</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Citrus & Herbaceous</h3>
              <p className="text-gray-600">Bergamot, Lemon, Basil, Sage</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oriental & Amber</h3>
              <p className="text-gray-600">Oud, Amber, Patchouli, Vanilla</p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Private Label & Hotel Supplies
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We create custom fragrances for hotels, spas, retail brands, and corporate clients. Full ODM/OEM services available.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Minimum Order</h3>
                <p className="opacity-90">500 units for custom formulation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Development Time</h3>
                <p className="opacity-90">4-6 weeks for custom scents</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Services</h3>
                <p className="opacity-90">Formulation, bottling, labeling</p>
              </div>
            </div>
            <Link href="/contact" className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
