import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const list = await prisma.course.findMany({
    where: {
      courseId: parseInt(query.id as string),
    },
    select: {
      id: true,
      courseId: true,
      title: true,
      part: true,
      courseName: true,
    },
    orderBy: {
      part: "asc",
    },
  });
  return {
    code: 200,
    data: list,
    message: "success",
  };
});
