import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import Card from '../shared/Card';
import Button from '../shared/Button';

interface TipCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const TipCard: React.FC<TipCardProps> = ({
  title,
  excerpt,
  image,
  date,
  readTime,
  category,
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-3 left-3 bg-primary-500 text-white text-sm font-medium py-1 px-3 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" /> {date}
          </span>
          <span className="flex items-center ml-4">
            <Clock size={14} className="mr-1" /> {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        
        <Button
          variant="outline"
          size="small"
          className="self-start mt-auto"
        >
          Ler Mais
        </Button>
      </div>
    </Card>
  );
};

export default TipCard;