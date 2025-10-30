import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState('en');
  const t = (en, es) => (language === 'en' ? en : es);

  // Global, site-wide transparent Barcelona background
  const globalBg = 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1920&auto=format&fit=crop'; // Barcelona skyline

  // Distinct, relevant images for each item
  const foodItems = [
    {
      title: { en: 'Churros', es: 'Churros' },
      description: {
        en: 'Fried dough pastries served with rich chocolate dipping sauce.',
        es: 'Masa frita servida con una rica salsa de chocolate para mojar.',
      },
      region: { en: 'Across Spain', es: 'Por toda España' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Paella', es: 'Paella' },
      description: {
        en: 'Saffron-scented rice with seafood or meat, beloved in Barcelona.',
        es: 'Arroz con aroma de azafrán con mariscos o carne, muy querido en Barcelona.',
      },
      region: { en: 'Valencian origin, popular in Barcelona', es: 'Origen valenciano, popular en Barcelona' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Crema Catalana', es: 'Crema Catalana' },
      description: {
        en: "Catalan crème brûlée, infused with lemon zest and cinnamon.",
        es: 'Versión catalana de la crème brûlée, con ralladura de limón y canela.',
      },
      region: { en: 'Catalonia', es: 'Cataluña' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  const cultureItems = [
    {
      title: { en: 'Castellers', es: 'Castellers' },
      description: {
        en: 'Human towers that showcase teamwork and tradition.',
        es: 'Torres humanas que muestran trabajo en equipo y tradición.',
      },
      region: { en: 'Catalonia', es: 'Cataluña' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Sardana Dance', es: 'Danza de la Sardana' },
      description: {
        en: 'Circle dance symbolizing Catalan unity and culture.',
        es: 'Baile en círculo que simboliza la unidad y la cultura catalana.',
      },
      region: { en: 'Plaça de la Catedral, Gothic Quarter', es: 'Plaça de la Catedral, Barrio Gótico' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Modernisme', es: 'Modernismo' },
      description: {
        en: 'Catalan Art Nouveau movement led by Gaudí and contemporaries.',
        es: 'Movimiento del Art Nouveau catalán liderado por Gaudí y sus contemporáneos.',
      },
      region: { en: 'Eixample', es: 'Eixample' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  const landmarksItems = [
    {
      title: { en: 'Sagrada Família', es: 'Sagrada Família' },
      description: {
        en: 'Gaudí’s unfinished basilica and Barcelona’s most iconic landmark.',
        es: 'La basílica inacabada de Gaudí y el monumento más icónico de Barcelona.',
      },
      region: { en: 'Eixample', es: 'Eixample' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Park Güell', es: 'Parque Güell' },
      description: {
        en: 'Whimsical park with mosaics and sweeping city views.',
        es: 'Parque fantasioso con mosaicos y vistas panorámicas de la ciudad.',
      },
      region: { en: 'Gràcia', es: 'Gràcia' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Casa Batlló', es: 'Casa Batlló' },
      description: {
        en: 'Masterpiece of organic shapes, colors, and light by Gaudí.',
        es: 'Obra maestra de formas orgánicas, colores y luz de Gaudí.',
      },
      region: { en: 'Passeig de Gràcia', es: 'Passeig de Gràcia' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  const festivalItems = [
    {
      title: { en: 'La Mercè', es: 'La Mercè' },
      description: {
        en: 'City-wide festival with parades, fireworks, and concerts.',
        es: 'Fiesta de toda la ciudad con desfiles, fuegos artificiales y conciertos.',
      },
      region: { en: 'Across Barcelona', es: 'Por toda Barcelona' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Sant Jordi', es: 'Sant Jordi' },
      description: {
        en: 'Day of books and roses celebrating love and literature.',
        es: 'Día de libros y rosas que celebra el amor y la literatura.',
      },
      region: { en: 'City Center', es: 'Centro de la ciudad' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Festa Major de Gràcia', es: 'Festa Major de Gràcia' },
      description: {
        en: 'Neighborhood festival with creative street decorations.',
        es: 'Fiesta de barrio con creativas decoraciones callejeras.',
      },
      region: { en: 'Gràcia', es: 'Gràcia' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  const sportsItems = [
    {
      title: { en: 'FC Barcelona', es: 'FC Barcelona' },
      description: {
        en: 'World-famous football club — feel the passion on match day.',
        es: 'Club de fútbol de fama mundial — siente la pasión en día de partido.',
      },
      region: { en: 'Les Corts (Spotify Camp Nou)', es: 'Les Corts (Spotify Camp Nou)' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Mediterranean Sailing', es: 'Vela en el Mediterráneo' },
      description: {
        en: 'Catch the sea breeze along the Barcelona coastline.',
        es: 'Siente la brisa del mar a lo largo de la costa de Barcelona.',
      },
      region: { en: 'Port Olímpic', es: 'Port Olímpic' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: { en: 'Olympic Legacy', es: 'Legado Olímpico' },
      description: {
        en: 'Explore venues from the 1992 Games, still alive with sport.',
        es: 'Explora las sedes de los Juegos del 92, aún vibrantes con deporte.',
      },
      region: { en: 'Montjuïc', es: 'Montjuïc' },
      image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="relative min-h-screen text-white">
      {/* Global background image */}
      <div
        aria-hidden
        className="fixed inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${globalBg})`,
        }}
      />
      {/* Soft readable overlay */}
      <div className="fixed inset-0 bg-black/45" aria-hidden />

      {/* Page content */}
      <div className="relative">
        <Navbar
          language={language}
          onToggleLanguage={() => setLanguage((l) => (l === 'en' ? 'es' : 'en'))}
        />

        {/* Intro Banner without its own background so the global one shows through */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center">
          <div className="relative mx-auto max-w-7xl px-6 pt-10 md:pt-14 w-full">
            <div className="max-w-2xl bg-black/25 rounded-2xl p-6 backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
                {t('Hola Barcelona', 'Hola Barcelona')}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/95">
                {t(
                  'Discover food, culture, landmarks, festivals, and sports in a vibrant Mediterranean city.',
                  'Descubre la gastronomía, cultura, monumentos, festivales y deportes en una vibrante ciudad mediterránea.'
                )}
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#food" className="rounded-full bg-white text-neutral-900 px-4 py-2 text-sm md:text-base font-medium hover:bg-white/90 transition">
                  {t('Start Exploring', 'Comenzar a explorar')}
                </a>
                <a href="#landmarks" className="rounded-full bg-transparent border border-white/40 text-white px-4 py-2 text-sm md:text-base font-medium hover:bg-white/10 transition">
                  {t('Jump to Landmarks', 'Ir a Monumentos')}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="food"
          title={{ en: 'Food', es: 'Gastronomía' }}
          subtitle={{ en: 'Savor Barcelona’s signature flavors.', es: 'Saborea los sabores emblemáticos de Barcelona.' }}
          items={foodItems}
          backgroundImage={null}
          language={language}
        />

        <Section
          id="culture"
          title={{ en: 'Culture', es: 'Cultura' }}
          subtitle={{ en: 'Traditions that shape the Catalan identity.', es: 'Tradiciones que dan forma a la identidad catalana.' }}
          items={cultureItems}
          backgroundImage={null}
          language={language}
        />

        <Section
          id="landmarks"
          title={{ en: 'Landmarks', es: 'Monumentos' }}
          subtitle={{ en: 'Architectural icons and historic sights.', es: 'Iconos arquitectónicos y lugares históricos.' }}
          items={landmarksItems}
          backgroundImage={null}
          language={language}
        />

        <Section
          id="festivals"
          title={{ en: 'Festivals', es: 'Festivales' }}
          subtitle={{ en: 'Be part of Barcelona’s celebrations.', es: 'Sé parte de las celebraciones de Barcelona.' }}
          items={festivalItems}
          backgroundImage={null}
          language={language}
        />

        <Section
          id="sports"
          title={{ en: 'Sports', es: 'Deportes' }}
          subtitle={{ en: 'From football fever to sea adventures.', es: 'Desde la pasión futbolera hasta aventuras en el mar.' }}
          items={sportsItems}
          backgroundImage={null}
          language={language}
        />

        <Footer language={language} />
      </div>
    </div>
  );
}
