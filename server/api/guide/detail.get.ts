import { JwtPayload, verify } from "jsonwebtoken";
import prisma from "~/lib/prisma";
import { extractToken, JWT_SECRET } from "../auth/login.post";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const data = await prisma.post.findFirst({
    where: {
      id: parseInt(query.id as string),
    },
  });

  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: "页面不存在",
    });
  }
  if (data.role > 0) {
    const authorizationHeader = getRequestHeader(event, "Authorization");
    if (!authorizationHeader) {
      data.content = data.content.substring(0, 500);
    } else {
      const extractedToken = extractToken(authorizationHeader);
      try {
        const decoded = verify(extractedToken, JWT_SECRET) as JwtPayload;
        if (decoded.vip < data.role) {
          data.content = data.content.substring(0, 100);
        }
      } catch (error) {
        throw createError({
          statusCode: 403,
          statusMessage: "You must be logged in to use this endpoint",
        });
      }
    }
  }

  return {
    code: 200,
    data,
    message: "success",
  };
});
