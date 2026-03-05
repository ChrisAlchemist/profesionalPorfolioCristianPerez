import { motion } from 'motion/react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import Counter from './Counter';

interface StatsProps {
  lang: Language;
}

const Stats = ({ lang }: StatsProps) => {
  const t = TRANSLATIONS[lang];

  const stats = [
    { label: t.stats.experience, value: "7+" },
    { label: t.stats.projects, value: "20+" },
    { label: t.stats.tech, value: "15+" },
    { label: t.stats.clients, value: "10+" }
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i + lang}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
              <Counter value={stat.value} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
