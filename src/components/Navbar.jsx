import React from 'react';

export default function Navbar({ language, onToggleLanguage }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="text-white/90 font-semibold tracking-wide text-lg md:text-xl drop-shadow-sm">
          Hola Barcelona
        </div>
        <button
          onClick={onToggleLanguage}
          className="rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-2 text-sm md:text-base text-white hover:bg-white/20 active:scale-95 transition"
          aria-label={language === 'en' ? 'Translate to Spanish' : 'Traducir a Inglés'}
        >
          {language === 'en' ? 'Translate to Spanish' : 'Traducir a Inglés'}
        </button>
      </div>
    </header>
  );
}
