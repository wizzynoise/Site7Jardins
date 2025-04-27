import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../shared/Card';
import Button from '../shared/Button';

interface ExternalProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  source: string;
  externalUrl: string;
  onOpenDetails: () => void;
}

const ExternalProductCard: React.FC<ExternalProductProps> = ({
  name,
  description,
  price,
  image,
  source,
  onOpenDetails,
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-contain bg-gray-50 p-4" />
        <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-medium py-1 px-3 rounded-full">
          {source}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-accent-600">{price}</span>
          <Button 
            variant="primary" 
            size="small"
            onClick={onOpenDetails}
            className="flex items-center gap-2"
          >
            Ver produto <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ExternalProductCard;