export const metadata = {
  title: 'Politique de confidentialite - AetherIA',
  description: 'Politique de confidentialite d AetherIA.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Politique de confidentialite</h1>
          <p className="text-foreground/70">
            Derniere mise a jour: 12 fevrier 2026
          </p>
        </header>

        <section className="space-y-4 text-foreground/85">
          <p>
            AetherIA attache une importance particuliere a la protection des donnees personnelles.
            Cette politique explique quelles donnees nous collectons, pourquoi nous les traitons,
            et quels sont vos droits.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Responsable du traitement</h2>
          <p className="text-foreground/80">
            Responsable: AetherIA
            <br />
            Contact: <a className="text-cyan-400 hover:text-cyan-300" href="mailto:contact@agenceaetheria.com">contact@agenceaetheria.com</a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Donnees collectees</h2>
          <ul className="list-disc pl-6 space-y-1 text-foreground/80">
            <li>Donnees d identification et de contact (nom, email, telephone si fourni).</li>
            <li>Donnees techniques (adresse IP, type de navigateur, journaux techniques).</li>
            <li>Donnees liees aux echanges (messages, demandes de contact, rendez-vous).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Finalites et bases legales</h2>
          <ul className="list-disc pl-6 space-y-1 text-foreground/80">
            <li>Repondre a vos demandes et fournir nos services (execution precontractuelle/contractuelle).</li>
            <li>Ameliorer le site et la qualite de service (interet legitime).</li>
            <li>Respecter nos obligations legales (obligation legale).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Duree de conservation</h2>
          <p className="text-foreground/80">
            Les donnees sont conservees pendant la duree necessaire aux finalites visees, puis archivees
            ou supprimees selon les obligations legales applicables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Destinataires des donnees</h2>
          <p className="text-foreground/80">
            Les donnees sont accessibles uniquement aux personnes habilitees chez AetherIA et, si necessaire,
            a des sous-traitants techniques dans le cadre strict de leurs missions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Vos droits</h2>
          <p className="text-foreground/80">
            Vous disposez des droits d acces, rectification, effacement, limitation, opposition et portabilite
            de vos donnees, selon la reglementation applicable.
          </p>
          <p className="text-foreground/80">
            Pour exercer vos droits: <a className="text-cyan-400 hover:text-cyan-300" href="mailto:contact@agenceaetheria.com">contact@agenceaetheria.com</a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Cookies</h2>
          <p className="text-foreground/80">
            Le site peut utiliser des cookies techniques necessaires a son fonctionnement.
            Les cookies de mesure d audience ou marketing, s ils sont actives, font l objet
            d une information specifique.
          </p>
        </section>
      </div>
    </main>
  )
}
