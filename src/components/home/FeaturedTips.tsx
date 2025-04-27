import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Card from '../shared/Card';
import Button from '../shared/Button';

const tips = [
  {
    id: 1,
    title: 'Como regar suas plantas corretamente',
    description: 'Aprenda a frequência ideal e quantidade de água para manter suas plantas saudáveis o ano todo.',
    image: 'https://images.pexels.com/photos/4505168/pexels-photo-4505168.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    title: 'Plantas ideais para iniciantes',
    description: 'Descubra quais plantas são mais resistentes e fáceis de cuidar para quem está começando.',
    image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    title: 'Combatendo pragas naturalmente',
    description: 'Métodos naturais e eficazes para manter seu jardim livre de pragas sem usar produtos químicos.',
    image: 'https://images.pexels.com/photos/7728082/pexels-photo-7728082.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const FeaturedTips: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Dicas e Conhecimentos de Jardinagem" 
          subtitle="Compartilhamos nosso conhecimento para que você possa cuidar melhor do seu espaço verde."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <Card key={tip.id} hover className="h-full flex flex-col">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{tip.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{tip.description}</p>
                <Button
                  to="/dicas"
                  variant="outline"
                  size="small"
                  className="self-start mt-2 flex items-center gap-2"
                >
                  Ler mais <ArrowRight size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/dicas" variant="primary">
            Ver Todas as Dicas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTips;