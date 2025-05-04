import React from 'react';

const StorePage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Catálogo de Plantas</h1>
      <p className="mb-6">Veja as plantas e acessórios disponíveis para venda. Incluímos uma seleção de espécies decorativas ideais para jardins exteriores e interiores.</p>
      <img
        src="/images/store.jpg"
        alt="Variedade de plantas à venda"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default StorePage;