import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedTips from '../components/home/FeaturedTips';
import Services from '../components/home/Services';
import GardenInspirations from '../components/home/GardenInspirations';

import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <div>
    <Helmet>
      <title>7Jardins - Especialistas em Jardinagem</title>
      <meta name="description" content="Serviços de jardinagem, manutenção e loja online em Arouca." />
    </Helmet>

      <Hero />
      <FeaturedTips />
      <GardenInspirations />
      <Services />
    </div>
  );
};

export default HomePage;