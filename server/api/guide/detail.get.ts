import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const data = await prisma.post.findFirst({
    where: {
      id: parseInt(query.id as string),
    },
  });
  return {
    code: 200,
    data,
    message: "success",
  };
});
