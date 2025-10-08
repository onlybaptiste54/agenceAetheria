export default function Head() {
  return (
    <>
      <meta name="facebook-domain-verification" content="myrkk6l9u3fxv275rtimcpjfd14hmd" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agence AetherIA",
            "description": "Agence spécialisée en automatisation IA pour professionnels",
            "url": "https://agenceaetheria.com",
            "logo": "https://agenceaetheria.com/LogoAetheriaaNoBg.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "French"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FR"
            },
            "sameAs": [],
            "offers": {
              "@type": "Offer",
              "name": "Audit gratuit automatisation IA",
              "description": "Audit gratuit de 30 minutes pour identifier les opportunités d'automatisation",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "service": [
              {
                "@type": "Service",
                "name": "Assistant IA métier",
                "description": "Assistant IA qui comprend votre secteur et automatise vos tâches"
              },
              {
                "@type": "Service", 
                "name": "CRM intelligent",
                "description": "CRM avec analyse IA en temps réel et prédictions"
              },
              {
                "@type": "Service",
                "name": "Automatisation WhatsApp",
                "description": "Bot WhatsApp intelligent pour la relation client"
              }
            ]
          })
        }}
      />
    </>
  );
}
