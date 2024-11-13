import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const data = await prisma.course.findFirst({
    where: {
      courseId: parseInt(query.courseId as string),
      part: parseInt(query.part as string),
    },
    select: {
      title: true,
      content: true,
    },
  });
  return {
    code: 200,
    data: {
      title: data?.title,
      content: data?.content,
    },
    message: "success",
  };
});
