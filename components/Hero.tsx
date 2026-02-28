import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-orange-50 to-amber-50 overflow-hidden">
      <div className="container-custom py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-display font-bold text-gray-900 leading-tight">
              REXZIO
            </h1>
            <p className="text-2xl md:text-3xl font-display text-primary-600">
              Luxury. Crafted. Global.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A premium lifestyle and global experiences brand, creating refined products across fragrance, home, personal care, and gourmet foods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/collections" className="btn-primary text-center">
                Explore Collections
              </Link>
              <Link href="/exports" className="btn-secondary text-center">
                Global Exports
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">Premium</p>
                <p className="text-sm text-gray-600">Quality</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">Global</p>
                <p className="text-sm text-gray-600">Standards</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">Crafted</p>
                <p className="text-sm text-gray-600">in India</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/ChatGPT Image Feb 13, 2026, 11_34_00 AM.png" 
                alt="REXZIO luxury candles"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
      
      {/* Tag line */}
      <div className="bg-gray-900 py-4">
        <div className="container-custom text-center">
          <p className="text-white text-sm md:text-base">
            Crafted in India. Designed for the World.
          </p>
        </div>
      </div>
    </section>
  );
}
