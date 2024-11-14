import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export const JWT_SECRET = "araraaaraarararar"; // Replace with your secret key

export default defineEventHandler(async (event) => {
  const { email, code } = await readBody(event);

  const emailCode = await prisma.emailCode.findFirst({
    where: { code },
  });

  if (!emailCode || emailCode.email !== email) {
    throw createError({
      status: 401,
      message: "验证码已过期",
    });
  }

  await prisma.emailCode.delete({
    where: { id: emailCode.id },
  });

  let user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { email },
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      vip: user.vipLevel,
      isAdmin: user.isAdmin,
    },
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
      id: user.id,
      email: safeEmail,
      token,
      vip: user.vipLevel,
    },
    message: "success",
  };
});

export function extractToken(authorizationHeader: string) {
  return authorizationHeader.startsWith("Bearer ")
    ? authorizationHeader.slice(7)
    : authorizationHeader;
}
