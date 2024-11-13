import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  const { list } = await readBody(event);
  await prisma.airdrop.createMany({
    data: list.map((e: any) => {
      e.publishAt = new Date(e.publishAt);
      return e;
    }),
  });
  return {
    code: 200,
    data: null,
    message: "success",
  };
});
