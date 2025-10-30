import React from 'react';
import ItemCard from './ItemCard';

export default function Section({ id, title, subtitle, items, backgroundImage, language }) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-sm">
            {typeof title === 'string' ? title : (language === 'en' ? title.en : title.es)}
          </h2>
          {subtitle && (
            <p className="mt-2 text-white/85 max-w-2xl">
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
