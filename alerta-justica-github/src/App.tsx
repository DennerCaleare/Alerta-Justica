import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreProblema from './components/SobreProblema';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SobreProblema />
      </main>
      <footer className="bg-blue-900 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Alerta Justiça - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
