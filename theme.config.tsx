import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },

  docsRepositoryBase: "https://github.com/chris23lngr/overline-docs",
  footer: {
    text: "Nextra Docs Template",
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <div>{title}</div>;
      }
      return <>{title}</>;
    },
  },
};

export default config;
