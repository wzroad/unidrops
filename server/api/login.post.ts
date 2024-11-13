import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { useCookie } from "nuxt/app";

const JWT_SECRET = "araraaaraarararar"; // Replace with your secret key

export default defineEventHandler(async (event) => {
  const { email, code } = await readBody(event);

  // const emailCode = await prisma.emailCode.findFirst({
  //   where: { email, code, expiredAt: { gte: new Date() } },
  // });

  // if (!emailCode) {
  //   return {
  //     statusCode: 401,
  //     body: { success: false, message: "验证码已过期" },
  //   };
  // }

  let user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { email },
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, vip: user.vipLevel },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  // 只显示邮箱名称的2个字符，避免暴露用户隐私
  const safeEmail = email.replace(/^(.{2}).*@/, "$1***@");
  return {
    code: 200,
    data: {
      email: safeEmail,
      token,
    },
    message: "success",
  };
});
