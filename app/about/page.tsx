import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-orange-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handcrafted with love, each candle tells a story of passion, dedication, and the pursuit of creating the perfect ambiance
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=600&fit=crop"
                alt="Candle making process"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Born from Passion
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  LuxeGlow Candles started in a small home kitchen with a simple dream: to create candles that not only illuminate spaces but also touch hearts. What began as a hobby quickly turned into a passion project that we're proud to share with you.
                </p>
                <p>
                  Every candle we make is a labor of love, crafted with 100% natural soy wax and premium essential oils. We believe in quality over quantity, and each piece reflects our commitment to excellence.
                </p>
                <p>
                  Our candles are more than just products – they're experiences. Whether you're unwinding after a long day, creating a romantic atmosphere, or simply enjoying a quiet moment, our candles are designed to enhance every special moment in your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We use only premium, natural ingredients to ensure the highest quality and longest burn time for our candles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Handcrafted with Love</h3>
              <p className="text-gray-600">
                Each candle is individually poured and inspected, ensuring every piece meets our high standards of excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                We&apos;re committed to sustainability, using natural soy wax, lead-free cotton wicks, and recyclable packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Experience the LuxeGlow Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of happy customers who have transformed their spaces with our premium candles
          </p>
          <Link href="/products" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Shop Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
