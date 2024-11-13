import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  const { id, content } = await readBody(event);
  await prisma.course.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });
  return {
    code: 200,
    data: null,
    message: "success",
  };
});
