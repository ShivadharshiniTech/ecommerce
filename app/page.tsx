import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CollectionsShowcase from '@/components/CollectionsShowcase';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CollectionsShowcase />
      
      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At REXZIO, luxury is not excess.<br/>
              It is detail. Precision. Intent.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimal Elegance</h3>
                <p className="text-gray-600 text-sm">Refined design without compromise</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentic Sourcing</h3>
                <p className="text-gray-600 text-sm">Quality from origin to delivery</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Standards</h3>
                <p className="text-gray-600 text-sm">Export-ready excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Partner With REXZIO
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Global distributors, bulk importers, and strategic collaborators welcome. Let's build premium markets together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/exports" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Global Exports
            </Link>
            <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
