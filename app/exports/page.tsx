import Link from 'next/link';

export default function ExportsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-primary-600 to-orange-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Global Exports
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Premium Indian products for international markets
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
            <p className="text-lg font-semibold">IEC Registered • APEDA Approved • Export Ready</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Your Trusted Export Partner from India
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            REXZIO specializes in exporting premium lifestyle products and gourmet foods from India to discerning markets worldwide. We handle all aspects of international trade — from sourcing and quality control to documentation, logistics, and compliance.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you&apos;re a distributor, retailer, or brand looking for OEM/ODM services, we deliver quality and reliability at every stage.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Export Product Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🕯️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury Candles</h3>
              <p className="text-sm text-gray-600 mb-3">Soy wax candles with custom fragrances and branding</p>
              <Link href="/collections/candles" className="text-primary-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🌸</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fragrances</h3>
              <p className="text-sm text-gray-600 mb-3">Perfumes, room sprays, and essential oils</p>
              <Link href="/collections/fragrances" className="text-primary-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🌾</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Basmati Rice</h3>
              <p className="text-sm text-gray-600 mb-3">Premium aged basmati, export-grade quality</p>
              <Link href="/collections/basmati-rice" className="text-primary-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🥥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Indian Oils</h3>
              <p className="text-sm text-gray-600 mb-3">Cold-pressed mustard, sesame, coconut oils</p>
              <Link href="/collections/oils" className="text-primary-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Markets We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">North America</h3>
              <p className="text-gray-600">USA, Canada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Europe</h3>
              <p className="text-gray-600">UK, Germany, France, Netherlands</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Middle East & Asia</h3>
              <p className="text-gray-600">UAE, Singapore, Australia, Japan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Export Compliance & Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">IEC Code</h3>
              <p className="text-sm text-gray-600">Import Export License</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">FSSAI</h3>
              <p className="text-sm text-gray-600">Food Safety Standards</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">APEDA</h3>
              <p className="text-sm text-gray-600">Agricultural Exports</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">ISO 22000</h3>
              <p className="text-sm text-gray-600">Quality Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Our Export Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Documentation</h3>
                <p className="text-gray-600">Commercial invoice, packing list, certificate of origin, phytosanitary certificates, and all customs paperwork</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Logistics Coordination</h3>
                <p className="text-gray-600">Sea freight, air freight, door-to-door delivery, customs clearance support</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Pre-shipment inspection, third-party testing, quality certificates</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Private Label & OEM</h3>
                <p className="text-gray-600">Custom branding, packaging design, product formulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Start Exporting?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our export team to discuss your requirements. We&apos;ll provide detailed quotations, samples, and full product specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Export Team
            </Link>
            <Link href="/collections" className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
              View Products
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-lg opacity-90">Email: <a href="mailto:exports@rexzio.in" className="underline font-semibold">exports@rexzio.in</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
