import React from 'react';
import { Instagram, Mail, Phone, MapPin, Facebook } from 'lucide-react';
import Logo from '../UI/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="text-gray-400 mb-4">
              Professionelle Dienstleistungen: 
              Objekt-, Personal-, Bau-, und Fahrdienstleistungen sowie Ersatzteile aller Art.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Maik-Zimmermann-Dienstleistungen-und-Ersatzteile-100092544400631/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/m.zimmermann_dienstleistungen/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 text-primary-400" />
                <a href="tel:+49123456789" className="hover:text-primary-400 transition-colors">
                  +49 123 456 789
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 text-primary-400" />
                <a href="mailto:info@zimmermann-dienstleistungen.de" className="hover:text-primary-400 transition-colors">
                  info@zimmermann-dienstleistungen.de
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary-400" />
                <span>Baustraße 123<br />12345 Musterstadt<br />Deutschland</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Direkt zu</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Dienstleistungen</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">Über uns</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projekte</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>8:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag:</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} Zimmermann Dienstleistungen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;