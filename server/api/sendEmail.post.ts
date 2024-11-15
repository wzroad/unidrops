import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  const { sendMail } = useNodeMailer();
  // Generate a random 6-digit code
  const code = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  try {
    await sendMail({
      subject: "验证码",
      text: `感谢使用空投学院，验证码：${code}, 有效期30分钟`,
      to: email,
    });
    await prisma.emailCode.create({
      data: {
        code,
        email,
        expiredAt: new Date(Date.now() + 30 * 60 * 1000),
      },
    });
    return {
      code: 200,
    };
  } catch (error) {
    throw createError({
      status: 401,
      message: "发送验证码失败",
    });
  }
});
