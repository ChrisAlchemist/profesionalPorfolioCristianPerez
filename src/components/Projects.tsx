import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import SectionHeading from './SectionHeading';

interface ProjectsProps {
  lang: Language;
}

const Projects = ({ lang }: ProjectsProps) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const t = TRANSLATIONS[lang];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i + lang}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
              className="group relative glass rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1 block">
                      {project.type} • {project.tech}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              <AnimatePresence>
                {activeProject === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-emerald-500/5 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
