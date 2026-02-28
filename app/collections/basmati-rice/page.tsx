import Link from 'next/link';

export default function BasmatiRiceCollection() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-amber-600 to-yellow-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/ChatGPT Image Feb 13, 2026, 12_08_16 PM.png" 
            alt="Premium Basmati Rice" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Premium Basmati Rice
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Export-quality aged basmati rice from the finest farms
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            India&apos;s Finest Basmati
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            REXZIO sources premium basmati rice from the foothills of the Himalayas, known for producing the world&apos;s finest long-grain rice. Our rice is aged for a minimum of 12 months to develop its signature aroma, elongation, and fluffy texture.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Available for export in bulk and retail packaging with complete documentation and certifications.
          </p>
        </div>
      </section>

      {/* Product Variants */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Our Rice Varieties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Traditional White</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Extra-long grain (8.3mm+)</li>
                <li>• 1:3 elongation ratio</li>
                <li>• 18-24 months aged</li>
                <li>• Signature basmati aroma</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Brown Basmati</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Whole grain with bran intact</li>
                <li>• High fiber content</li>
                <li>• Nutty flavor profile</li>
                <li>• Health-conscious market</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Organic Certified</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 100% chemical-free farming</li>
                <li>• Organic certification</li>
                <li>• Premium positioning</li>
                <li>• Traceability to farm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Export Quality Standards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">0.5%</div>
              <p className="text-gray-600">Max Broken Grains</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">14%</div>
              <p className="text-gray-600">Max Moisture Content</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">8.3mm+</div>
              <p className="text-gray-600">Average Grain Length</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
              <p className="text-gray-600">Purity Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Certifications & Compliance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">FSSAI Certified</h3>
                <p className="text-gray-600">Food Safety and Standards Authority of India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">APEDA Registered</h3>
                <p className="text-gray-600">Agricultural and Processed Food Products Export</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ISO 22000:2018</h3>
                <p className="text-gray-600">Food Safety Management System</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">IEC Code</h3>
                <p className="text-gray-600">Import Export Code for international trade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Export & Bulk Supply
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We supply premium basmati rice to importers, distributors, restaurants, and retail chains worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Packaging Options</h3>
                <p className="opacity-90">1kg, 5kg, 10kg, 20kg, 25kg, bulk bags</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Minimum Order</h3>
                <p className="opacity-90">1 container (20 MT)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Lead Time</h3>
                <p className="opacity-90">3-4 weeks from order confirmation</p>
              </div>
            </div>
            <Link href="/contact" className="inline-block bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Request Export Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
