import { Link, useLocation } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-terracotta/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Image
              src="https://static.wixstatic.com/media/a66230_21a3e7a50f2e4d3b829d1de3872f5d5b~mv2.jpeg"
              alt="PRITHVO - Indian Clay Crafts"
              width={120}
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-paragraph text-base transition-colors ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-paragraph text-base transition-colors ${
                isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/store"
              className={`font-paragraph text-base transition-colors ${
                location.pathname.startsWith('/store') || location.pathname.startsWith('/products')
                  ? 'text-primary font-medium'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/artisans"
              className={`font-paragraph text-base transition-colors ${
                location.pathname.startsWith('/artisans') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Artisan Stories
            </Link>
            <Link
              to="/sustainability"
              className={`font-paragraph text-base transition-colors ${
                isActive('/sustainability') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Sustainability
            </Link>
            <Link
              to="/contact"
              className={`font-paragraph text-base transition-colors ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center">
            <MiniCart
              cartIcon={ShoppingCart}
              cartIconClassName="text-primary hover:text-terracotta transition-colors"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
