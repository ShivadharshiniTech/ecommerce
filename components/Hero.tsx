import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-orange-50 to-amber-50 overflow-hidden">
      <div className="container-custom py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
              Illuminate Your
              <span className="block text-primary-600">Special Moments</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Handcrafted premium candles made with 100% natural soy wax and essential oils. 
              Transform your space with our luxurious, long-lasting fragrances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center">
                Shop Collection
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                Our Story
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-gray-600">Natural</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">40+</p>
                <p className="text-sm text-gray-600">Hours Burn</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1602874801006-96ef1db90c0d?w=600&h=700&fit=crop" 
                alt="Premium handcrafted candles"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
