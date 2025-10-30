import React from 'react';
import ItemCard from './ItemCard';

export default function Section({ id, title, subtitle, items, backgroundImage, language }) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="inline-block text-2xl md:text-4xl font-bold text-white drop-shadow-sm bg-black/20 rounded-lg px-3 py-1">
            {typeof title === 'string' ? title : (language === 'en' ? title.en : title.es)}
          </h2>
          {subtitle && (
            <p className="mt-3 text-white/90 max-w-2xl">
              {typeof subtitle === 'string' ? subtitle : (language === 'en' ? subtitle.en : subtitle.es)}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <ItemCard key={idx} {...item} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
