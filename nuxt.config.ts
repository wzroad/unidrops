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
  ],
  css: ["~/assets/css/main.css"],
  elementPlus: {},
  build: {
    transpile: ["jsonwebtoken"],
  },
  prisma: {
    installStudio: false,
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
});
