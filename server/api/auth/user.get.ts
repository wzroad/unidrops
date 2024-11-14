import { defineEventHandler } from "h3";
import { extractToken, JWT_SECRET } from "./login.post";
import { JwtPayload, verify } from "jsonwebtoken";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const authorizationHeader = getRequestHeader(event, "Authorization");

  if (typeof authorizationHeader === "undefined") {
    throw createError({
      statusCode: 403,
      message:
        "Need to pass valid Bearer-authorization header to access this endpoint",
    });
  }
  const extractedToken = extractToken(authorizationHeader);

  let decoded: JwtPayload;
  try {
    decoded = verify(extractedToken, JWT_SECRET) as JwtPayload;
  } catch (error) {
    console.error({
      msg: "Login failed. Here's the raw error:",
      error,
    });
    throw createError({
      statusCode: 403,
      message: "You must be logged in to use this endpoint",
    });
  }

  if (!decoded.id) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized, user is not logged in",
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
