import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import SectionHeading from './SectionHeading';

interface ContactProps {
  lang: Language;
}

const Contact = ({ lang }: ContactProps) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const t = TRANSLATIONS[lang];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormState('sending');

    const formData = new FormData(form);
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      console.error('Formspree endpoint not configured');
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        setFormState('success');
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-emerald-500/[0.02] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-6 sm:p-12 md:p-20 rounded-2xl md:rounded-[40px] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
              <p className="text-zinc-400 mb-12 leading-relaxed">
                {t.contact.description}
              </p>

              <div className="space-y-6">
                <a href="mailto:ISC.CRISTIAN.PEREZ.54@GMAIL.com" className="flex items-center gap-4 group">
                  <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t.contact.email}</div>
                    <div className="font-bold group-hover:text-emerald-400 transition-colors break-all text-sm sm:text-base">ISC.CRISTIAN.PEREZ.54@GMAIL.com</div>
                  </div>
                </a>

                <a href="tel:+12206066830" className="flex items-center gap-4 group">
                  <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t.contact.phone}</div>
                    <div className="font-bold group-hover:text-emerald-400 transition-colors">220-606-6830</div>
                  </div>
                </a>

                <a href="https://wa.me/527861021588?text=Hola%20Cristian%2C%20Vengo%20desde%20*tu%20portafolio%20web*%0A%0A%C2%A1Deseo%20comunicarme%20contigo!%0A%0AMe%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tu%20experiencia%20como%20desarrollador%20de%20software." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t.contact.whatsapp}</div>
                    <div className="font-bold group-hover:text-[#25D366] transition-colors">+52-786-102-1588</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t.contact.location}</div>
                    <div className="font-bold">{lang === 'en' ? 'Ciudad Hidalgo, Michoacán, Mexico' : 'Ciudad Hidalgo, Michoacán, México'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{lang === 'en' ? 'Success!' : '¡Éxito!'}</h3>
                    <p className="text-zinc-400">{t.contact.form.success}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t.contact.form.name}</label>
                        <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder={t.contact.form.placeholderName} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t.contact.form.email}</label>
                        <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder={t.contact.form.placeholderEmail} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t.contact.form.message}</label>
                      <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none" placeholder={t.contact.form.placeholderMessage} />
                    </div>
                    {formState === 'error' && (
                      <p className="text-red-400 text-xs font-mono">
                        {lang === 'en' ? 'Something went wrong. Please try again.' : 'Algo salió mal. Por favor intenta de nuevo.'}
                      </p>
                    )}
                    <button
                      disabled={formState === 'sending'}
                      className="w-full py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState === 'sending' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t.contact.form.sending}
                        </>
                      ) : (
                        t.contact.form.button
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
