import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SolutionSpecs: React.FC = () => {
  return (
    <div id="specs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Especificação Técnica & Custo
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-500">
              Uma solução completa de hardware e software projetada para durabilidade e autonomia. Custo total 40% abaixo do teto PDDE.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-lg leading-6 font-medium text-slate-900">Hardware Robusto</p>
                  <p className="mt-2 text-base text-slate-500">
                    Mini-PC 4 núcleos AVX2, 8GB RAM, SSD 256GB. Baixo consumo (≤ 20W), ideal para regiões com energia instável.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-lg leading-6 font-medium text-slate-900">Motor de IA Local</p>
                  <p className="mt-2 text-base text-slate-500">
                    Linux Lite + Ollama + Modelo Phi-3. Gera conteúdo pedagógico de alta qualidade sem enviar 1 byte de dados para a nuvem.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-lg leading-6 font-medium text-slate-900">Suporte & Garantia</p>
                  <p className="mt-2 text-base text-slate-500">
                    Logística reversa, garantia de 12 meses e suporte pedagógico via WhatsApp/Meet inclusos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-green-100 text-green-800">
                    Preço Final PDDE
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold text-slate-900">
                  <span className="ml-1 text-2xl font-medium text-slate-500 self-start">R$</span>
                  2.650
                </div>
                <div className="mt-4 text-center text-sm text-slate-500">
                  Por unidade completa (Hardware + Software)
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-slate-100 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                   <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                    </div>
                    <p className="ml-3 text-base text-slate-700">
                      <span className="font-bold">Abaixo do teto PDDE:</span> R$ 4.400
                    </p>
                  </li>
                   <li className="flex items-start">
                    <div className="flex-shrink-0">
                       <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                    </div>
                    <p className="ml-3 text-base text-slate-700">
                      <span className="font-bold">Custo Unitário Hardware:</span> R$ 1.319
                    </p>
                  </li>
                   <li className="flex items-start">
                    <div className="flex-shrink-0">
                       <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                    </div>
                    <p className="ml-3 text-base text-slate-700">
                      <span className="font-bold">Licença de Software:</span> R$ 0,00 (Open Source)
                    </p>
                  </li>
                </ul>
                <div className="mt-6 rounded-md shadow">
                  <button className="block w-full text-center px-5 py-3 rounded-md border border-transparent text-base font-medium text-white bg-slate-900 cursor-not-allowed opacity-80">
                    Solicitar Orçamento Oficial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};