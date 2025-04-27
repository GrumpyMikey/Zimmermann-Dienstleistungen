import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import TestimonialCard from '../UI/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Michael Schmidt',
      position: 'Privatkunde',
      text: 'Das Team von Zimmermann Dienstleistungen hat unseren Garten komplett umgestaltet. Die Arbeit wurde schnell, sauber und sehr professionell ausgeführt. Wir sind mehr als zufrieden mit dem Ergebnis!',
      rating: 5
    },
    {
      name: 'Laura Weber',
      position: 'Architektin',
      text: 'Als Architektin arbeite ich regelmäßig mit Zimmermann Dienstleistungen zusammen. Die Zuverlässigkeit und Qualität der Arbeit ist stets hervorragend. Ein Partner, auf den man sich verlassen kann.',
      rating: 5
    },
    {
      name: 'Thomas Becker',
      position: 'Bauunternehmer',
      text: 'Für Aushub- und Transportarbeiten ist Zimmermann unser bevorzugter Partner. Termintreue, faire Preise und einwandfreie Ausführung zeichnen das Unternehmen aus.',
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-primary-800 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Was unsere Kunden sagen"
          subtitle="Erfahren Sie, warum Kunden immer wieder auf unsere Dienstleistungen vertrauen"
          center
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;