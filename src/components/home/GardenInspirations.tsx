import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';

const inspirations = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Jardins Clássicos',
    description: 'Elegância atemporal com caminhos simétricos e bordas bem definidas.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Jardins Tropicais',
    description: 'Um oásis exuberante com plantas vibrantes e folhagens exóticas.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/97465/pexels-photo-97465.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Jardins Minimalistas',
    description: 'Design limpo e simples que valoriza o espaço e a serenidade.',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/7756913/pexels-photo-7756913.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Jardins Sustentáveis',
    description: 'Espaços ecologicamente responsáveis com plantas nativas e baixo consumo de água.',
  },
];

const GardenInspirations: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sugestões para o Seu Jardim" 
          subtitle="Conheça diferentes estilos e ideias para transformar seu espaço verde em um ambiente único e especial."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspirations.map((inspiration) => (
            <div key={inspiration.id} className="group overflow-hidden rounded-lg shadow-md relative">
              <img
                src={inspiration.image}
                alt={inspiration.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="text-xl font-semibold mb-1">{inspiration.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{inspiration.description}</p>
                <Button
                  to="/destaques"
                  variant="outline"
                  size="small"
                  className="self-start text-white border-white hover:bg-white/20 w-8 h-8 p-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/destaques" variant="primary" className="flex items-center gap-2 mx-auto">
            Ver Mais Inspirações <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GardenInspirations;