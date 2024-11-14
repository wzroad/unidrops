// https://nuxt.com/docs/api/configuration/nuxt-config

const mailTest = {
  from: '"空投学院" <web3@guooni.com>',
  host: "smtp.qiye.aliyun.com",
  port: 465,
  secure: true,
  auth: {
    user: "web3@guooni.com",
    pass: "sdykJYM1994",
  },
};
const mailProd = {
  from: '"空投学院" <info@onechainhub.com>',
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: true,
  auth: {
    user: "info@onechainhub.com",
    pass: "ABCDEF9*P",
  },
};
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
    generateClient: process.env.NODE_ENV === "production",
  },
  nodemailer: process.env.NODE_ENV === "production" ? mailProd : mailTest,
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
});
