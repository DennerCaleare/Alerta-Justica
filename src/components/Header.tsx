import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Alerta Justiça Logo" className="h-10 mr-3" />
          <h1 className="text-xl font-bold">Alerta Justiça</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-300 transition-colors">{t('header.home')}</a></li>
              <li><a href="#problema" className="hover:text-blue-300 transition-colors">{t('header.problem')}</a></li>
              <li><a href="#plataforma" className="hover:text-blue-300 transition-colors">{t('header.platform')}</a></li>
              <li><a href="#interdisciplinaridade" className="hover:text-blue-300 transition-colors">{t('header.interdisciplinarity')}</a></li>
              <li><a href="#denuncie" className="hover:text-blue-300 transition-colors">{t('header.report')}</a></li>
              <li><a href="#recursos" className="hover:text-blue-300 transition-colors">{t('header.resources')}</a></li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
        
        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button 
            onClick={toggleMenu}
            className="ml-4 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 py-2">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li><a href="#" className="block py-2 hover:text-blue-300 transition-colors" onClick={toggleMenu}>{t('header.home')}</a></li>
              <li><a href="#problema" className="block py-2 hover:text-blue-300 transition-colors" onClick={toggleMenu}>{t('header.problem')}</a></li>
              <li><a href="#plataforma" className="block py-2 hover:text-blue-300 transition-colors" onClick={toggleMenu}>{t('header.platform')}</a></li>
              <li><a href="#interdisciplinaridade" className="block py-2 hover:text-blue-300 transition-colors" onClick={toggleMenu}>{t('header.interdisciplinarity')}</a></li>
              <li><a href="#denuncie" className="block py-2 hover:text-blue-300 transition-colors" onClick={toggleMenu}>{t('header.report')}</a></li>
              <li><a href="#recursos" className="block py-2 hover:text-blue-300 transition-colors" onClick={toggleMenu}>{t('header.resources')}</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
