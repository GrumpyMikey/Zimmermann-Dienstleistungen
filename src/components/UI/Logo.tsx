import React from 'react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <a href="#home" className="flex items-center">
      <img 
        src="logo-4.png" 
        alt="Zimmermann Dienstleistungen Logo" 
        className="h-12 w-12 md:h-16 md:w-16 object-contain"
      />
      <div className="ml-2">
        <div className="flex flex-col md:flex-row md:items-baseline">
          <span className={`font-bold text-lg md:text-xl ${light ? 'text-white' : 'text-gray-800'}`}>
            Zimmermann
          </span>
          <span className={`font-bold text-lg md:text-xl ${light ? 'text-primary-300' : 'text-primary-600'}`}>
            {' Dienstleistungen'}
          </span>
        </div>
        <span className="text-sm text-gray-500 hidden md:block">Knittlingen</span>
      </div>
    </a>
  );
};

export default Logo;