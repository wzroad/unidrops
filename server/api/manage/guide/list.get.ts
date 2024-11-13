import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const list = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
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
