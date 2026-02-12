export const metadata = {
  title: 'Conditions d utilisation - AetherIA',
  description: 'Conditions generales d utilisation du site AetherIA.',
}

export default function UtilisationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Conditions d utilisation</h1>
          <p className="text-foreground/70">Derniere mise a jour: 12 fevrier 2026</p>
        </header>

        <section className="space-y-4 text-foreground/85">
          <p>
            Les presentes conditions regissent l acces et l usage du site et des services AetherIA.
            En utilisant le site, vous acceptez ces conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Objet</h2>
          <p className="text-foreground/80">
            AetherIA propose des services d automatisation et d accompagnement digital.
            Les informations presentes sur le site sont fournies a titre informatif.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Acces au site</h2>
          <p className="text-foreground/80">
            Le site est accessible 24h/24 et 7j/7, sauf interruption pour maintenance, incident
            technique ou force majeure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Obligations de l utilisateur</h2>
          <ul className="list-disc pl-6 space-y-1 text-foreground/80">
            <li>Utiliser le site conformement aux lois et reglementations en vigueur.</li>
            <li>Ne pas porter atteinte au bon fonctionnement du site.</li>
            <li>Ne pas extraire ou reutiliser les contenus sans autorisation.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Propriete intellectuelle</h2>
          <p className="text-foreground/80">
            Les textes, elements graphiques, marques, logos et contenus du site sont proteges.
            Toute reproduction, distribution ou exploitation non autorisee est interdite.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Limitation de responsabilite</h2>
          <p className="text-foreground/80">
            AetherIA ne peut etre tenue responsable des dommages indirects, pertes de donnees,
            pertes d exploitation ou interruptions de service lies a l usage du site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Liens externes</h2>
          <p className="text-foreground/80">
            Le site peut contenir des liens vers des sites tiers. AetherIA ne controle pas ces
            contenus et decline toute responsabilite quant a leur disponibilite ou leur contenu.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Modification des conditions</h2>
          <p className="text-foreground/80">
            AetherIA peut modifier les presentes conditions a tout moment. La version en ligne fait foi.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Contact</h2>
          <p className="text-foreground/80">
            Pour toute question: <a className="text-cyan-400 hover:text-cyan-300" href="mailto:agenceaetheria@gmail.com">agenceaetheria@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  )
}
