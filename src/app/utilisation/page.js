import Head from 'next/head';

export default function Utilisation() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] py-8 px-4">
      <Head>
        <title>Conditions d&apos;utilisation - AetherIA</title>
        <meta name="description" content="Conditions d&apos;utilisation de l&apos;application AetherIA." />
      </Head>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Conditions d&apos;utilisation
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          En utilisant l&apos;application d&apos;automatisation d&apos;<strong>AetherIA</strong> basée sur n8n (&quot;l&apos;Application&quot;), vous acceptez les conditions d&apos;utilisation suivantes. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser l&apos;Application.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">1. Utilisation de l&apos;Application</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
          <li>Utiliser l&apos;Application conformément aux lois applicables.</li>
          <li>Ne pas tenter d&apos;accéder à l&apos;Application de manière non autorisée.</li>
          <li>Ne pas utiliser l&apos;Application pour des activités illégales ou malveillantes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">2. Accès et authentification</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          L&apos;accès à l&apos;Application peut être restreint aux utilisateurs autorisés par AetherIA. Vous êtes responsable de la confidentialité de vos identifiants d&apos;accès et de toute activité effectuée sous votre compte.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">3. Propriété intellectuelle</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Tout contenu ou matériel fourni par l&apos;Application (y compris le code, les designs et les configurations) appartient à AetherIA ou à ses partenaires. Vous n&apos;êtes pas autorisé à copier, modifier ou distribuer ce contenu sans autorisation écrite.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">4. Limitation de responsabilité</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          L&apos;Application est fournie &quot;telle quelle&quot;. AetherIA ne garantit pas que l&apos;Application sera exempte d&apos;erreurs ou disponible en permanence. Nous ne sommes pas responsables des dommages indirects ou consécutifs découlant de l&apos;utilisation de l&apos;Application.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">5. Modifications des conditions</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Nous pouvons modifier ces conditions d&apos;utilisation à tout moment. Les modifications seront publiées sur cette page, avec une date de mise à jour indiquée ci-dessous.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">6. Contact</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Pour toute question concernant ces conditions d&apos;utilisation, contactez-nous à : <br />
          AetherIA <br />
          <a href="mailto:agenceaetheria@gmail.com" className="text-blue-500 hover:underline">agenceaetheria@gmail.com</a>
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <em>Dernière mise à jour : 2 juillet 2025</em>
        </p>
      </main>
    </div>
  );
}
