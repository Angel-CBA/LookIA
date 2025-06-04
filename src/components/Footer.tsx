
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mx-6 md:mx-20 rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">LookIA</h3>
            <p className="text-sm text-gray-600 mb-4">
              Tu estilo, sin esfuerzo. Descubre outfits perfectos para cada ocasión.
            </p>
          </div>

          {/* Enlaces */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Enlaces</h4>
            <div className="space-y-2">
              <a href="#outfits" className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                Outfits
              </a>
              <a href="#about" className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                Acerca de
              </a>
              <a href="#privacy" className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                Aviso Legal
              </a>
              <a href="#terms" className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300">
                Términos y Condiciones
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">info@lookia.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">+54 9 351 0123 456</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Córdoba, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <a href="#" className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-primary" />
              </a>
            </div>
            
            <p className="text-sm text-gray-600 text-center">
              © 2024 LookIA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
