import React from 'react';
import { Scissors, Scaling as Seedling, Trash2 } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Card from '../shared/Card';

const services = [
  {
    id: 1,
    title: 'Corte de Jardins',
    description: 'Mantemos seu jardim sempre bem aparado e organizado com cortes precisos e cuidadosos.',
    icon: <Scissors className="w-10 h-10 text-primary-600" />,
  },
  {
    id: 2,
    title: 'Plantação',
    description: 'Selecionamos e plantamos as espécies ideais para o seu espaço, garantindo um jardim bonito e saudável.',
    icon: <Seedling className="w-10 h-10 text-primary-600" />,
  },
  {
    id: 3,
    title: 'Limpeza de Espaços Verdes',
    description: 'Removemos folhas, galhos e detritos, deixando seu espaço verde limpo e agradável.',
    icon: <Trash2 className="w-10 h-10 text-primary-600" />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Oferecemos uma variedade de serviços de jardinagem com os melhores preços do mercado, sem comprometer a qualidade."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="p-8 text-center transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-primary-50 rounded-lg text-center">
          <p className="text-lg text-gray-800 font-medium">
            Na 7Jardins, oferecemos alguns dos preços mais competitivos do mercado—sem comprometer o cuidado e a qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;