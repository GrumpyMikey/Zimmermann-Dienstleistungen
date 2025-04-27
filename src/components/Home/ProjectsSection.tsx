import React, { useState } from 'react';
import SectionTitle from '../UI/SectionTitle';
import ProjectCard from '../UI/ProjectCard';
import Button from '../UI/Button';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'abbruch', name: 'Abbruch' },
    { id: 'aushub', name: 'Aushub' },
    { id: 'gartenbau', name: 'Gartenbau' },
    { id: 'transport', name: 'Transport' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Gebäudeabbruch Altstadt',
      category: 'abbruch',
      imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 2,
      title: 'Baugrube für Mehrfamilienhaus',
      category: 'aushub',
      imageUrl: 'https://images.pexels.com/photos/6474049/pexels-photo-6474049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 3,
      title: 'Parkgestaltung Stadt Muster',
      category: 'gartenbau',
      imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 4,
      title: 'Material Transport Großbaustelle',
      category: 'transport',
      imageUrl: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 5,
      title: 'Industriegebäude Rückbau',
      category: 'abbruch',
      imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 6,
      title: 'Privatgarten Neugestaltung',
      category: 'gartenbau',
      imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    }
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Unsere Projekte"
          subtitle="Eine Auswahl unserer erfolgreich abgeschlossenen Projekte"
          center
        />
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={categories.find(c => c.id === project.category)?.name || ''}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Keine Projekte in dieser Kategorie gefunden.
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button href="#contact">Kontaktieren Sie uns für Ihr Projekt</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;