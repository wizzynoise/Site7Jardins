import React from 'react';
import Button from '../shared/Button';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/2132353/pexels-photo-2132353.jpeg')",
        backgroundPosition: 'center 30%'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
          Transforme o seu jardim num paraíso verde
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
          Somos uma equipa de profissionais dedicados à arte da jardinagem, 
          oferecendo serviços de excelência em Arouca e região.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            to="/destaques"
            variant="primary"
            size="large"
            className="w-full sm:w-auto"
          >
            Explorar Nossos Serviços
          </Button>
          <Button
            to="/dicas"
            variant="outline"
            size="large"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:bg-opacity-20"
          >
            Dicas de Jardinagem
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path 
            fill="#FFF" 
            fillOpacity="1" 
            d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;