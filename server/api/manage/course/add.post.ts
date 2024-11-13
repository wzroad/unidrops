import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  const { list } = await readBody(event);
  await prisma.course.createMany({
    data: list.map((e: any) => {
      e.content = "";
      return e;
    }),
  });
  return {
    code: 200,
    data: null,
    message: "success",
  };
});
