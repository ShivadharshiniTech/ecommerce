import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-orange-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
            About REXZIO
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A multi-category premium lifestyle brand rooted in craftsmanship, refinement, and global ambition
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=600&fit=crop"
                alt="REXZIO craftsmanship"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  REXZIO is a premium lifestyle and global experiences brand, creating refined products across fragrance, home, personal care, and gourmet foods.
                </p>
                <p>
                  We design and manufacture elevated products that blend aesthetics, function, and cultural richness — from artisanal candles to export-grade gourmet foods.
                </p>
                <p className="text-xl font-semibold text-primary-600">
                  To build a globally respected Indian luxury brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Our Philosophy
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-2xl font-display text-gray-900 mb-6 text-center">
                At REXZIO, luxury is not excess.<br/>
                It is detail. Precision. Intent.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimal Elegance</h3>
                  <p className="text-gray-600">Design that speaks through simplicity and refinement</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentic Sourcing</h3>
                  <p className="text-gray-600">Quality materials from trusted origins</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Thoughtful Manufacturing</h3>
                  <p className="text-gray-600">Precision in every stage of production</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Long-term Brand Building</h3>
                  <p className="text-gray-600">Creating legacy through consistent excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Every product meets international standards and undergoes rigorous quality control.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Positioning</h3>
              <p className="text-gray-600">
                Designed for international markets with export compliance and documentation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crafted in India</h3>
              <p className="text-gray-600">
                Proudly manufactured in India, combining traditional craftsmanship with modern precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Experience REXZIO
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us in building a globally respected Indian luxury brand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Explore Collections
            </Link>
            <Link href="/partner" className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
