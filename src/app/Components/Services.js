'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Automatisation',
    description:
      'Automatisez vos tâches répétitives (emails, rappels clients...) avec n8n ou des scripts Python.',
    icon: '/e-mail.png',
    color: 'border-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Agents IA',
    description:
      'Des bots intelligents pour répondre, prendre des RDV ou prospecter sur WhatsApp, LinkedIn, Google Calendar.',
    icon: '/chatbot.png',
    color: 'border-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Intégrations',
    description:
      'Connexion fluide à vos outils métier : CRM, ERP, APIs, plateformes no-code.',
    icon: '/integration.png',
    color: 'border-green-500',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Newsletter',
    description:
      'Envoi automatisé de contenus IA-ready, connectés à vos données métier.',
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
  id="services"
  ref={ref}
  className="relative min-h-[1200px] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-20 text-gray-900"
>

      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Nos Services
      </motion.h1>

      {/* Desktop Circular Layout */}
      <div className="relative w-full max-w-5xl hidden lg:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center z-10">
          <img src="/chatbot.png" alt="Core Icon" className="w-12 h-12" />
        </div>

        {services.map((service, index) => {
          const total = services.length;
          const angle = (360 / total) * index;
          const radius = 340; // Increased radius for better spacing
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="absolute w-56" // Slightly reduced width
              style={{
                top: `calc(50% + ${y}px - 70px)`, // Adjusted positioning
                left: `calc(50% + ${x}px - 112px)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div
                className={`relative ${service.bgColor} ${service.color} border-l-6 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={service.icon} alt={service.title} className="w-6 h-6" />
                  <h3 className="text-base font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Tablet Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl lg:hidden"> {/* Increased gap */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative ${service.bgColor} ${service.color} border-l-6 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <img src={service.icon} alt={service.title} className="w-6 h-6" />
              <h3 className="text-base font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-20" // Increased margin-top for better spacing
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="#contact"
          className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:bg-gradient-to-l transition-all duration-300 text-base" // Reduced padding and font size
        >
          Découvrir Nos Solutions
        </a>
      </motion.div>
    </section>
  );
}