import { motion } from 'motion/react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import SectionHeading from './SectionHeading';

interface ExperienceProps {
  lang: Language;
}

const Experience = ({ lang }: ExperienceProps) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="experience" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="space-y-12">
          {t.experience.items.map((exp, i) => (
            <motion.div
              key={i + lang}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                <div className="mb-4 md:mb-0">
                  <div className="text-emerald-400 font-mono text-sm mb-1">{exp.period}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">{exp.company}</div>
                </div>
                <div className="glass p-8 rounded-3xl relative">
                  <div className="absolute -left-10 top-8 w-4 h-4 rounded-full bg-emerald-500 border-4 border-zinc-950 hidden md:block" />
                  <h3 className="text-xl font-bold mb-4">{exp.role}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 text-zinc-300 text-xs rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
