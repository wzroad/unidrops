import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  // TODO: 如果不是vite环境，则只返回 6 条数据
  // const list = await prisma.airdrop.findMany({
  //   take: 6,
  // });
  const list = await prisma.airdrop.findMany({
    select: {
      id: true,
      categoryName: true,
      emptyRate: true,
      expectedIncome: true,
      funding: true,
      level: true,
      minInvest: true,
      name: true,
      score: true,
      status: true,
      thumbnail: true,
      role: true,
      publishAt: true,
      updatedAt: true,
      createdAt: true,
    },
    orderBy: {
      id: "asc",
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
