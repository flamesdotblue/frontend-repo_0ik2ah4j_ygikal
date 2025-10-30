import React from 'react';

export default function Footer({ language }) {
  return (
    <footer className="relative bg-neutral-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <p className="text-sm">
          {language === 'en'
            ? 'Made with love for Barcelona — Enjoy your trip!'
            : 'Hecho con amor por Barcelona — ¡Disfruta tu viaje!'}
        </p>
      </div>
    </footer>
  );
}
