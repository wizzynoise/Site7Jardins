import React from 'react';
import { Mail } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import ExpandableTip from '../components/tips/ExpandableTip';

const gardeningTips = [
  {
    id: 1,
    title: 'Como preparar o solo para o plantio na primavera',
    introduction: 'Um solo bem preparado é a base para um jardim saudável. Vamos aprender como preparar a terra de forma simples e eficaz.',
    image: 'https://images.pexels.com/photos/5503256/pexels-photo-5503256.jpeg',
    steps: [
      {
        title: 'Limpeza do terreno',
        description: 'Remova ervas daninhas, pedras e outros detritos. Use uma enxada para soltar a terra superficial.',
      },
      {
        title: 'Teste do solo',
        description: 'Pegue um punhado de terra: se formar uma bola que se desfaz facilmente, está bom para plantar. Se estiver muito dura, precisa de composto.',
      },
      {
        title: 'Adição de matéria orgânica',
        description: 'Misture composto orgânico ou húmus de minhoca à terra. Use cerca de 3-5 cm de composto para cada 15 cm de solo.',
      },
      {
        title: 'Nivelamento',
        description: 'Use um ancinho para nivelar o terreno, garantindo que não haja buracos ou elevações.',
      },
      {
        title: 'Descanso do solo',
        description: 'Deixe o solo descansar por 1-2 dias antes de plantar, permitindo que os nutrientes se estabilizem.',
      },
    ],
    bonusTip: 'Guarde as folhas secas do outono para fazer composto natural durante o ano todo!',
    backgroundColor: 'bg-[#F5F7F0]',
  },
  {
    id: 2,
    title: 'As ervas aromáticas mais fáceis de cultivar na varanda',
    introduction: 'Ter ervas frescas à mão é uma delícia! Veja como cultivar um pequeno jardim de ervas mesmo em espaços limitados.',
    image: 'https://images.pexels.com/photos/6231705/pexels-photo-6231705.jpeg',
    steps: [
      {
        title: 'Escolha do local',
        description: 'Posicione os vasos onde recebam pelo menos 4-6 horas de sol por dia, protegidos de ventos fortes.',
      },
      {
        title: 'Seleção dos vasos',
        description: 'Use vasos de 15-20 cm de profundidade com furos para drenagem. Coloque pedras no fundo.',
      },
      {
        title: 'Plantio de manjericão',
        description: 'Comece com manjericão: fácil de crescer e versátil na cozinha. Plante as mudas com 20 cm de distância.',
      },
      {
        title: 'Cultivo de hortelã',
        description: 'Plante hortelã em um vaso separado, pois ela se espalha rapidamente. Mantenha o solo sempre úmido.',
      },
    ],
    bonusTip: 'Colha as folhas regularmente para estimular o crescimento das plantas!',
    backgroundColor: 'bg-[#F0F5F3]',
  },
  {
    id: 3,
    title: 'Por que a borra de café é útil na compostagem',
    introduction: 'A borra de café é um excelente adubo natural e pode melhorar significativamente seu composto. Descubra como aproveitá-la.',
    image: 'https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg',
    steps: [
      {
        title: 'Coleta da borra',
        description: 'Guarde a borra do café em um recipiente fechado, deixando secar naturalmente para evitar mofo.',
      },
      {
        title: 'Mistura ao composto',
        description: 'Adicione uma parte de borra para cada três partes de outros materiais orgânicos.',
      },
      {
        title: 'Uso direto no jardim',
        description: 'Espalhe uma fina camada ao redor das plantas que gostam de solo ácido, como azaleias e hortênsias.',
      },
      {
        title: 'Controle de pragas',
        description: 'Use a borra seca ao redor das plantas para afastar lesmas e caracóis naturalmente.',
      },
    ],
    bonusTip: 'A borra de café também atrai minhocas, que são excelentes para a saúde do solo!',
    backgroundColor: 'bg-[#F5F3F0]',
  },
];

const GardeningTipsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Dicas e Conhecimentos de Jardinagem" 
          subtitle="Compartilhamos nosso conhecimento para que você possa cuidar melhor do seu espaço verde."
        />
        
        <div className="space-y-8 mb-12">
          {gardeningTips.map((tip) => (
            <div key={tip.id} className={`rounded-lg overflow-hidden ${tip.backgroundColor}`}>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                  <div className="lg:col-span-1">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <ExpandableTip {...tip} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Tem alguma dúvida específica sobre jardinagem?
          </h3>
          <p className="text-gray-600 mb-4">
            Entre em contato conosco! Estamos sempre dispostos a compartilhar nosso conhecimento e experiência.
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
              <Mail className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-gray-800 font-medium">Envie sua pergunta para:</p>
              <a 
                href="mailto:sjgomesarouca@gmail.com" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                sjgomesarouca@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardeningTipsPage;