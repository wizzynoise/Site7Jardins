import React from 'react';

const EventDecorationPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Decoração de Eventos</h1>
      <p className="mb-6">Oferecemos decoração natural e elegante para casamentos, batizados, festas e eventos corporativos. Plantas, flores e elementos verdes para criar ambientes memoráveis.</p>
      <img
        src="/images/event-decoration.jpg"
        alt="Decoração de evento com plantas"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default EventDecorationPage;