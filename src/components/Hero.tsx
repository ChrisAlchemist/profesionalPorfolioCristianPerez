import { motion } from 'motion/react';
import { Linkedin, Github, Youtube, ChevronRight, Cpu, Database } from 'lucide-react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import TikTokIcon from './TikTokIcon';

interface HeroProps {
  lang: Language;
}

const Hero = ({ lang }: HeroProps) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        </div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            key={lang}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-widest uppercase rounded-full border border-emerald-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.hero.badge}
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] lg:-ml-1">
              {lang === 'en' ? (
                <>Crafting <br /><span className="text-gradient">Digital Solutions</span> <br />with Precision.</>
              ) : (
                <>Creando <br /><span className="text-gradient">Soluciones Digitales</span> <br />con Precisión.</>
              )}
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
              {lang === 'en' ? (
                <>I'm <span className="text-zinc-100 font-semibold">Cristian Perez</span>, a Computer Systems Engineer currently specialized in Software Development with 7+ years of experience in technologies such as .NET, SQL, Android, JavaScript, etc.</>
              ) : (
                <>Soy <span className="text-zinc-100 font-semibold">Cristian Perez</span>, Ingeniero en Sistemas Computacionales actualmente especializado en desarrollo de Software con más de 7 años de experiencia especializado en tecnologías como .NET, SQL, Android, JavaScript, etc. </>
              )}
            </p>

            <div className="flex flex-wrap gap-6 items-center mb-8">
              <a
                href="#contact"
                className="group px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-2xl hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-emerald-500/20"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/cristian-perez-garcia-387781170/" target="_blank" className="p-4 glass rounded-2xl hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/chrisalchemist" target="_blank" className="p-4 glass rounded-2xl hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@ChrisAlchemist54" target="_blank" className="p-4 glass rounded-2xl hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@iscchrisdev" target="_blank" className="p-4 glass rounded-2xl hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                  <TikTokIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual Content / Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] aspect-square">
              {/* Decorative Frames */}
              <div className="absolute -inset-4 border border-emerald-500/10 rounded-full -z-10 lg:translate-x-4 translate-y-4" />
              <div className="absolute -inset-4 border border-white/5 rounded-full -z-20 lg:translate-x-8 translate-y-8" />

              {/* Main Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden glass p-2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <img
                    src="https://github.com/ChrisAlchemist/profesionalPorfolioCristianPerez/blob/master/src/assets/img/profile.jpeg?raw=true"
                    alt="Cristian Perez"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full" />

                  {/* Floating Tech Badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 -left-4 glass p-3 rounded-2xl shadow-2xl z-10"
                  >
                    <Cpu className="w-5 h-5 text-emerald-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-16 -right-4 glass p-3 rounded-2xl shadow-2xl z-10"
                  >
                    <Database className="w-5 h-5 text-cyan-400" />
                  </motion.div>

                  <div className="absolute bottom-1 left-4 right-4 z-10">
                    <div className="glass p-3 rounded-xl backdrop-blur-xl border-white/10 text-center">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-0.5">Software Engineer</div>
                      <div className="text-xs font-bold text-white">Cristian Perez Garcia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-20 bg-emerald-500/5 blur-[100px] -z-30 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
