import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Languages, Download } from 'lucide-react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavProps {
  lang: Language;
  toggleLang: () => void;
}

const Nav = ({ lang, toggleLang }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          CP<span className="text-emerald-500">.</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-emerald-400 transition-colors"
            >
              {t.nav[item.toLowerCase() as keyof typeof t.nav]}
            </a>
          ))}

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={toggleLang}
              className="p-2 glass rounded-lg hover:text-emerald-400 transition-colors flex items-center gap-2 text-xs font-mono uppercase"
            >
              <Languages className="w-4 h-4" />
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            <a
              href="https://chrisalchemist.github.io/ISC.CristianPerez.github.io/assets/files/ISC.Cristian%20Perez%20Garcia%20%28English%20CV%29.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full hover:bg-emerald-500 hover:text-zinc-950 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t.nav.cv}
            </a>
          </div>
        </div>

        {/* Mobile Language Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleLang}
            className="p-2 glass rounded-lg hover:text-emerald-400 transition-colors flex items-center gap-2 text-xs font-mono uppercase"
          >
            <Languages className="w-4 h-4" />
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
