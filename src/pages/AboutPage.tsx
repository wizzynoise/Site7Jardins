import React from 'react';
import { Mail, Phone, MapPin, Leaf, Heart, Users, ThumbsUp } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sobre a 7Jardins" 
          subtitle="Uma equipa de profissionais apaixonados pela arte da jardinagem."
        />
        
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">A Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A 7Jardins é uma equipa de profissionais dedicados que, ao longo de anos, têm vindo a transformar 
                espaços verdes em verdadeiros jardins de sonho. A nossa paixão pela natureza e o compromisso 
                com a excelência são a base do nosso trabalho diário.
              </p>
              <p className="text-gray-600 mb-4">
                Especializamo-nos em serviços completos de jardinagem, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                <li>Manutenção profissional de espaços verdes</li>
                <li>Corte especializado de relva e arbustos</li>
                <li>Plantação cuidadosa de árvores e flores</li>
                <li>Desenho e planeamento de jardins</li>
                <li>Sistemas de rega automática</li>
              </ul>
              <p className="text-gray-600">
                O nosso compromisso é transformar cada espaço verde num ambiente único, 
                harmonioso e sustentável, sempre com o máximo respeito pela natureza.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg" 
                alt="Equipa 7Jardins em trabalho" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Os Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Sustentabilidade</h3>
              <p className="text-gray-600">
                Comprometidos com práticas ecológicas e sustentáveis em todos os nossos serviços.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Dedicação</h3>
              <p className="text-gray-600">
                Cuidamos de cada jardim com a mesma paixão que dedicamos ao nosso.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Profissionalismo</h3>
              <p className="text-gray-600">
                Equipa especializada com anos de experiência em jardinagem.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Qualidade</h3>
              <p className="text-gray-600">
                Comprometidos com a excelência em cada detalhe do nosso trabalho.
              </p>
            </Card>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Contacte-nos</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Email:</p>
                  <a 
                    href="mailto:sjgomesarouca@gmail.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    sjgomesarouca@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Localização:</p>
                  <p className="text-gray-800">Arouca, Portugal</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Contacte-nos para um orçamento gratuito ou para esclarecer qualquer dúvida sobre os nossos serviços.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;