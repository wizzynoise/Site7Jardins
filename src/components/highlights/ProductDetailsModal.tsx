import React from 'react';
import { Dialog } from '@headlessui/react';
import { ExternalLink, Mail, X } from 'lucide-react';
import Button from '../shared/Button';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    price: string;
    image: string;
    source: string;
    externalUrl: string;
  };
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-lg shadow-xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-800 text-white text-xs font-medium py-1 px-3 rounded-full">
                      {product.source}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-2xl font-bold text-accent-600 mb-6">
                    {product.price}
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      href={product.externalUrl}
                      variant="primary"
                      size="large"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      Ver no site original <ExternalLink size={16} />
                    </Button>
                    <Button
                      href="mailto:contato@7jardins.com"
                      variant="outline"
                      size="large"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      Contactar a 7Jardins <Mail size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProductDetailsModal;