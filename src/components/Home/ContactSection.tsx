import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';

const ContactSection: React.FC = () => {
  const contactCards = [
    {
      title: 'Rufen Sie uns an',
      subtitle: 'Wir beraten Sie gerne persönlich',
      icon: <Phone className="w-8 h-8" />,
      link: 'tel:+49123456789',
      linkText: '+49 123 456 789'
    },
    {
      title: 'Schreiben Sie uns',
      subtitle: 'Wir antworten zeitnah',
      icon: <Mail className="w-8 h-8" />,
      link: 'mailto:info@zimmermann-dienste.de',
      linkText: 'info@zimmermann-dienste.de'
    },
    {
      title: 'Besuchen Sie uns',
      subtitle: 'Unser Standort',
      icon: <MapPin className="w-8 h-8" />,
      content: (
        <>
          Baustraße 123<br />
          12345 Musterstadt<br />
          Deutschland
        </>
      )
    },
    {
      title: 'Folgen Sie uns',
      subtitle: 'Aktuelle Projekte und Updates',
      icon: <Instagram className="w-8 h-8" />,
      link: 'https://www.instagram.com/m.zimmermann_dienstleistungen/',
      linkText: '@m.zimmermann_dienstleistungen',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Kontaktieren Sie uns"
          subtitle="Wir sind für Sie da und freuen uns auf Ihre Anfrage"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl p-6 bg-white hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                {card.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.subtitle}</p>
              
              {card.link ? (
                <a
                  href={card.link}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                >
                  {card.linkText}
                </a>
              ) : (
                <p className="text-gray-700">{card.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Opening Hours */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Unsere Öffnungszeiten</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-primary-50">
                <h4 className="font-medium mb-2">Montag - Freitag</h4>
                <p className="text-gray-700">8:00 - 17:00</p>
              </div>
              <div className="p-4 rounded-lg bg-primary-50">
                <h4 className="font-medium mb-2">Samstag</h4>
                <p className="text-gray-700">9:00 - 14:00</p>
              </div>
              <div className="p-4 rounded-lg bg-primary-50">
                <h4 className="font-medium mb-2">Sonntag</h4>
                <p className="text-gray-700">Geschlossen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56855.06311278814!2d8.743236507569952!3d49.01948517471934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977605656847e1%3A0x3901017ac81c3aef!2sKnittlingen!5e1!3m2!1sde!2sde!4v1745762805250!5m2!1sde!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;