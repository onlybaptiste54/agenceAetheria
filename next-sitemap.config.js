const routeSettings = {
  '/': { changefreq: 'weekly', priority: 1.0 },
  '/agence-ia-nancy': { changefreq: 'weekly', priority: 0.95 },
  '/agents-ia-pme': { changefreq: 'weekly', priority: 0.95 },
  '/secteurs': { changefreq: 'monthly', priority: 0.9 },
  '/blog': { changefreq: 'weekly', priority: 0.8 },
  '/blog/combien-coute-un-agent-ia-pme': { changefreq: 'monthly', priority: 0.75 },
  '/blog/ia-et-rgpd-pme': { changefreq: 'monthly', priority: 0.75 },
  '/mentions-legales': { changefreq: 'yearly', priority: 0.2 },
  '/privacy': { changefreq: 'yearly', priority: 0.2 },
  '/utilisation': { changefreq: 'yearly', priority: 0.2 },
};

const normalizePath = (path) => (path === '/' ? '/' : path.replace(/\/$/, ''));

module.exports = {
  siteUrl: 'https://www.agenceaetheria.com',
  generateRobotsTxt: true,
  outDir: './out',
  exclude: ['/404', '/opengraph-image'],
  transform: async (config, path) => {
    const settings = routeSettings[normalizePath(path)] ?? {
      changefreq: 'monthly',
      priority: 0.5,
    };

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: settings.changefreq,
      priority: settings.priority,
    };
  },
  additionalPaths: async (config) =>
    Promise.all(Object.keys(routeSettings).map((path) => config.transform(config, path))),
};
