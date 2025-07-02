import Head from 'next/head';

export default function utilisation() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] py-8 px-4">
      <Head>
        <title>Conditions d'utilisation - AetherIA</title>
        <meta name="description" content="Conditions d'utilisation de l'application AetherIA." />
      </Head>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Conditions d'utilisation
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          En utilisant l'application d'automatisation d'<strong>AetherIA</strong> basée sur n8n ("l'Application"), vous acceptez les conditions d'utilisation suivantes. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'Application.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          1. Utilisation de l'Application
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          L'Application est conçue pour fournir des services d'automatisation internes, utilisant des intégrations avec des services Google (par exemple, Google Drive, Gmail). Vous vous engagez à :
          <ul className="list-disc pl-6 mb-4">
            <li>Utiliser l'Application conformément aux lois applicables.</li>
            <li>Ne pas tenter d'accéder à l'Application de manière non autorisée.</li>
            <li>Ne pas utiliser l'Application pour des activités illégales ou malveillantes.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          2. Accès et authentification
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          L'accès à l'Application peut être restreint aux utilisateurs autorisés par AetherIA. Vous êtes responsable de la confidentialité de vos identifiants d'accès et de toute activité effectuée sous votre compte.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          3. Propriété intellectuelle
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Tout contenu ou matériel fourni par l'Application (y compris le code, les designs et les configurations) appartient à AetherIA ou à ses partenaires. Vous n'êtes pas autorisé à copier, modifier ou distribuer ce contenu sans autorisation écrite.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          4. Limitation de responsabilité
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          L'Application est fournie "telle quelle". AetherIA ne garantit pas que l'Application sera exempte d'erreurs ou disponible en permanence. Nous ne sommes pas responsables des dommages indirects ou consécutifs découlant de l'utilisation de l'Application.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          5. Modifications des conditions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Nous pouvons modifier ces conditions d'utilisation à tout moment. Les modifications seront publiées sur cette page, avec une date de mise à jour indiquée ci-dessous.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          6. Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Pour toute question concernant ces conditions d'utilisation, contactez-nous à : <br />
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