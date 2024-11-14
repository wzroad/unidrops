// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@nuxt/icon",
    "@prisma/nuxt",
    "nuxt-nodemailer",
    "@element-plus/nuxt",
    "@pinia/nuxt",
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
    generateClient: false,
  },
  nodemailer: {
    from: '"John Doe" <john@doe.com>',
    host: "smtp.mailtrap.io",
    port: 465,
    secure: true,
    auth: {
      user: "john@doe.com",
      pass: "",
    },
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
      pages: {
        login: "/",
      },
    },
  },
});
