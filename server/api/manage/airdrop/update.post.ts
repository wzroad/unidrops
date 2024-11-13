import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  const { id, description, instruction } = await readBody(event);
  await prisma.airdrop.update({
    where: {
      id,
    },
    data: {
      description,
      instruction,
    },
  });
  return {
    code: 200,
    data: null,
    message: "success",
  };
});
