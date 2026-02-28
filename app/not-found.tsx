import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container-custom text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/collections" className="btn-secondary">
            Explore Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
