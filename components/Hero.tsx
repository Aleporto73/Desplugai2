import React from 'react';
import { WifiOff, ShieldCheck, Zap } from 'lucide-react';
import { AppSection } from '../types';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-4">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Nota Técnica v2.0 - Hussards Labs
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Inteligência que chega</span>{' '}
                <span className="block gradient-text">onde o sinal não chega.</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A primeira plataforma de Inteligência Pedagógica Off-Line do Brasil. 
                Gere planos de aula BNCC em segundos, sem internet, sem custos de licença e 100% LGPD-Zero.
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                <div className="rounded-md shadow">
                  <button
                    onClick={onCtaClick}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg transition-all"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Testar Simulador
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#specs"
                    className="w-full flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-md text-blue-900 bg-white hover:bg-slate-50 md:py-4 md:text-lg transition-all"
                  >
                    Ver Especificações
                  </a>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center">
                  <WifiOff className="h-5 w-5 text-slate-400 mr-2" />
                  <span className="text-sm text-slate-600 font-medium">100% Off-line</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-slate-400 mr-2" />
                  <span className="text-sm text-slate-600 font-medium">LGPD-Zero</span>
                </div>
                 <div className="flex items-center">
                  <span className="h-5 w-5 flex items-center justify-center font-bold text-slate-400 text-xs border border-slate-300 rounded mr-2">BR</span>
                  <span className="text-sm text-slate-600 font-medium">Tecnologia Nacional</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-50 flex items-center justify-center">
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
             {/* Abstract representation of the Hardware */}
             <div className="relative w-80 h-60 bg-slate-800 rounded-xl shadow-2xl border-b-4 border-slate-950 transform -rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col overflow-hidden">
                <div className="h-full w-full bg-slate-900 p-6 flex flex-col justify-between relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400"></div>
                    <div className="flex justify-between items-start">
                         <div className="space-y-1">
                             <div className="w-8 h-1 bg-slate-700 rounded"></div>
                             <div className="w-5 h-1 bg-slate-700 rounded"></div>
                         </div>
                         <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-white font-bold text-2xl tracking-wider">DesplugaIA</h3>
                        <p className="text-slate-400 text-xs">Hussards Labs • Build 2.0</p>
                    </div>
                    <div className="flex justify-center space-x-2">
                         <span className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700">Phi-3 Engine</span>
                         <span className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700">No Cloud</span>
                    </div>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm font-semibold text-slate-800">Economia Real</p>
                <p className="text-xs text-slate-500 mt-1">Economia de ~120h/ano por professor em planejamento.</p>
             </div>
        </div>
      </div>
    </div>
  );
};