import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  return {
    code: 200,
    data: null,
    message: "success",
  };
});
