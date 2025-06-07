import { BarFlowDemo } from "./BarFlow";

export default function Audit() {
  return (
    <section
      id="a-propos"
      className="min-h-screen bg-[--color-bg] text-[--color-text] flex items-center justify-center border-t border-black py-16 px-4"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        {/* Image centrée */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src="/VisualDataHome.svg"
            alt="Suivi et audit"
            className="max-w-md w-full h-auto animate-floating mx-auto"
          />
        </div>

        {/* Contenu centré avec plus d'espace */}
        <div className="w-full md:w-3/5 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-700">
            Suivi & Audit
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Nous vous accompagnons à chaque étape du processus pour assurer un suivi optimal et une mise en place efficace de votre automatisation.
          </p>
          <ul className="space-y-4 text-gray-800 text-base max-w-xl">
            <li className="flex items-center justify-center gap-3">
              <span className="text-cyan-700 text-xl">•</span>
              Analyse des besoins spécifiques
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-cyan-700 text-xl">•</span>
              Définition des processus automatisables
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-cyan-700 text-xl">•</span>
              Mise en place technique (No-Code / Low-Code / API)
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-cyan-700 text-xl">•</span>
              Phase de test & validation
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-cyan-700 text-xl">•</span>
              Suivi, ajustements & maintenance continue
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}