
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#outfits", label: "Outfits" },
    { href: "#featured", label: "Destacados" },
    { href: "#how-it-works", label: "Cómo funciona" },
    { href: "#benefits", label: "Beneficios" },
    { href: "#quiz", label: "Quiz" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#partners", label: "Aliados" },
    { href: "#newsletter", label: "Newsletter" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md px-6 py-4 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">LookIA</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Login Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
            Iniciar sesión
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
