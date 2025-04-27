import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    {
      name: 'Serviços',
      path: '/servicos',
      subItems: [
        { name: 'Design de Jardins', path: '/servicos/design-jardins' },
        { name: 'Manutenção', path: '/servicos/manutencao' },
        { name: 'Sistemas de Rega', path: '/servicos/sistemas-rega' },
        { name: 'Decoração de Eventos', path: '/servicos/decoracao-eventos' },
      ],
    },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Loja Online', path: '/loja' },
    { name: 'Blog', path: '/blog' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-primary-600 font-serif font-bold text-xl"
            onClick={closeMenu}
          >
            <Leaf className="h-8 w-8" />
            <span className="hidden sm:inline">7Jardins</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.subItems ? (
                  <div className="relative">
                    <button
                      className={`flex items-center gap-1 font-medium hover:text-primary-600 transition-colors ${
                        location.pathname.startsWith(link.path)
                          ? 'text-primary-600'
                          : isScrolled
                          ? 'text-gray-700'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          onClick={closeMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium hover:text-primary-600 transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary-600'
                        : isScrolled
                        ? 'text-gray-700'
                        : 'text-gray-700'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg animate-fade-in mt-4 rounded-lg">
            <nav className="py-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.subItems ? (
                    <>
                      <button
                        className={`w-full flex items-center justify-between px-4 py-2 font-medium ${
                          location.pathname.startsWith(link.path)
                            ? 'text-primary-600'
                            : 'text-gray-700'
                        }`}
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="bg-gray-50 py-2">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-8 py-2 text-gray-700 hover:text-primary-600"
                              onClick={closeMenu}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 font-medium ${
                        location.pathname === link.path
                          ? 'text-primary-600'
                          : 'text-gray-700'
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;