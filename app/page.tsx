import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Features from '@/components/Features';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handcrafted with love, each candle is made from natural soy wax and premium essential oils
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
