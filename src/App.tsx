import { useState } from 'react';
import type { Language } from './types';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Nav lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
