import React, { useState } from 'react';

export default function ItemCard({ title, description, region, image, language }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="block w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
      >
        <div className="relative aspect-[4/3] w-full">
          <img
            src={image}
            alt={typeof title === 'string' ? title : (language === 'en' ? title.en : title.es)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-sm">
                {typeof title === 'string' ? title : (language === 'en' ? title.en : title.es)}
              </h3>
              <p className="text-white/80 text-xs md:text-sm">
                {language === 'en' ? 'Region' : 'Región'}: {typeof region === 'string' ? region : (language === 'en' ? region.en : region.es)}
              </p>
            </div>
            <span className="ml-3 shrink-0 rounded-full bg-white/10 border border-white/30 px-3 py-1 text-xs text-white/90 group-hover:bg-white/20">
              {language === 'en' ? 'Learn more' : 'Ver más'}
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div className="absolute left-3 right-3 -bottom-2 translate-y-full z-10">
          <div className="rounded-xl bg-white/95 backdrop-blur px-4 py-3 shadow-xl border border-black/10">
            <p className="text-sm text-gray-800">
              {typeof description === 'string' ? description : (language === 'en' ? description.en : description.es)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
