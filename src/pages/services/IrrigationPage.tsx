
import React from 'react';

const IrrigationPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Sistemas de Rega</h1>
      <p className="mb-6">
        A 7Jardins oferece soluções modernas e eficientes de sistemas de rega automáticos e manuais.
        Garantimos a saúde e sustentabilidade do seu jardim com o mínimo desperdício de água.
      </p>
      <img
        src="/images/irrigation.jpg"
        alt="Sistema de rega em jardim"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default IrrigationPage;
