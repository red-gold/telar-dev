import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Telar",
  tagline:
    "A cloud native social network engine designed with Microservice and Serverless architecture",
  url: "https://telar.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "telar", // Usually your GitHub org/user name.
  projectName: "telar-social", // Usually your repo name.
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themeConfig: {
    navbar: {
      title: "Telar",
      logo: {
        alt: "Telar",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/start/introduction",
          position: "left",
          label: "Docs",
        },
        {
          position: "left",
          to: "/pricing",
          label: "Pricing",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            { to: "https://telar.dev/", label: "v1 - Legacy" },
          ],
        },
        {
          type: "dropdown",
          label: "APIs",
          position: "left",
          items: [
            {
              label: "Telar Web",
              to: "/apis/telar-web",
            },
            {
              label: "Telar Social",
              to: "/apis/telar-social",
            },
          ],
        },
        {
          href: "https://github.com/telarpress/ts-ui/issues",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSdkwt5pxmyCZQO0AmyAghBOdA-XBG298Pfm5Dw1xjNGaGeCYQ/viewform",
          className: "slack-link",
          "aria-label": "Slack",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/start/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://docs.google.com/forms/d/e/1FAIpQLSdkwt5pxmyCZQO0AmyAghBOdA-XBG298Pfm5Dw1xjNGaGeCYQ/viewform",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/red-gold/ts-ui",
            },
            {
              label: "Icons made by Freepik",
              href: "https://www.freepik.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Telar.dev.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "P7LGI7V52V",
      apiKey: "3ef09db438c0119bd9bf865c58946b09",
      indexName: "telar",
      contextualSearch: false,
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/red-gold/telar-dev/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/red-gold/telar-dev/edit/master/blog/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
};

export default config;
