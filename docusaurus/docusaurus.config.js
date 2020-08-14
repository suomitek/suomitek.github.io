module.exports = {
  title: 'Suomitek',
  tagline: 'AI platform',
  url: 'https://suomitek.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Suomitek',    // Usually your GitHub org/user name.
  projectName: 'suomitek.github.io',  // Usually your repo name.
  stylesheets: [
    '/css/gitter-sidecar.css',
  ],
  scripts: [
    '/js/gitter-sidecar.js',
    { src: 'https://sidecar.gitter.im/dist/sidecar.v1.js', async: true },
  ],
  themeConfig: {
    navbar: {
      title: '',
      logo: { alt: 'Suomitek Logo', src: 'img/suomitek-logo.svg' },
      items: [
        { label: 'Announcement',    href: 'https://suomitek.github.io/announcement/', position: 'right', target: '_self' },
        { label: 'Blog',            href: 'https://suomitek.github.io/blog/',         position: 'right', target: '_self' },
        { label: 'Docs',            to:   'docs/',                                position: 'right', activeBasePath: 'docs' },
        { label: 'Getting Started', to:   'docs/getting-started',                 position: 'right' },
        { label: 'Tutorial',        to:   'docs/video-tutorial',                  position: 'right' },
        { label: 'API',             to:   'docs/api/README',                      position: 'right' },
        { label: 'FAQ',             to:   'docs/faq/README',                      position: 'right' },
        { label: 'GitHub',          href: 'https://github.com/suomitek/athena-ai-service',   position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: 'docs/getting-started' },
            { label: 'Tutorial',        to: 'docs/video-tutorial' },
            { label: 'FAQ',             to: 'docs/faq/README' },
            { label: 'API Reference',   to: 'docs/api/README' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow',  href: 'https://stackoverflow.com/questions/tagged/suomitek' },
            { label: 'Gitter',          href: 'https://gitter.im/suomitek/suomitek' },
            { label: 'Twitter',         href: 'https://twitter.com/suomitek' }
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog',      href: 'https://suomitek.github.io/community/', target: '_self' },
            { label: 'Branding',  to:   'branding' },
            { label: 'Press',     to:   'press' },
            { label: 'GitHub',    href: 'https://github.com/suomitek/suomitek#readme' },
          ],
        },
      ],
      logo: {
        alt  : 'Suomitek Logo',
        src  : 'img/suomitek-logo.svg',
        href : 'https://suomitek.github.io/',
      },
      copyright: `Copyright © 2016-${new Date().getFullYear()} Suomitek Contributors`,
    },
    algolia: {
      apiKey           : 'cd8ca324c447a803e8a196a5c8fa22dd',
      indexName        : 'suomitek',
      searchParameters : {},                                   // Optional (if provided by Algolia)
    },
    googleAnalytics: {
      trackingID: 'UA-88739146-3',
    },
    prism: {
      additionalLanguages: [
        'csharp',
        'kotlin',
        'scala',
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`` path).
          homePageId: 'introduction/README',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/suomitek/suomitek.github.io/edit/master/docusaurus/',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/suomitek/suomitek.github.io/edit/master/docusaurusblog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
