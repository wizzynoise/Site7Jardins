import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';

const GardenDesignPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle>Design de Jardins</SectionTitle>
      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed">
          Oferecemos serviços profissionais de design de jardins, criando espaços verdes únicos e personalizados que transformam sua visão em realidade.
        </p>
      </div>
    </div>
  );
};

export default GardenDesignPage;