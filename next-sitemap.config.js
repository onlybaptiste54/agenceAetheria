module.exports = {
  siteUrl: 'https://www.agenceaetheria.com',
  generateRobotsTxt: true,
  // Ensure legal pages are present even if auto-discovery misses them
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/privacy'),
      await config.transform(config, '/utilisation'),
    ];
  },
};