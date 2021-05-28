/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Telar',
  tagline: 'A cloud native social network engine designed based on Microservice and Serverless architecture',
  url: 'https://telar.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Telar',
      logo: {
        alt: 'Telar',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/start/introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          to: '/pricing',
          label: 'Pricing',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            { to: 'https://telar.dev/', label: 'v1 - Legacy' }
          ]
        },

        {
          href: 'https://github.com/telarpress/ts-ui/issues',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        },
        {
          href:
            'https://docs.google.com/forms/d/e/1FAIpQLSdkwt5pxmyCZQO0AmyAghBOdA-XBG298Pfm5Dw1xjNGaGeCYQ/viewform',
          className: 'slack-link',
          'aria-label': 'Slack',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/start/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSdkwt5pxmyCZQO0AmyAghBOdA-XBG298Pfm5Dw1xjNGaGeCYQ/viewform',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/red-gold/ts-ui',
            },
            {
              label: 'Icons made by Freepik',
              href: 'https://www.freepik.com'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Telar.dev.`,
    },
    algolia: {
      apiKey: 'bccc1fe398ee452cf7837939baf26b83',
      indexName: 'telar',
      contextualSearch: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/red-gold/telar-dev/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/red-gold/telar-dev/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
