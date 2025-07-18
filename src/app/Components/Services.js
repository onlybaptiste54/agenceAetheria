'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Automatisation',
    description:
      'Automatisez emails, rappels ou tâches récurrentes avec n8n ou Python.',
    icon: '/automation.png',
    color: 'border-blue-500',
    bgColor: 'bg-blue-50 ',
  },
  {
    title: 'Agents IA',
    description:
      'Bots intelligents pour répondre, planifier et prospecter sur WhatsApp, LinkedIn, etc.',
    icon: '/chatbot.png',
    color: 'border-purple-500',
    bgColor: 'bg-purple-50 ',
  },
  {
    title: 'Intégrations',
    description:
      'Connexion à vos outils (CRM, ERP, APIs) pour automatiser vos flux.',
    icon: '/integration.png',
    color: 'border-green-500',
    bgColor: 'bg-green-50 ',
  },
  {
    title: 'Newsletter',
    description:
      'Contenus automatisés et personnalisés, connectés à vos données métier.',
    icon: '/e-mail.png',
    color: 'border-yellow-500',
    bgColor: 'bg-yellow-50',
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
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Nos Services
      </motion.h1>

      {/* Image de l’agent IA */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <img src="/chatbot.png" alt="Agent IA" className="w-20 h-20 animate-floating" />
      </motion.div>

      {/* Flèches SVG */}
     

      {/* Cards alignées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 z-10 relative">
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
  <span className=" custom-badge text-sm font-semibold text-theme">{service.title}</span>
</div>
<span className="custom-badge text-sm leading-snug ">{service.description}</span>

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
