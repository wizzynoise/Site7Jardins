import React from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';

interface PlantCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  characteristics?: string[];
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  description,
  price,
  image,
  characteristics = [],
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="absolute top-3 right-3 bg-accent-500 text-white font-medium py-1 px-3 rounded-full">
          {price.replace('R$', '€')}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {characteristics.length > 0 && (
          <div className="mb-4 mt-auto">
            <ul className="space-y-1">
              {characteristics.map((characteristic, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  {characteristic}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <Button variant="primary" size="medium" className="mt-2 w-full">
          Saiba Mais
        </Button>
      </div>
    </Card>
  );
};

export default PlantCard;