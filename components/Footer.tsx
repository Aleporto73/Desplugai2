import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col md:flex-row">
           <p className="text-center text-base text-slate-400">
            &copy; {new Date().getFullYear()} Hussards Labs. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-slate-500">Termos</a>
              <a href="#" className="text-slate-400 hover:text-slate-500">Privacidade</a>
              <a href="#" className="text-slate-400 hover:text-slate-500">Contato</a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="text-xs text-slate-400 text-center md:text-left max-w-3xl">
                Este projeto foi desenvolvido em conformidade com a Nota Técnica de Inovação Hussards Labs v2. 
                As especificações de hardware e software (Phi-3) referem-se ao produto físico. 
                A simulação neste site utiliza Google Gemini API.
            </div>
        </div>
      </div>
    </footer>
  );
};