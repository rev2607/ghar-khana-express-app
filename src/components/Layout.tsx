
import React, { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Track Order', path: '/tracking' },
    { name: 'My Account', path: '/dashboard' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <span className="font-playfair text-2xl font-bold text-primary">Neelam</span>
              <span className="font-nunito text-sm font-medium ml-1">Ghar Ka Khana</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `menu-link ${isActive ? 'text-primary after:scale-x-100' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button size="sm" className="ml-4">Order Now</Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) => 
                      `text-lg py-2 ${isActive ? 'text-primary font-medium' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Button size="sm" className="mt-4 w-full">Order Now</Button>
              </nav>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-4 top-4"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-muted py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex flex-col">
                <span className="font-playfair text-2xl font-bold text-primary">Neelam</span>
                <span className="font-nunito text-sm font-medium">Ghar Ka Khana</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Delicious homemade Indian meals delivered to your doorstep in Mumbai.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
                <li><Link to="/subscription" className="hover:text-primary transition-colors">Subscription Plans</Link></li>
                <li><Link to="/#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link to="/#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                <li><Link to="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <span>hello@neelamgharkhana.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary mt-1" />
                  <span>123 Dadar East, Mumbai 400014, Maharashtra, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Subscribe to Newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-md border text-sm"
                  />
                  <Button size="sm">Send</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Neelam Ghar Ka Khana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
