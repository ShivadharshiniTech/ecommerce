import Link from 'next/link';

export default function OilsCollection() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/ChatGPT Image Feb 13, 2026, 12_11_28 PM.png" 
            alt="Indian Oils Collection" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Indian Oils Collection
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Cold-pressed mustard, sesame, and coconut oils for export markets
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Traditional Cold-Pressed Oils
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            REXZIO offers a curated selection of premium Indian cooking oils, cold-pressed using traditional methods to preserve nutrients, flavor, and aroma. Our oils are sourced from trusted farms and processed in FSSAI-certified facilities.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Perfect for export to health-conscious markets and specialty food distributors worldwide.
          </p>
        </div>
      </section>

      {/* Oil Varieties */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Our Premium Oil Range
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Mustard Oil</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Kachi Ghani (cold-pressed)</li>
                <li>• Pungent, authentic flavor</li>
                <li>• Rich in omega-3 fatty acids</li>
                <li>• Popular in North Indian cuisine</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Sesame Oil</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Wood-pressed (Marachekku)</li>
                <li>• Nutty, aromatic profile</li>
                <li>• High smoke point</li>
                <li>• Ideal for South Indian cooking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Coconut Oil</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Virgin, cold-pressed</li>
                <li>• Light coconut aroma</li>
                <li>• Multi-purpose (cooking, hair, skin)</li>
                <li>• Premium export quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Method */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
              Traditional Cold-Pressing Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Cold-Pressed?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Preserves natural nutrients and antioxidants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Maintains authentic flavor and aroma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No chemical refining or additives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Traditional wooden/stone presses used</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Lab-tested for purity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Free from trans fats and cholesterol</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Proper filtration, no sediment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Sealed in food-grade PET/glass bottles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Parameter</th>
                    <th className="px-6 py-4 text-left">Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">Extraction Method</td>
                    <td className="px-6 py-4 text-gray-600">Cold-pressed (below 50°C)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">Free Fatty Acid</td>
                    <td className="px-6 py-4 text-gray-600">&lt; 2% (as oleic acid)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">Peroxide Value</td>
                    <td className="px-6 py-4 text-gray-600">&lt; 10 meq/kg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">Moisture Content</td>
                    <td className="px-6 py-4 text-gray-600">&lt; 0.1%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">Shelf Life</td>
                    <td className="px-6 py-4 text-gray-600">12-18 months (properly stored)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Export & Private Label Options
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Supply premium Indian oils to health food stores, specialty retailers, restaurants, and e-commerce platforms worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Packaging Sizes</h3>
                <p className="opacity-90">250ml, 500ml, 1L, 5L, bulk drums</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Minimum Order</h3>
                <p className="opacity-90">500 liters per variant</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Customization</h3>
                <p className="opacity-90">Private labels, custom blends available</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm opacity-90 mb-1">Certifications</p>
                <p className="font-semibold">FSSAI, APEDA, ISO 22000, Organic (select variants)</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Request Export Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
