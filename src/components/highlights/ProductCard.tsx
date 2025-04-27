import React from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <img src={image} alt={name} className="w-full h-56 object-contain bg-gray-50 p-4" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-accent-600">{price.replace('R$', '€')}</span>
          <Button variant="primary" size="small">
            Ver Detalhes
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;