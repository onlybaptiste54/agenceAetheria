module.exports = {
  siteUrl: 'https://www.agenceaetheria.com',
  generateRobotsTxt: true,
  // Ensure key pages are present even if auto-discovery misses them
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/privacy'),
      await config.transform(config, '/utilisation'),
      await config.transform(config, '/agence-ia-nancy'),
      await config.transform(config, '/agents-ia-pme'),
      await config.transform(config, '/secteurs'),
    ];
  },
};