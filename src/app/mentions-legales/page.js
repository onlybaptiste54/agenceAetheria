export const metadata = {
  title: 'Mentions legales - AetherIA',
  description: 'Mentions legales du site AetherIA.',
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Mentions legales</h1>
          <p className="text-foreground/70">Derniere mise a jour: 12 fevrier 2026</p>
        </header>

        <section className="space-y-3 text-foreground/80">
          <h2 className="text-xl font-semibold">Editeur du site</h2>
          <p>
            AetherIA
            <br />
            Email: <a className="text-cyan-400 hover:text-cyan-300" href="mailto:contact@agenceaetheria.com">contact@agenceaetheria.com</a>
          </p>
          <p>
            Informations legales (a completer):
            <br />
            Forme juridique: [a completer]
            <br />
            Capital social: [a completer]
            <br />
            SIREN/SIRET: [a completer]
            <br />
            Adresse du siege: [a completer]
            <br />
            Numero de TVA intracommunautaire: [a completer]
          </p>
        </section>

        <section className="space-y-3 text-foreground/80">
          <h2 className="text-xl font-semibold">Directeur de la publication</h2>
          <p>[a completer]</p>
        </section>

        <section className="space-y-3 text-foreground/80">
          <h2 className="text-xl font-semibold">Hebergement</h2>
          <p>
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, USA
            <br />
            Site: <a className="text-cyan-400 hover:text-cyan-300" href="https://vercel.com" target="_blank" rel="noreferrer">https://vercel.com</a>
          </p>
        </section>

        <section className="space-y-3 text-foreground/80">
          <h2 className="text-xl font-semibold">Propriete intellectuelle</h2>
          <p>
            Tous les contenus du site AetherIA (textes, visuels, logos, charte graphique) sont proteges.
            Toute reproduction ou exploitation sans autorisation prealable est interdite.
          </p>
        </section>

        <section className="space-y-3 text-foreground/80">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            Pour toute demande: <a className="text-cyan-400 hover:text-cyan-300" href="mailto:contact@agenceaetheria.com">contact@agenceaetheria.com</a>
          </p>
        </section>
      </div>
    </main>
  )
}
