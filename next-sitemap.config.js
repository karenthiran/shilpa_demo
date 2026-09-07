/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.shilpaadvisors.com',
    generateRobotsTxt: true, // (optional) Generates a robots.txt
    changefreq: 'weekly',
    priority: 0.5,
    sitemapSize: 5000,
    exclude: [],
    alternateRefs: [],
    transform: async (config, url) => {
        const pageSettings = {
            '/': { changefreq: 'yearly', priority: 1 },
            '/about': { changefreq: 'monthly', priority: 0.8 },
            '/hrms': { changefreq: 'weekly', priority: 0.5 },
            '/iscs': { changefreq: 'weekly', priority: 0.5 },
            '/etd': { changefreq: 'weekly', priority: 0.5 },
            '/psis': { changefreq: 'weekly', priority: 0.5 },
            '/blog': { changefreq: 'weekly', priority: 0.5 },
            '/contact': { changefreq: 'weekly', priority: 0.5 },
            '/casestudies': { changefreq: 'weekly', priority: 0.5 },
        }

        const settings = pageSettings[url.replace(config.siteUrl, '')] || {}
        return {
            loc: url,
            changefreq: settings.changefreq || config.changefreq,
            priority: settings.priority ?? config.priority,
            lastmod: new Date().toISOString(),
        }
    },
}
