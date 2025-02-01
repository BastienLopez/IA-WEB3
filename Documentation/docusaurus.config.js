// @ts-check
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Assistant IA Web3',
  tagline: 'Gestion de portefeuilles crypto et analyse de marché avec IA',
  url: 'https://votre-site.com', // Remplace par ton domaine
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'votre-organisation', // Remplace par ton nom d'organisation GitHub
  projectName: 'assistant-ia-web3', // Nom du repo

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/votre-organisation/assistant-ia-web3/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/votre-organisation/assistant-ia-web3/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'Assistant IA Web3',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/votre-organisation/assistant-ia-web3',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'API',
              to: '/docs/api-documentation',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/votre-organisation/assistant-ia-web3',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Assistant IA Web3, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
