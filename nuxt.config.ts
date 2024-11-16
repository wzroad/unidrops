// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "一链通空投学院",
    },
  },
  modules: [
    "@unocss/nuxt",
    "@nuxt/icon",
    "@prisma/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/mdc",
    "@sidebase/nuxt-auth",
  ],
  css: ["~/assets/css/main.css"],
  mdc: {
    headings: {
      anchorLinks: false,
    },
  },
  elementPlus: {},
  build: {
    transpile: ["jsonwebtoken"],
  },
  prisma: {
    installStudio: false,
    generateClient: process.env.NODE_ENV === "production",
    autoSetupPrisma: process.env.NODE_ENV === "production",
  },
  auth: {
    // 这里添加你的 nuxt-auth 配置
    baseURL: "/api/auth",
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        getSession: { path: "/user", method: "get" },
      },
      token: {
        signInResponseTokenPointer: "/data/token",
        type: "Bearer",
        headerName: "Authorization",
        maxAgeInSeconds: 60 * 60 * 24 * 7,
      },
      session: {
        dataType: {
          id: "number",
          email: "string",
          isAdmin: "boolean",
          vip: "boolean",
        },
      },
      pages: {
        login: "/",
      },
    },
  },
  // fix: https://github.com/prisma/prisma/issues/12504
  vite: {
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
      },
    },
  },
});
