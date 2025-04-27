import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Leaf, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="font-serif font-bold text-xl">7Jardins</span>
            </div>
            <p className="mb-4 text-gray-300">
              Uma empresa familiar apaixonada pela arte da jardinagem, oferecendo serviços com os melhores preços do mercado—sem comprometer o cuidado e a qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Páginas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/destaques" className="text-gray-300 hover:text-white transition-colors">
                  Jardins em Destaque
                </Link>
              </li>
              <li>
                <Link to="/dicas" className="text-gray-300 hover:text-white transition-colors">
                  Dicas e Conhecimentos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Corte de Jardins</li>
              <li className="text-gray-300">Plantação</li>
              <li className="text-gray-300">Limpeza de Espaços Verdes</li>
              <li className="text-gray-300">Ideias Criativas para Jardins</li>
              <li className="text-gray-300">Venda de Ferramentas e Plantas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-300" />
                <a 
                  href="mailto:sjgomesarouca@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  sjgomesarouca@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-300" />
                <span className="text-gray-300">
                  Arouca, Portugal
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 7Jardins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;