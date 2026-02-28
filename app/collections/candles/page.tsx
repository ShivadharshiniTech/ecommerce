import Link from 'next/link';

export default function CandlesCollection() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary-600 to-orange-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/ChatGPT Image Feb 13, 2026, 11_29_36 AM.png" 
            alt="REXZIO Candles" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            REXZIO Candles
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Handcrafted luxury candles with premium soy wax and signature fragrances
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Signature Jar Collection
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">200 ml – Premium Classic</h3>
              <p className="text-gray-600">Our signature size for extended enjoyment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100 ml – Event Mini</h3>
              <p className="text-gray-600">Perfect for gifts and special occasions</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium soy wax</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Clean & long-lasting burn</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Hand-poured in small batches</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Why Choose REXZIO Candles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Natural Soy Wax</h3>
              <p className="text-gray-600">
                Clean-burning, eco-friendly soy wax for a healthier home environment
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">40-50 Hour Burn Time</h3>
              <p className="text-gray-600">
                Premium quality ensures long-lasting fragrance and value
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Handcrafted in India</h3>
              <p className="text-gray-600">
                Each candle is individually poured and inspected for quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Fragrance Range */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Signature Fragrance Range
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Golden Amber Vanilla</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Warm</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Sweet</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Cozy</span>
              </div>
              <p className="text-gray-600 text-sm">Rich amber base with creamy vanilla notes</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mysore Sandalwood</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Earthy</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Calm</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Classic</span>
              </div>
              <p className="text-gray-600 text-sm">Authentic Mysore sandalwood essence</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Royal Oud Rose</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Rich</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Floral</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Luxurious</span>
              </div>
              <p className="text-gray-600 text-sm">Premium oud blended with delicate rose</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jasmine Sambac</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Elegant</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Floral</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Pure</span>
              </div>
              <p className="text-gray-600 text-sm">Night-blooming jasmine fragrance</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cedar Musk Reserve</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Deep</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Woody</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Refined</span>
              </div>
              <p className="text-gray-600 text-sm">Cedarwood base with warm musk undertones</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bergamot Citrus Glow</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Fresh</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Bright</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Uplifting</span>
              </div>
              <p className="text-gray-600 text-sm">Zesty bergamot with citrus notes</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lavender Bloom</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Soft</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Calm</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Relaxing</span>
              </div>
              <p className="text-gray-600 text-sm">Pure French lavender essence</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Candles
            </Link>
          </div>
        </div>
      </section>

      {/* LED Candles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Flameless LED Event Candles
            </h2>
            <p className="text-lg text-gray-600">
              Perfect for concerts, large venues, and events where safety is paramount
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fire Safe</h3>
              <p className="text-sm text-gray-600">No open flame risks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Wind Proof</h3>
              <p className="text-sm text-gray-600">Outdoor event ready</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Long Hours Glow</h3>
              <p className="text-sm text-gray-600">Extended battery life</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Large Venues</h3>
              <p className="text-sm text-gray-600">Scalable for events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom & Corporate Orders */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Custom & Corporate Orders
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Personalized solutions for your business, events, and gifting needs
            </p>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl mb-2">🏷️</div>
                <h3 className="font-semibold mb-1">Logo Labels</h3>
                <p className="text-sm opacity-90">Custom branding</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl mb-2">🎁</div>
                <h3 className="font-semibold mb-1">Gift Hampers</h3>
                <p className="text-sm opacity-90">Curated sets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl mb-2">🎉</div>
                <h3 className="font-semibold mb-1">Event Return Gifts</h3>
                <p className="text-sm opacity-90">Memorable favors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl mb-2">📦</div>
                <h3 className="font-semibold mb-1">Bulk Orders</h3>
                <p className="text-sm opacity-90">Volume pricing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-semibold mb-1">Private Branding</h3>
                <p className="text-sm opacity-90">Your brand</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8 inline-block">
              <p className="text-lg font-semibold">💼 Bulk & corporate pricing available on request</p>
            </div>
            <div>
              <Link href="/contact" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
