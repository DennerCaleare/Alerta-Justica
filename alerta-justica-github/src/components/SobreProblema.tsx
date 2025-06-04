import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import perfilResgatados from '../assets/images/infograficos/perfil-resgatados.png';
import verbaCombate from '../assets/images/infograficos/verba-combate.png';
import historicoResgates from '../assets/images/infograficos/historico-resgates.jpeg';

const SobreProblema: React.FC = () => {
  return (
    <section id="problema" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">O Problema do Trabalho Análogo à Escravidão</h2>
        
        <Tabs defaultValue="legislacao" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="legislacao">Legislação Brasileira</TabsTrigger>
            <TabsTrigger value="dados">Dados Alarmantes</TabsTrigger>
            <TabsTrigger value="ods">Relação com ODS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="legislacao" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">O que é trabalho análogo à escravidão?</h3>
            <p className="text-gray-700 mb-4">
              De acordo com a legislação brasileira, especificamente o artigo 149 do Código Penal (alterado pela Lei nº 10.803/2003), 
              configura-se como crime de redução à condição análoga à de escravo: "Reduzir alguém a condição análoga à de escravo, 
              quer submetendo-o a trabalhos forçados ou a jornada exaustiva, quer sujeitando-o a condições degradantes de trabalho, 
              quer restringindo, por qualquer meio, sua locomoção em razão de dívida contraída com o empregador ou preposto".
            </p>
            <p className="text-gray-700 mb-4">
              A pena prevista é de reclusão de dois a oito anos, e multa, além da pena correspondente à violência. 
              O mesmo artigo também estabelece que incorrem nas mesmas penas quem cerceia o uso de qualquer meio de transporte 
              por parte do trabalhador, com o fim de retê-lo no local de trabalho; ou mantém vigilância ostensiva no local de 
              trabalho ou se apodera de documentos ou objetos pessoais do trabalhador, com o fim de retê-lo no local de trabalho.
            </p>
            <p className="text-gray-700">
              A lei ainda prevê aumento de pena quando o crime é cometido contra criança ou adolescente, ou por motivo de 
              preconceito de raça, cor, etnia, religião ou origem. Esta definição legal é fundamental para o combate a 
              esta grave violação de direitos humanos no Brasil.
            </p>
          </TabsContent>
          
          <TabsContent value="dados" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">A realidade do trabalho escravo no Brasil</h3>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Segundo dados oficiais do Ministério do Trabalho e Emprego (MTE), em 2024, foram realizadas 1.035 ações fiscais 
                  específicas de combate ao trabalho análogo à escravidão, resultando no resgate de 2.004 trabalhadores e trabalhadoras 
                  submetidos a condições degradantes de trabalho. Essas operações asseguraram o pagamento de mais de R$ 7 milhões em 
                  verbas trabalhistas e rescisórias às vítimas.
                </p>
                <p className="text-gray-700 mb-4">
                  Desde 1995, quando o Brasil reconheceu oficialmente a existência de formas contemporâneas de escravidão, 
                  a Inspeção do Trabalho resgatou 65.598 trabalhadores em 8.483 ações fiscais. Entre 2003 e 2024, mais de 
                  R$ 155 milhões em verbas trabalhistas e rescisórias foram pagos às vítimas.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={verbaCombate} 
                  alt="Infográfico: Verba para o combate ao trabalho escravo" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">Fonte: Ministério da Economia/G1</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Os estados com maior número de trabalhadores resgatados em 2024 foram Minas Gerais (500), São Paulo (467), 
                  Bahia (198), Goiás (155) e Pernambuco (137). As áreas econômicas com maior incidência incluem construção de 
                  edifícios, cultivo de café, cultivo de cebola, serviço de preparação de terreno e horticultura.
                </p>
                <p className="text-gray-700">
                  Um dado alarmante é o crescimento significativo no número de trabalhadores resgatados em áreas urbanas, 
                  que representaram 30% do total de trabalhadores em condições análogas à escravidão identificados em 2024, 
                  demonstrando que o problema não está restrito apenas às áreas rurais.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={perfilResgatados} 
                  alt="Infográfico: Perfil dos trabalhadores resgatados da escravidão" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">Fonte: Repórter Brasil</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ods" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Relação com os Objetivos de Desenvolvimento Sustentável da ONU</h3>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-red-700 mb-2">ODS 8: Trabalho Decente e Crescimento Econômico</h4>
                  <p className="text-gray-700 mb-4">
                    O combate ao trabalho análogo à escravidão está diretamente relacionado ao ODS 8 da ONU, que visa "promover o 
                    crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todas e todos".
                  </p>
                  <p className="text-gray-700 mb-4">
                    Especificamente, a meta 8.7 estabelece: "Tomar medidas imediatas e eficazes para erradicar o trabalho forçado, 
                    acabar com a escravidão moderna e o tráfico de pessoas, e assegurar a proibição e eliminação das piores formas 
                    de trabalho infantil, incluindo recrutamento e utilização de crianças-soldado, e até 2025 acabar com o trabalho 
                    infantil em todas as suas formas".
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">ODS 16: Paz, Justiça e Instituições Eficazes</h4>
                  <p className="text-gray-700 mb-4">
                    O ODS 16 busca "promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o 
                    acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis".
                  </p>
                  <p className="text-gray-700">
                    O combate ao trabalho escravo contemporâneo exige instituições fortes e eficazes, acesso à justiça para as vítimas 
                    e mecanismos de denúncia seguros. A erradicação desta prática contribui diretamente para sociedades mais justas e 
                    pacíficas, onde os direitos humanos fundamentais são respeitados e as instituições trabalham para proteger os mais 
                    vulneráveis.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src={historicoResgates} 
                  alt="Histórico dos resgates de trabalhadores em condição análoga à escravidão no Brasil" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">Fonte: Brasil de Fato</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SobreProblema;
