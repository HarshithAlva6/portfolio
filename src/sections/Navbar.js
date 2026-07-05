import React, { useState } from 'react';
import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faComputer, faFile, faHomeUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import TextRotator from '../components/TextRotator';
import tar from '../assets/images/tar.webp';

const links = [
    { href: '#home', label: 'Home', icon: faHomeUser },
    { href: '#projects', label: 'Experience', icon: faComputer },
    { href: '#carousel', label: 'Certified', icon: faAddressCard },
    { href: '#back', label: 'Resume', icon: faFile },
];

const Navi = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <a href="https://main--harshalva.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src={tar} alt="Visit the first version of my portfolio" title="Go to V1?" className="fixed top-0 left-0 w-20 h-20 z-50" />
            </a>

            {/* Mobile menu toggle - only shown below the md breakpoint */}
            <button
                type="button"
                className="md:hidden fixed top-3 right-3 z-50 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800/80 backdrop-blur text-silver ring-1 ring-white/20 shadow-lg"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
            >
                <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} size="lg" />
            </button>

            {/* Mobile slide-down menu */}
            {mobileOpen && (
                <nav
                    className="md:hidden fixed top-16 right-3 left-3 z-40 rounded-xl bg-slate-900/95 backdrop-blur ring-1 ring-white/15 shadow-2xl p-4 space-y-1 animate-modal-fade-in"
                    aria-label="Primary"
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            className="nav-link flex items-center space-x-3 rounded-lg"
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="w-6 flex justify-center">
                                <FontAwesomeIcon icon={link.icon} size="lg" className="text-silver" />
                            </span>
                            <span className="text-lg text-white font-bold">{link.label}</span>
                        </a>
                    ))}
                </nav>
            )}

            {/* Desktop sidebar nav */}
            <TextRotator />
            <h2 className="my-heading2">Welcome to my Space &#128513;</h2>
            <nav className="navbar" aria-label="Primary">
                <div className="navbar-nav space-y-4">
                    {links.map((link) => (
                        <a key={link.href} className="nav-link" href={link.href}>
                            <div className="flex items-center space-x-3">
                                <span className="w-6 flex justify-center">
                                    <FontAwesomeIcon icon={link.icon} size="lg" className="text-silver" />
                                </span>
                                <span className="text-lg text-white font-bold">{link.label}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navi;
