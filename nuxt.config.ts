// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appUrl: "",
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-swiper",
    "dayjs-nuxt",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css", "~/assets/css/main.scss"],

  components: [{ path: "~/components/ui", global: true, prefix: "ui" }],

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
    disableTransition: true,
  },

  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",

        "light",
      ],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  dayjs: {
    locales: ["en", "fr"],
    plugins: [
      "isToday",
      "isYesterday",
      "weekOfYear",
      "isoWeek",
      "isBetween",
      "relativeTime",
      "utc",
      "timezone",
    ],
    defaultLocale: "fr",
  },

  i18n: {
    defaultLocale: "fr",
    strategy: "prefix_and_default",

    locales: [
      // { code: "en", name: "English", file: "en.json", dir: "ltr" },
      { code: "fr", name: "Français", file: "fr.json", dir: "ltr" },
    ],
  },
});
