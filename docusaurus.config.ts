import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "/img/favicon.ico",
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://your-docusaurus-site.example.com",

  baseUrl: "/",

  organizationName: "Jivan Kadel",
  projectName: "Interactive Maths",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },

    {
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      rel: "stylesheet",
    },
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          type: "html",
          position: "left",
          value: `<a href="/" style="display:flex; align-items:center; gap:8px;">
  <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 -960 960 960" fill="#1f1f1f" stroke="white" stroke-width="40" stroke-linejoin="round">
    <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/>
  </svg>
  <span>IMaths</span>
</a>
`,
        },
        {
          href: "https://github.com/JivanKadel/interactive_maths",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
