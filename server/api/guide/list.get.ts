import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  // TODO: 如果不是vite环境，则只返回 6 条数据
  // const list = await prisma.airdrop.findMany({
  //   take: 6,
  // });
  const list = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      thumbnail: true,
      description: true,
      role: true,
      publishAt: true,
      updatedAt: true,
      createdAt: true,
    },
  });
  const count = await prisma.post.count();
  return {
    code: 200,
    data: {
      list,
      count,
    },
    message: "success",
  };
});
