import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-40">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Image
              src="https://static.wixstatic.com/media/a66230_21a3e7a50f2e4d3b829d1de3872f5d5b~mv2.jpeg"
              alt="PRITHVO"
              width={140}
              className="h-20 w-auto object-contain brightness-0 invert"
            />
            <p className="font-paragraph text-sm text-primary-foreground/90 leading-relaxed">
              Crafted with Mitti, Rooted in Tradition. Celebrating Indian clay culture through handmade pottery and artisan empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="font-paragraph text-sm hover:text-terracotta transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/store" className="font-paragraph text-sm hover:text-terracotta transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/artisans" className="font-paragraph text-sm hover:text-terracotta transition-colors">
                  Artisan Stories
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="font-paragraph text-sm hover:text-terracotta transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-sm hover:text-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm">
                  Artisan Village, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="font-paragraph text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="font-paragraph text-sm">hello@prithvo.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-xl mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="font-paragraph text-sm mt-6 text-primary-foreground/90">
              Join our community and stay updated with our latest creations and artisan stories.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <p className="font-paragraph text-sm text-center text-primary-foreground/80">
            © {new Date().getFullYear()} PRITHVO. All rights reserved. Handcrafted with love in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
