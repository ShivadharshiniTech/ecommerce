import Link from 'next/link';

export default function PartnerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-primary-600 to-orange-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Partner With REXZIO
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Grow your business with a trusted Indian luxury brand
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Build Success Together
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            REXZIO is seeking distribution partners, retail collaborators, and brand partners worldwide. Whether you&apos;re a boutique retailer, hotel chain, corporate gifting company, or e-commerce platform, we offer flexible partnership models to suit your business.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join us in bringing premium Indian luxury to global audiences.
          </p>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Retail Distribution</h3>
              <p className="text-gray-600 mb-4 text-center">
                Stock REXZIO products in your store or online platform
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Competitive wholesale pricing</li>
                <li>• Marketing collateral support</li>
                <li>• Territory protection options</li>
                <li>• Flexible minimum orders</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Hotel & Hospitality</h3>
              <p className="text-gray-600 mb-4 text-center">
                Custom products for hotels, spas, and resorts
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Branded amenities (candles, fragrances)</li>
                <li>• Signature scents for venues</li>
                <li>• Bulk supply agreements</li>
                <li>• Consistent quality and delivery</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Private Label / OEM</h3>
              <p className="text-gray-600 mb-4 text-center">
                Launch your own brand with our manufacturing
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom formulations</li>
                <li>• Your brand, our expertise</li>
                <li>• Flexible MOQ starting 500 units</li>
                <li>• End-to-end support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Why Choose REXZIO as Your Partner
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Quality</h3>
                <p className="text-gray-600">Consistent product quality backed by certifications and rigorous testing</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Direct from manufacturer pricing with attractive margins for partners</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Export Experience</h3>
                <p className="text-gray-600">Proven track record with documentation, logistics, and compliance</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customization Capabilities</h3>
                <p className="text-gray-600">Tailor products, packaging, and branding to your market needs</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Support</h3>
                <p className="text-gray-600">Product images, descriptions, and promotional materials provided</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Account Management</h3>
                <p className="text-gray-600">Single point of contact for orders, queries, and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            We&apos;re Looking For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Retail & E-commerce</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Boutique home décor stores</li>
                <li>• Lifestyle and wellness retailers</li>
                <li>• Online marketplaces (Amazon, Etsy sellers)</li>
                <li>• Subscription box services</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">B2B & Institutional</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hotel chains and resorts</li>
                <li>• Corporate gifting companies</li>
                <li>• Event planners and wedding suppliers</li>
                <li>• Spa and wellness centers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Food Importers & Distributors</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Specialty food importers</li>
                <li>• Ethnic grocery chains</li>
                <li>• Health food distributors</li>
                <li>• Restaurant suppliers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Brand Builders</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Entrepreneurs launching new brands</li>
                <li>• Influencers developing product lines</li>
                <li>• Event-based businesses (weddings, etc.)</li>
                <li>• Corporate branding initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Partnership Process
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Inquiry</h3>
                <p className="text-gray-600">Fill out our partnership form or email exports@rexzio.in with details about your business</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation Call</h3>
                <p className="text-gray-600">We&apos;ll schedule a call to understand your needs, target market, and volume requirements</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Samples & Quotation</h3>
                <p className="text-gray-600">Receive samples, pricing, product specifications, and terms</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement & Onboarding</h3>
                <p className="text-gray-600">Sign partnership agreement and place your first order with full support from our team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you&apos;re a retailer, distributor, or brand builder, REXZIO is ready to partner with you for mutual growth.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-600 font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Apply to Become a Partner
          </Link>
          <div className="mt-8">
            <p className="text-lg opacity-90">Partnership Inquiries: <a href="mailto:exports@rexzio.in" className="underline font-semibold">exports@rexzio.in</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
