import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Portfólio de Trabalhos</h1>
      <p className="mb-6">Veja o antes e depois de projetos reais realizados pela nossa equipa. Transformações impressionantes de jardins em Arouca e arredores.</p>
      <img
        src="/images/portfolio.jpg"
        alt="Antes e depois de um jardim"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default PortfolioPage;