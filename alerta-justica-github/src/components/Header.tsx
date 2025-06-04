import React from 'react';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Alerta Justiça Logo" className="h-12 w-auto mr-3" />
          <h1 className="text-2xl font-bold">Alerta Justiça</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="hover:text-red-300 transition-colors">Início</a></li>
            <li><a href="#problema" className="hover:text-red-300 transition-colors">O Problema</a></li>
            <li><a href="#plataforma" className="hover:text-red-300 transition-colors">A Plataforma</a></li>
            <li><a href="#interdisciplinaridade" className="hover:text-red-300 transition-colors">Interdisciplinaridade</a></li>
            <li><a href="#denuncie" className="hover:text-red-300 transition-colors font-bold">Denuncie</a></li>
            <li><a href="#recursos" className="hover:text-red-300 transition-colors">Recursos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
