import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="mb-6">Entre em contacto connosco para pedir orçamentos ou esclarecer dúvidas. Atendemos Arouca e arredores com dedicação e profissionalismo.</p>
      <img
        src="/images/contact.jpg"
        alt="Formulário de contacto"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default ContactPage;