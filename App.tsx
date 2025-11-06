import React, { useState } from 'react';
import { View } from './types';
import { DictationWorkspace } from './components/DictationWorkspace';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { HomePage } from './components/HomePage';
import { HowItWorksPage } from './components/HowItWorksPage';

const Header: React.FC<{ setView: (view: View) => void; currentView: View }> = ({ setView, currentView }) => {
    const NavLink: React.FC<{ view: View; children: React.ReactNode }> = ({ view, children }) => {
        const isActive = currentView === view;
        return (
            <button
                onClick={() => setView(view)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
            >
                {children}
            </button>
        );
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                         <button onClick={() => setView(View.HOME)} className="flex-shrink-0 flex flex-col items-start">
                           <div className="flex items-center space-x-2">
                               <span className="text-2xl font-bold">
                                    <span className="text-primary">Dicta</span>
                                    <span className="text-secondary">Med</span>
                               </span>
                            </div>
                            <span className="text-xs text-slate-500 -mt-1">Où la voix rencontre les chiffres</span>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink view={View.NORMAL_MODE}>Mode Normal</NavLink>
                            <NavLink view={View.TEST_MODE}>Mode Test</NavLink>
                            <NavLink view={View.HOW_IT_WORKS}>Comment ça marche ?</NavLink>
                            <NavLink view={View.FAQ}>FAQ</NavLink>
                            <NavLink view={View.CONTACT}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const App: React.FC = () => {
    const [view, setView] = useState<View>(View.HOME);

    const handleSetView = (newView: View) => {
        setView(newView);
        window.scrollTo(0, 0);
    };

    const renderView = () => {
        switch (view) {
            case View.HOME:
                return <HomePage setView={handleSetView} />;
            case View.NORMAL_MODE:
                return <DictationWorkspace isTestMode={false} />;
            case View.TEST_MODE:
                return <DictationWorkspace isTestMode={true} />;
            case View.HOW_IT_WORKS:
                return <HowItWorksPage setView={handleSetView} />;
            case View.FAQ:
                return <FaqPage />;
            case View.CONTACT:
                return <ContactPage />;
            default:
                return <HomePage setView={handleSetView} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header setView={handleSetView} currentView={view} />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center">
                {renderView()}
            </main>
            <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} DictaMed. Tous droits réservés.
                </div>
            </footer>
        </div>
    );
};

export default App;