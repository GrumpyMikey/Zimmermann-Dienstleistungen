import React from 'react';

interface NavLinksProps {
  isScrolled: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isScrolled, isMobile = false, onLinkClick }) => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Dienstleistungen', href: '#services' },
    { name: 'Über uns', href: '#about' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const linkStyles = isMobile
    ? 'block py-2 text-gray-800 hover:text-primary-600 transition-colors text-lg'
    : `font-medium transition-colors duration-300 ${
        isScrolled 
          ? 'text-gray-800 hover:text-primary-600' 
          : 'text-white hover:text-primary-100'
      }`;

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={linkStyles}
          onClick={onLinkClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default NavLinks;