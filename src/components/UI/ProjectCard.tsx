import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageUrl, 
  title, 
  category, 
  onClick 
}) => {
  return (
    <div 
      className="group overflow-hidden rounded-lg shadow-md cursor-pointer relative"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-primary-300 text-sm uppercase font-medium">{category}</p>
          <h3 className="text-white text-xl font-semibold mt-1">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;