import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';

const AboutSection: React.FC = () => {
  const benefits = [
    'Über 20 Jahre Erfahrung in der Baubranche',
    'Qualifiziertes und geschultes Fachpersonal',
    'Modernste Maschinen und Ausrüstung',
    'Termintreue und Zuverlässigkeit',
    'Faire und transparente Preisgestaltung',
    'Umweltbewusste und nachhaltige Arbeitsweise'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Über Zimmermann Dienstleistungen"
              subtitle="Ihr vertrauenswürdiger Partner für alle Bauvorhaben"
            />
            
            <p className="text-gray-700 mb-6">
              Seit der Gründung im Jahr 2003 steht Zimmermann Dienstleistungen für höchste Qualität und Kundenzufriedenheit. Als Familienunternehmen legen wir großen Wert auf persönlichen Service und langfristige Kundenbeziehungen.
            </p>
            
            <p className="text-gray-700 mb-8">
              Mit unserem erfahrenen Team und modernster Ausrüstung realisieren wir Projekte jeder Größenordnung termingerecht und zu fairen Preisen. Dabei steht Nachhaltigkeit und Umweltschutz stets im Mittelpunkt unseres Handelns.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button href="#contact">Kontaktieren Sie uns</Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Zimmermann Team bei der Arbeit" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 bottom-8 left-8 rounded-lg border-2 border-primary-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;