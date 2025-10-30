import React from 'react';

export default function Footer({ language }) {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <p className="text-sm text-white/85">
          {language === 'en'
            ? 'Made with love for Barcelona — Enjoy your trip!'
            : 'Hecho con amor por Barcelona — ¡Disfruta tu viaje!'}
        </p>
      </div>
    </footer>
  );
}
