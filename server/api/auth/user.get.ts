import { defineEventHandler } from "h3";
import { extractToken, JWT_SECRET } from "./login.post";
import { JwtPayload, verify } from "jsonwebtoken";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const authorizationHeader = getRequestHeader(event, "Authorization");

  if (typeof authorizationHeader === "undefined") {
    throw createError({
      status: 403,
      message: "登录已过期",
    });
  }
  const extractedToken = extractToken(authorizationHeader);

  let decoded: JwtPayload;
  try {
    decoded = verify(extractedToken, JWT_SECRET) as JwtPayload;
  } catch (error) {
    throw createError({
      status: 403,
      message: "登录已过期",
    });
  }

  if (!decoded.id) {
    throw createError({
      status: 403,
      message: "登录已过期",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });
  // 只显示邮箱名称的2个字符，避免暴露用户隐私
  const safeEmail = user?.email.replace(/^(.{2}).*@/, "$1***@");
  // 返回当前用户信息
  return {
    id: decoded.id,
    email: safeEmail,
    vip: user?.vipLevel,
    isAdmin: user?.isAdmin,
  };
});
