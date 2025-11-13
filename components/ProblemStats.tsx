import React from 'react';
import { AlertTriangle, Clock, Router, Ban } from 'lucide-react';

export const ProblemStats: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">O Cenário</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A Lacuna Pedagógica
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            A falta de conectividade não pode impedir a inovação em sala de aula. Os dados do IBGE e FNDE revelam uma realidade crítica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Router className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-500 truncate">Norte e Nordeste</dt>
                    <dd>
                      <div className="text-lg font-medium text-slate-900">38%</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-5 py-3">
              <div className="text-sm text-slate-500">
                 Escolas sem banda larga funcional (IBGE 2023)
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Ban className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-500 truncate">Escolas Rurais</dt>
                    <dd>
                      <div className="text-lg font-medium text-slate-900">54%</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-5 py-3">
              <div className="text-sm text-slate-500">
                Licitações de TI canceladas por falta de internet (FNDE 2022)
              </div>
            </div>
          </div>

           {/* Stat 3 */}
           <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-500 truncate">Tempo Perdido</dt>
                    <dd>
                      <div className="text-lg font-medium text-slate-900">~3 horas</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-5 py-3">
              <div className="text-sm text-slate-500">
                Perdidas semanalmente tentando acessar plataformas online
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-500 truncate">Consequência</dt>
                    <dd>
                      <div className="text-lg font-medium text-slate-900">Exclusão Digital</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-5 py-3">
              <div className="text-sm text-slate-500">
                Professores sem acesso a ferramentas modernas de IA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};