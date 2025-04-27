import React from 'react';
import { Building, Users, Construction, Truck, PenTool as Tool } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';
import ServiceCard from '../UI/ServiceCard';

// Component for displaying services section
const ServicesSection: React.FC = () => {
  // Define services with their details
  const services = [
    {
      title: 'Objekt Dienstleistungen',
      description: 'Professionelle Betreuung und Verwaltung von Immobilien und Objekten aller Art. Wir kümmern uns um Wartung, Instandhaltung und Sicherheit.',
      icon: <Building className="w-8 h-8" />,
      href: '#contact'
    },
    {
      title: 'Personal Dienstleistungen',
      description: 'Qualifiziertes und zuverlässiges Personal für Ihre Projekte. Flexible Personallösungen für kurz- und langfristige Einsätze.',
      icon: <Users className="w-8 h-8" />,
      href: '#contact'
    },
    {
      title: 'Bau Dienstleistungen',
      description: 'Umfassende Baudienstleistungen von Renovierung bis Neubau. Professionelle Ausführung mit modernster Technik und erfahrenem Personal.',
      icon: <Construction className="w-8 h-8" />,
      href: '#contact'
    },
    {
      title: 'Fahrdienstleistungen (Pkw Lkw)',
      description: 'Zuverlässiger Transport- und Fahrdienst mit PKW und LKW. Flexible Lösungen für Personen- und Materialtransporte.',
      icon: <Truck className="w-8 h-8" />,
      href: '#contact'
    },
    {
      title: 'Ersatzteile aller Art',
      description: 'Breites Sortiment an Ersatzteilen für verschiedenste Anwendungen. Schnelle Beschaffung und kompetente Beratung.',
      icon: <Tool className="w-8 h-8" />,
      href: '#contact'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Unsere Dienstleistungen"
          subtitle="Wir bieten hochwertige und zuverlässige Dienstleistungen für Ihren Bedarf an"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;