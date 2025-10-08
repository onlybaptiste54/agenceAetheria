export default function Audit() {
  return (
    <section
      id="audit-gratuit"
      className="py-20 px-4 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Audit gratuit de vos processus métier
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-80">
          En 30 minutes, nous identifions vos points de friction et vous proposons une stratégie d&apos;automatisation sur mesure.
        </p>

        {/* Bénéfices simplifiés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[var(--form-bg)] p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="font-bold mb-2 text-cyan-700">Analyse complète</h3>
            <p className="text-sm opacity-80">Vos processus actuels décortiqués</p>
          </div>
          <div className="bg-[var(--form-bg)] p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="font-bold mb-2 text-cyan-700">Gains identifiés</h3>
            <p className="text-sm opacity-80">Estimation temps économisé</p>
          </div>
          <div className="bg-[var(--form-bg)] p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="font-bold mb-2 text-cyan-700">Roadmap claire</h3>
            <p className="text-sm opacity-80">Plan d&apos;action personnalisé</p>
          </div>
        </div>

        {/* CTA simple */}
        <div className="space-y-6">
          <p className="text-lg opacity-80">
            Gratuit • Sans engagement • Résultats concrets
          </p>
          <a 
            href="https://calendly.com/agenceaetheria/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
          >
            Réserver mon audit gratuit (30min)
          </a>
        </div>
      </div>
    </section>
  );
}