import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Scissors, Droplets, Flower2 } from 'lucide-react';
import SectionTitle from '../../components/shared/SectionTitle';
import Card from '../../components/shared/Card';

const services = [
  {
    id: 1,
    title: 'Design de Jardins',
    description: 'Criamos jardins únicos que refletem o seu estilo e personalidade, harmonizando beleza e funcionalidade.',
    icon: <Ruler className="w-10 h-10 text-primary-600" />,
    path: '/servicos/design-jardins',
    image: 'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg',
  },
  {
    id: 2,
    title: 'Manutenção',
    description: 'Serviços regulares de manutenção para manter seu jardim sempre bonito e saudável.',
    icon: <Scissors className="w-10 h-10 text-primary-600" />,
    path: '/servicos/manutencao',
    image: 'https://images.pexels.com/photos/589/garden-gardening-grass-lawn.jpg',
  },
  {
    id: 3,
    title: 'Sistemas de Rega',
    description: 'Instalação e manutenção de sistemas de rega automática para otimizar o uso da água.',
    icon: <Droplets className="w-10 h-10 text-primary-600" />,
    path: '/servicos/sistemas-rega',
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
  },
  {
    id: 4,
    title: 'Decoração de Eventos',
    description: 'Decoração floral e paisagismo temporário para eventos especiais.',
    icon: <Flower2 className="w-10 h-10 text-primary-600" />,
    path: '/servicos/decoracao-eventos',
    image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Oferecemos uma gama completa de serviços de jardinagem profissional para transformar e manter o seu espaço verde."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.id} to={service.path}>
              <Card hover className="h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;