import { Linkedin, Github, Youtube, Mail } from 'lucide-react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import TikTokIcon from './TikTokIcon';

interface FooterProps {
  lang: Language;
}

const Footer = ({ lang }: FooterProps) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Cristian Perez Garcia. {t.footer.rights}
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/cristian-perez-garcia-387781170/" target="_blank" className="text-zinc-500 hover:text-emerald-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/chrisalchemist" target="_blank" className="text-zinc-500 hover:text-emerald-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@ChrisAlchemist54" target="_blank" className="text-zinc-500 hover:text-emerald-400 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@iscchrisdev" target="_blank" className="text-zinc-500 hover:text-emerald-400 transition-colors">
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a href="mailto:ISC.CRISTIAN.PEREZ.54@GMAIL.com" className="text-zinc-500 hover:text-emerald-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
