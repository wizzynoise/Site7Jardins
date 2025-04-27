import React, { useState } from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import PlantCard from '../components/highlights/PlantCard';
import ProductCard from '../components/highlights/ProductCard';
import ExternalProductCard from '../components/highlights/ExternalProductCard';
import ProductDetailsModal from '../components/highlights/ProductDetailsModal';

// Existing plants and products data...
const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    description: 'Planta tropical de folhas grandes e perfuradas, perfeita para ambientes internos.',
    price: '€ 65,90',
    image: 'https://images.pexels.com/photos/3097770/pexels-photo-3097770.jpeg?auto=compress&cs=tinysrgb&w=1600',
    characteristics: ['Meia sombra', 'Rega moderada', 'Crescimento rápido'],
  },
  {
    id: 2,
    name: 'Lavanda',
    description: 'Planta aromática com flores roxas que atraem polinizadores e repelem insetos indesejados.',
    price: '€ 28,50',
    image: 'https://images.pexels.com/photos/4017630/pexels-photo-4017630.jpeg?auto=compress&cs=tinysrgb&w=1600',
    characteristics: ['Sol pleno', 'Pouca água', 'Aromática'],
  },
  {
    id: 3,
    name: 'Espada de São Jorge',
    description: 'Planta resistente e de baixa manutenção, com folhas alongadas e elegantes.',
    price: '€ 38,90',
    image: 'https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1600',
    characteristics: ['Adapta-se à sombra', 'Pouca água', 'Purifica o ar'],
  },
  {
    id: 4,
    name: 'Suculenta Echeveria',
    description: 'Pequena planta suculenta com folhas em forma de roseta, ideal para pequenos espaços.',
    price: '€ 18,90',
    image: 'https://images.pexels.com/photos/1382394/pexels-photo-1382394.jpeg?auto=compress&cs=tinysrgb&w=1600',
    characteristics: ['Sol pleno', 'Pouca água', 'Fácil manutenção'],
  },
  {
    id: 5,
    name: 'Palmeira Areca',
    description: 'Elegante palmeira com folhas delicadas que traz um toque tropical a qualquer ambiente.',
    price: '€ 89,90',
    image: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    characteristics: ['Luz indireta', 'Rega regular', 'Purifica o ar'],
  },
  {
    id: 6,
    name: 'Orquídea Phalaenopsis',
    description: 'Orquídea elegante com flores duradouras, ideal para ambientes internos.',
    price: '€ 75,90',
    image: 'https://images.pexels.com/photos/1108746/pexels-photo-1108746.jpeg?auto=compress&cs=tinysrgb&w=1600',
    characteristics: ['Luz filtrada', 'Rega moderada', 'Floração longa'],
  },
];

const products = [
  {
    id: 1,
    name: 'Kit de Jardinagem Básico',
    description: 'Conjunto com pá, garfo, tesoura e luvas para jardinagem.',
    price: '€ 89,90',
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    name: 'Vaso de Cerâmica Artesanal',
    description: 'Vaso decorativo artesanal para plantas de médio porte.',
    price: '€ 45,50',
    image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    name: 'Terra Vegetal Adubada',
    description: 'Substrato especial para vasos e jardins, rico em nutrientes.',
    price: '€ 22,90',
    image: 'https://images.pexels.com/photos/5502188/pexels-photo-5502188.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

// Example external products data
// In a real application, this would come from an API or CMS
const externalProducts = [
  {
    id: 1,
    name: 'Estufa de Jardim Premium',
    description: 'Estufa de alta qualidade para cultivo protegido de plantas. Estrutura em alumínio e painéis de policarbonato resistentes aos raios UV.',
    price: '€ 299,99',
    image: 'https://images.pexels.com/photos/6231815/pexels-photo-6231815.jpeg?auto=compress&cs=tinysrgb&w=1600',
    source: 'Amazon',
    externalUrl: 'https://www.amazon.com',
  },
  {
    id: 2,
    name: 'Sistema de Irrigação Automático',
    description: 'Sistema completo de irrigação com temporizador digital e sensores de umidade para otimizar o uso da água.',
    price: '€ 149,99',
    image: 'https://images.pexels.com/photos/6231740/pexels-photo-6231740.jpeg?auto=compress&cs=tinysrgb&w=1600',
    source: 'Leroy Merlin',
    externalUrl: 'https://www.leroymerlin.com',
  },
  {
    id: 3,
    name: 'Cortador de Grama Elétrico',
    description: 'Cortador de grama potente e ergonômico, ideal para jardins médios. Inclui recolhedor e ajuste de altura.',
    price: '€ 259,99',
    image: 'https://images.pexels.com/photos/589/garden-gardening-grass-lawn.jpg?auto=compress&cs=tinysrgb&w=1600',
    source: 'Leroy Merlin',
    externalUrl: 'https://www.leroymerlin.com',
  },
];

const GardenHighlightsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof externalProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (product: typeof externalProducts[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Jardins em Destaque" 
          subtitle="Descubra nossas seleções de plantas e produtos para tornar seu jardim um espaço especial."
        />
        
        {/* Plants Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Plantas Recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plants.map((plant) => (
              <PlantCard key={plant.id} {...plant} />
            ))}
          </div>
        </section>
        
        {/* Products Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Produtos para Jardinagem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* External Products Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Produtos Recomendados de Parceiros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {externalProducts.map((product) => (
              <ExternalProductCard
                key={product.id}
                {...product}
                onOpenDetails={() => handleOpenDetails(product)}
              />
            ))}
          </div>
        </section>
        
        {/* Pricing Message */}
        <div className="mt-16 p-6 bg-primary-50 rounded-lg text-center">
          <p className="text-lg text-gray-800 font-medium">
            Na 7Jardins, oferecemos alguns dos preços mais competitivos do mercado—sem comprometer o cuidado e a qualidade.
          </p>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default GardenHighlightsPage;