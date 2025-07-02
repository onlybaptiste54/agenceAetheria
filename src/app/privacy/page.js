import Head from 'next/head';

export default function privacy() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] py-8 px-4">
      <Head>
        <title>Politique de confidentialité - AetherIA</title>
        <meta name="description" content="Politique de confidentialité de l'application AetherIA." />
      </Head>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Politique de confidentialité
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <strong>AetherIA</strong> ("nous", "notre") respecte votre vie privée et s'engage à protéger les données personnelles que nous collectons via notre application d'automatisation basée sur n8n. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre application.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100ქ

System: 100 dark:text-gray-100 mt-4">
          1. Collecte des données
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Notre application utilise des services Google (par exemple, Google Drive, Gmail) pour fournir des fonctionnalités d'automatisation. Nous pouvons collecter :
          <ul className="list-disc pl-6 mb-4">
            <li>Les informations que vous fournissez en vous connectant via Google OAuth (comme votre nom, adresse e-mail et informations de profil).</li>
            <li>Les données nécessaires pour exécuter les automatisations, telles que les fichiers ou e-mails que vous autorisez l'application à accéder via les scopes OAuth.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          2. Utilisation des données
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Les données collectées sont utilisées uniquement pour :
          <ul className="list-disc pl-6 mb-4">
            <li>Fournir les fonctionnalités d'automatisation de l'application (par exemple, gestion de fichiers ou envoi d'e-mails).</li>
            <li>Améliorer les performances de l'application pour nos utilisateurs internes.</li>
          </ul>
          Nous ne partageons pas vos données avec des tiers, sauf si requis par la loi ou avec votre consentement explicite.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          3. Sécurité des données
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou altération. Cependant, aucune transmission de données sur Internet n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          4. Vos droits
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Vous avez le droit de :
          <ul className="list-disc pl-6 mb-4">
            <li>Demander l'accès aux données que nous détenons sur vous.</li>
            <li>Demander la correction ou la suppression de vos données.</li>
            <li>Révoquer l'accès à vos données via les paramètres de votre compte Google.</li>
          </ul>
          Pour exercer ces droits, contactez-nous à <a href="mailto:agenceaetheria@gmail.com" className="text-blue-500 hover:underline">agenceaetheria@gmail.com</a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          5. Modifications de cette politique
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page, avec une date de mise à jour indiquée ci-dessous.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          6. Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Pour toute question concernant cette politique de confidentialité, contactez-nous à : <br />
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