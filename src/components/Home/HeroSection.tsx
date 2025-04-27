import React from 'react';
import Button from '../UI/Button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Professionelle <span className="text-primary-400">Bau-</span> und <span className="text-primary-400">Gartenarbeiten</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Abbrucharbeiten, Aushub, Transport und Gartenbau - hochwertige Dienstleistungen aus einer Hand für Ihren Erfolg.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#services" size="lg">
              Unsere Leistungen
            </Button>
            <Button href="#contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;