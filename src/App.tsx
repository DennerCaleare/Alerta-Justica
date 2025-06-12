import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreProblema from './components/SobreProblema';
import Plataforma from './components/Plataforma';
import Interdisciplinaridade from './components/Interdisciplinaridade';
import Denuncie from './components/Denuncie';
import Recursos from './components/Recursos';
import Contato from './components/Contato';
import './App.css';

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <SobreProblema />
      <Plataforma />
      <Interdisciplinaridade />
      <Denuncie />
      <Recursos />
      <Contato />
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>{t('footer.copyright')} © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
