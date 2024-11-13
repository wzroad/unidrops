import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const list = await prisma.course.findMany({
    select: {
      id: true,
      courseId: true,
      part: true,
      title: true,
    },
    orderBy: {
      courseId: "asc",
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
