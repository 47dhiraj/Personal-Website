module.exports = {
  title: "Dhiraj kafle",
  tagline: `Passionate Pragmatic Developer who loves Coding`,
  url: "https://dhirajk.com.np",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "47dhiraj", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Dhiraj Kafle",
      logo: {
        alt: "FullStack Web Developer, Nepal",
        src: "img/avataaars.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "More",
          position: "left",
        },
        { to: "/docs/", label: "Experience", position: "left" },
        { to: "docs/projects", label: "Works", position: "left" },

        { to: "blog", label: "Blogs", position: "left" },
        {
          href: "https://github.com/47dhiraj",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/",
            },
            {
              label: "Stack Overflow",
              href: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/",
            },
            {
              label: "Twitter",
              href: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/47dhiraj",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/dhiraj.kafle.125",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dhiraj Kafle`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "experience",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
          // Please change this to your repo.
          // editUrl:
          // "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
