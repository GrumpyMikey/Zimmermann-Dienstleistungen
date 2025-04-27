import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import AboutSection from '../components/Home/AboutSection';
import ProjectsSection from '../components/Home/ProjectsSection';
// import TestimonialsSection from '../components/Home/TestimonialsSection';
import ContactSection from '../components/Home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
};

export default HomePage;