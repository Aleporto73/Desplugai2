import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { AppSection } from '../types';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', value: AppSection.HOME },
    { label: 'O Problema', value: AppSection.PROBLEM },
    { label: 'Solução & Specs', value: AppSection.SOLUTION },
    { label: 'Simulador', value: AppSection.DEMO },
    { label: 'Ecossistema Hussards', value: AppSection.ECOSYSTEM },
  ];

  const handleNav = (section: AppSection) => {
    onNavigate(section);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav(AppSection.HOME)}>
            <div className="bg-blue-900 p-1.5 rounded-lg mr-2">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">DesplugaIA</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNav(item.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.value
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNav(AppSection.CONTACT)}
                className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Contato FNDE
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-slate-200">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.value
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
               onClick={() => handleNav(AppSection.CONTACT)}
               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-900"
            >
              Contato FNDE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};