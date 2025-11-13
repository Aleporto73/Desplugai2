import React, { useState } from 'react';
import { generateLessonPlan } from '../services/geminiService';
import { LessonPlanResponse } from '../types';
import { Loader2, FileText, Download, Share2, Wifi, WifiOff } from 'lucide-react';

export const LiveDemo: React.FC = () => {
  const [grade, setGrade] = useState('5º Ano do Ensino Fundamental');
  const [subject, setSubject] = useState('Ciências');
  const [topic, setTopic] = useState('Ciclo da Água');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LessonPlanResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const plan = await generateLessonPlan({ grade, subject, topic });
      setResult(plan);
    } catch (err) {
      setError("Erro ao gerar plano. Verifique a chave de API ou tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">Simulador: DesplugaIA</h2>
          <p className="mt-4 text-lg text-slate-500">
            Experimente a velocidade de criação. 
            <br/>
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full mt-2 inline-block">
              Nota: Este simulador usa internet. O produto real opera offline.
            </span>
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="bg-blue-900 px-6 py-4 flex justify-between items-center">
            <h3 className="text-white font-bold flex items-center">
              <FileText className="mr-2 h-5 w-5" /> Gerador de Plano de Aula BNCC
            </h3>
            <div className="flex items-center space-x-2">
               <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full text-xs text-blue-200">
                  <Wifi className="h-3 w-3 mr-1 opacity-50" /> 
                  <span>Simulação Online</span>
               </div>
               <div className="flex items-center bg-green-600 px-3 py-1 rounded-full text-xs text-white shadow-lg border border-green-500">
                  <WifiOff className="h-3 w-3 mr-1" /> 
                  <span>Modo Real: Offline</span>
               </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ano / Série</label>
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                >
                  <option>1º Ano do Ensino Fundamental</option>
                  <option>5º Ano do Ensino Fundamental</option>
                  <option>9º Ano do Ensino Fundamental</option>
                  <option>3º Ano do Ensino Médio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Disciplina</label>
                <select 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                >
                  <option>Língua Portuguesa</option>
                  <option>Matemática</option>
                  <option>Ciências</option>
                  <option>História</option>
                  <option>Geografia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tema da Aula</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                  placeholder="Ex: Frações, Revolução Francesa..."
                />
              </div>
              <div className="md:col-span-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Processando com IA...
                    </>
                  ) : (
                    'Gerar Plano de Aula (BNCC)'
                  )}
                </button>
              </div>
            </form>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {result && (
              <div className="border border-slate-200 rounded-lg bg-slate-50 p-6 animate-fade-in">
                <div className="flex justify-between items-start mb-4 border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{result.title}</h2>
                    <div className="flex space-x-2 mt-2">
                      {result.bnccCodes.map((code, idx) => (
                         <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                           {code}
                         </span>
                      ))}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-slate-200 text-slate-800">
                        {result.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Imprimir PDF">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Compartilhar">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Objetivo de Aprendizagem</h4>
                    <p className="mt-1 text-slate-600">{result.objective}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Sequência Didática</h4>
                    <div className="space-y-3">
                      {result.activities.map((activity, index) => (
                        <div key={index} className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                          <div className="flex justify-between">
                            <h5 className="font-semibold text-slate-800">{activity.title}</h5>
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">{activity.time}</span>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                   <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Avaliação</h4>
                    <p className="mt-1 text-slate-600 text-sm italic">{result.evaluation}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                  <p className="text-xs text-slate-400">Gerado pelo DesplugaIA. Revise sempre antes de aplicar.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};