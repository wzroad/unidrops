import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const authorizationHeader = getRequestHeader(event, "Authorization");
  let take = 100;
  // 未登录
  if (!authorizationHeader) {
    take = 6;
  }
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
    take,
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
