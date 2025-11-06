import React, { useState } from 'react';
import { View } from './types.js';
import { DictationWorkspace } from './components/DictationWorkspace.js';
import { FaqPage } from './components/FaqPage.js';
import { ContactPage } from './components/ContactPage.js';
import { HomePage } from './components/HomePage.js';
import { HowItWorksPage } from './components/HowItWorksPage.js';

const Header = ({ setView, currentView }) => {
    const NavLink = ({ view, children }) => {
        const isActive = currentView === view;
        return (
            React.createElement('button',
                {
                    onClick: () => setView(view),
                    className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-500/10'
                    }`
                },
                children
            )
        );
    };

    return (
        React.createElement('header', { className: "bg-white/60 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200/50" },
            React.createElement('nav', { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement('div', { className: "flex items-center justify-between h-20" },
                    React.createElement('div', { className: "flex items-center" },
                         React.createElement('button', { onClick: () => setView(View.HOME), className: "flex-shrink-0 flex flex-col items-start" },
                           React.createElement('div', { className: "flex items-center space-x-2" },
                               React.createElement('span', { className: "text-2xl font-bold" },
                                    React.createElement('span', { className: "text-primary" }, "Dicta"),
                                    React.createElement('span', { className: "text-secondary" }, "Med")
                               )
                            ),
                            React.createElement('span', { className: "text-xs text-slate-500 -mt-1" }, "Où la voix rencontre les chiffres")
                        )
                    ),
                    React.createElement('div', { className: "hidden md:block" },
                        React.createElement('div', { className: "ml-10 flex items-baseline space-x-4" },
                            // Fix: Pass children inside the props object to satisfy TypeScript's type inference.
                            React.createElement(NavLink, { view: View.NORMAL_MODE, children: "Mode Normal" }),
                            // Fix: Pass children inside the props object to satisfy TypeScript's type inference.
                            React.createElement(NavLink, { view: View.TEST_MODE, children: "Mode Test" }),
                            // Fix: Pass children inside the props object to satisfy TypeScript's type inference.
                            React.createElement(NavLink, { view: View.HOW_IT_WORKS, children: "Comment ça marche ?" }),
                            // Fix: Pass children inside the props object to satisfy TypeScript's type inference.
                            React.createElement(NavLink, { view: View.FAQ, children: "FAQ" }),
                            // Fix: Pass children inside the props object to satisfy TypeScript's type inference.
                            React.createElement(NavLink, { view: View.CONTACT, children: "Contact" })
                        )
                    )
                )
            )
        )
    );
};

const App = () => {
    const [view, setView] = useState(View.HOME);

    const handleSetView = (newView) => {
        setView(newView);
        window.scrollTo(0, 0);
    };

    const renderView = () => {
        switch (view) {
            case View.HOME:
                return React.createElement(HomePage, { setView: handleSetView });
            case View.NORMAL_MODE:
                return React.createElement(DictationWorkspace, { isTestMode: false });
            case View.TEST_MODE:
                return React.createElement(DictationWorkspace, { isTestMode: true });
            case View.HOW_IT_WORKS:
                return React.createElement(HowItWorksPage, { setView: handleSetView });
            case View.FAQ:
                return React.createElement(FaqPage, null);
            case View.CONTACT:
                return React.createElement(ContactPage, null);
            default:
                return React.createElement(HomePage, { setView: handleSetView });
        }
    };

    return (
        React.createElement('div', { className: "min-h-screen flex flex-col" },
            React.createElement(Header, { setView: handleSetView, currentView: view }),
            React.createElement('main', { className: "flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center" },
                renderView()
            ),
            React.createElement('footer', { className: "bg-white/60 backdrop-blur-md border-t border-slate-200/50" },
                React.createElement('div', { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-slate-500" },
                    `© ${new Date().getFullYear()} DictaMed. Tous droits réservés.`
                )
            )
        )
    );
};

export default App;
