import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  hover?: boolean;
  role?: string;
  'aria-labelledby'?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  bordered = false,
  hover = false,
  role,
  'aria-labelledby': ariaLabelledBy,
}) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  const borderClasses = bordered ? 'border border-gray-200' : 'shadow-md';
  const hoverClasses = hover
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg'
    : '';

  return (
    <div 
      className={`${baseClasses} ${borderClasses} ${hoverClasses} ${className}`}
      role={role}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </div>
  );
};

export default Card;