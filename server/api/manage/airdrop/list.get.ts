import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const list = await prisma.airdrop.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  const count = await prisma.airdrop.count();
  return {
    code: 200,
    data: {
      list,
      count,
    },
    message: "success",
  };
});
