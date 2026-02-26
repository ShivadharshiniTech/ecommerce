# LuxeGlow Candles - Premium E-Commerce Website

A fast, modern, and fully static e-commerce website for handcrafted candles built with Next.js 15, TypeScript, and Tailwind CSS. Features Razorpay payment integration, client-side cart management, and responsive design.

## ✨ Features

- **⚡ Lightning Fast**: Static site generation with zero cold start
- **🛒 Smart Shopping Cart**: Client-side state management with Zustand
- **💳 Secure Payments**: Razorpay integration for Indian payments
- **🔍 Real-time Search**: Client-side product search
- **📱 Mobile-First**: Fully responsive design
- **🎨 Beautiful UI**: Premium design with Tailwind CSS
- **♿ Accessible**: SEO-friendly with proper metadata
- **💰 Zero Cost Hosting**: Deploy to Vercel, Netlify, or GitHub Pages for free

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

   Get your Razorpay key from: https://razorpay.com/

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ecommerce/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── cart/                     # Shopping cart page
│   ├── checkout/                 # Checkout page
│   ├── contact/                  # Contact page
│   ├── order-success/            # Order confirmation page
│   ├── products/                 # Products listing
│   │   └── [id]/                 # Individual product page
│   ├── layout.tsx                # Root layout with header/footer
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   └── not-found.tsx             # 404 page
├── components/                   # Reusable React components
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Site footer
│   ├── Hero.tsx                  # Hero section
│   ├── Features.tsx              # Features showcase
│   ├── ProductCard.tsx           # Product card component
│   └── ProductGrid.tsx           # Product grid layout
├── data/                         # Static data
│   └── products.ts               # Product catalog
├── store/                        # State management
│   └── cartStore.ts              # Zustand cart store
├── types/                        # TypeScript definitions
│   └── index.ts                  # Type definitions
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies
```

## 🎨 Customization

### Update Product Catalog

Edit `data/products.ts` to modify products:

```typescript
{
  id: '1',
  name: 'Your Product Name',
  description: 'Product description...',
  price: 999,
  image: 'https://your-image-url.com/image.jpg',
  category: 'Category Name',
  scent: 'Scent Type',
  burnTime: '40-45 hours',
  weight: '200g',
  inStock: true,
  featured: true,
}
```

### Change Brand Colors

Edit `tailwind.config.ts` to update the color scheme:

```typescript
colors: {
  primary: {
    50: '#fef7ee',
    // ... other shades
    600: '#e15800',  // Main brand color
    // ... other shades
  },
},
```

### Update Business Information

- **Company Name**: Update in `app/layout.tsx`, `components/Header.tsx`, and `components/Footer.tsx`
- **Contact Details**: Update in `components/Footer.tsx` and `app/contact/page.tsx`
- **SEO Metadata**: Update in `app/layout.tsx`

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This creates an `out/` directory with static HTML files.

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Deploy to Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `out`
6. Deploy!

### Deploy to GitHub Pages

1. Update `next.config.ts` with your repository name
2. Run: `npm run build`
3. Push the `out/` directory to `gh-pages` branch

## 🔐 Razorpay Setup

1. Sign up at [razorpay.com](https://razorpay.com)
2. Get your API keys from Dashboard
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
   ```
4. For production, enable live mode and use live keys

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Payments**: Razorpay
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Images**: Unsplash (placeholder images)

## 📱 Features

### Customer Features
- Browse products with filtering and search
- View detailed product pages
- Add items to cart
- Adjust quantities in cart
- Secure checkout with Razorpay
- Order confirmation
- Mobile-responsive design

### Business Features
- Zero hosting costs
- Instant page loads
- SEO optimized
- Easy product management
- Scalable architecture
- Professional design

## 🔄 Future Enhancements

When you're ready to scale:

- Add backend with database (MongoDB, PostgreSQL)
- Implement user authentication
- Add order tracking
- Create admin dashboard
- Email notifications
- Product reviews
- Wishlist functionality
- Discount codes
- Analytics integration

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- Email: hello@luxeglowcandles.com
- Phone: +91 98765 43210

## 🎉 Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: Heroicons
- Payments: [Razorpay](https://razorpay.com)

---

**Made with ❤️ for LuxeGlow Candles**
