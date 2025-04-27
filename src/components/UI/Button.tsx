import React from 'react';

// Props interface for the Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

// Reusable Button component that can be rendered as either a button or an anchor
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  href,
}) => {
  // Base styles for all button variants
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md';
  
  // Styles for different button variants
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
    outline: 'border-2 border-white text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2'
  };
  
  // Styles for different button sizes
  const sizeStyles = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  // Combine all styles
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // Render as anchor if href is provided, otherwise as button
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;