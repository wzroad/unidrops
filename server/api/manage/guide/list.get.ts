import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const list = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  return {
    code: 200,
    data: {
      list,
    },
    message: "success",
  };
});
