import { motion } from 'motion/react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SKILLS } from '../data/skills';
import SectionHeading from './SectionHeading';

interface SkillsProps {
  lang: Language;
}

const Skills = ({ lang }: SkillsProps) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-emerald-500 rounded-full"
                />
              </div>
              <div className="mt-2 text-right text-xs font-mono text-zinc-500">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
