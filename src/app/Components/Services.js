import { FaCogs } from 'react-icons/fa';
import Card from './Card';

export default function Services() {
  const services = [
    {
      title: 'Automatisation',
      description: 'Tâches répétitives automatisées avec n8n ou Python.',
      icon: (
        <img
          src="/e-mail.png"
          alt="Icone E-mail"
          className="h-8 w-8"
        />
      ),
    },
    {
      title: 'Agents IA',
      description: 'Bots intelligents pour WhatsApp, LinkedIn, agendas.',
      icon: (
        <img
          src="/chatbot.png"
          alt="Icone Chatbot"
          className="h-8 w-8"
        />
      ),
    },
    {
      title: 'Intégrations',
      description: 'Connexion de vos outils via API ou no-code.',
      icon: (
        <img
          src="/integration.png"
          alt="Icone Intégration"
          className="h-8 w-8"
        />
      ),
    },
    {
      title: 'Newsletter',
      description: 'Recevez nos actus santé numérique et IA chaque mois.',
      icon: (
        <img
          src="/e-mail.png"
          alt="Icone Newsletter"
          className="h-8 w-8"
        />
      ),
      link: '/newsletter',
    },
  ];

  return (
    <>
      <div className="section-divider" />
      <section
        id="services"
        className="min-h-screen flex flex-col items-center justify-center bg-[--background] text-[--foreground] py-4 sm:py-8 md:py-10"
      >
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-8 sm:mb-12">
            Nos services
          </h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) =>
              service.link ? (
                <a href={service.link} key={index} className="block">
                  <Card
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </a>
              ) : (
                <Card
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
