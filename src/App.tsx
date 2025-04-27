import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/services/ServicesPage';
import GardenDesignPage from './pages/services/GardenDesignPage';
import MaintenancePage from './pages/services/MaintenancePage';
import IrrigationPage from './pages/services/IrrigationPage';
import EventDecorationPage from './pages/services/EventDecorationPage';
import StorePage from './pages/StorePage';
import BlogPage from './pages/BlogPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/servicos/design-jardins" element={<GardenDesignPage />} />
        <Route path="/servicos/manutencao" element={<MaintenancePage />} />
        <Route path="/servicos/sistemas-rega" element={<IrrigationPage />} />
        <Route path="/servicos/decoracao-eventos" element={<EventDecorationPage />} />
        <Route path="/loja" element={<StorePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;