import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  const { id, vipLevel, vipExpiredAt } = await readBody(event);
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      vipExpiredAt,
      vipLevel,
    },
  });
  return {
    code: 200,
    data: null,
    message: "success",
  };
});
