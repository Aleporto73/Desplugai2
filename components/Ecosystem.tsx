import React from 'react';
import { ExternalLink, Heart, BookOpen, Server } from 'lucide-react';
import { EcosystemPartner } from '../types';

export const Ecosystem: React.FC = () => {
  const partners: EcosystemPartner[] = [
    {
      name: "ABA Simples",
      url: "https://abasimples.com.br",
      description: "Inclusão e terapia comportamental para educação especial.",
      icon: Heart
    },
    {
      name: "Kabulei",
      url: "https://kabulei.com.br",
      description: "Banco BNCC e sistema de avaliações digitais adaptativas.",
      icon: BookOpen
    },
    {
      name: "A8 (Em Breve)",
      url: "#",
      description: "Infraestrutura de dados educacionais de próxima geração.",
      icon: Server
    }
  ];

  return (
    <div className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Ecossistema Hussards Labs</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            O DesplugaIA faz parte de uma família de tecnologias sociais focadas em equidade, saúde mental e inovação pública.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                    <partner.icon className="h-6 w-6 text-slate-600 group-hover:text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">{partner.name}</h3>
                </div>
                <a href={partner.url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-slate-900 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
           <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl font-bold">Hussards Labs</h3>
              <p className="text-slate-400 text-sm mt-1">Tecnologia Social em Educação e Saúde Mental</p>
           </div>
           <div className="flex space-x-4">
              <a href="https://hussards.org" className="text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm font-medium transition-colors border border-slate-700">
                 Visitar Institucional
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};