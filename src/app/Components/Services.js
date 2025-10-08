'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Assistant IA métier pour avocats et consultants',
    description:
      "Un assistant qui comprend votre secteur : emails intelligents, conseils personnalisés, automatisation contextuelle. Optimise vos processus métier avec l'IA.",
    icon: '/chatbot.png',
    color: 'border-purple-500',
    bgColor: 'bg-purple-50',
    secteur: "Tous secteurs"
  },
  {
    title: 'Dashboard centralisé et CRM intelligent',
    description:
      "Vue d&apos;ensemble de votre activité : leads, ventes, tâches. Tout en un endroit, mis à jour automatiquement avec analyse IA.",
    icon: '/VisualDataHome.svg',
    color: 'border-cyan-500',
    bgColor: 'bg-cyan-50',
    secteur: "Consultants, avocats"
  },
  {
    title: 'Automatisation WhatsApp et email marketing',
    description:
      "WhatsApp + Email + Relances : vos clients reçoivent des réponses instantanées, même la nuit. Bot intelligent 24/7.",
    icon: '/e-mail.png',
    color: 'border-blue-500',
    bgColor: 'bg-blue-50',
    secteur: "E-commerce, services"
  },
  {
    title: 'CRM intelligent avec prédictions IA',
    description:
      "Vos données analysées en temps réel : prix optimaux, prédictions, alertes personnalisées. Optimisation automatique des ventes.",
    icon: '/integration.png',
    color: 'border-green-500',
    bgColor: 'bg-green-50',
    secteur: "Distribution, retail"
  },
  {
    title: 'Gestion RDV automatique pour cabinets',
    description:
      "Planification intelligente, rappels automatiques, synchronisation multi-outils. Fini les créneaux perdus et les rendez-vous oubliés.",
    icon: '/automation.png',
    color: 'border-yellow-500',
    bgColor: 'bg-yellow-50',
    secteur: "Avocats, consultants"
  },
];


export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="Services"
      ref={ref}
      className="relative py-20 px-4 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      {/* Titre */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Solutions d&apos;Automatisation IA pour Professionnels
      </motion.h2>
      
      <motion.p 
        className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Des outils IA sur mesure qui s&apos;adaptent à votre métier. Assistant IA métier, CRM intelligent, 
        automatisation WhatsApp. <strong>Gagnez 5h/semaine</strong> sur vos tâches répétitives.
      </motion.p>

      {/* Image de l’agent IA */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <img src="/chatbot.png" alt="Agent IA" className="w-20 h-20 animate-floating" />
      </motion.div>

      {/* Cards alignées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16 z-10 relative">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative ${service.bgColor} ${service.color} border-l-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <img src={service.icon} alt={service.title} className="w-5 h-5" />
              <h3 className="custom-badge text-sm font-semibold text-theme">{service.title}</h3>
            </div>
            <div className="mb-2">
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {service.secteur}
              </span>
            </div>
            <span className="custom-badge text-sm leading-snug">{service.description.replace(/'/g, '&apos;')}</span>

          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="https://calendly.com/agenceaetheria/30min"
          className="inline-block px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 text-base button"
        >
       
          <span>Prendre rendez-vous</span>
        </a>
      </motion.div>
    </section>
  );
}
