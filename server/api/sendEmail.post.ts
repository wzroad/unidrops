import prisma from "@/lib/prisma";
export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  const code = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  try {
    await $fetch("https://api.zeptomail.com/v1.1/email/template", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Zoho-enczapikey wSsVR60j+USiWqh0nzGuI7g9nQ8BBF70REV93lv14nGqH/DF9sc8xkDOVFDxHvNKQ2dpFDsQp74vnE0HgTBbj94vmQxVACiF9mqRe1U4J3x17qnvhDzPX21UkRGBJY8PwgRrkmNiFskj+g==",
      },
      body: JSON.stringify({
        mail_template_key:
          "2d6f.5ce0942f0f05d91.k1.aff262b0-a3c4-11ef-a840-525400d6cd4f.19332db745b",
        from: {
          address: "noreply@onechainhub.com",
          name: "noreply",
        },
        to: [
          {
            email_address: {
              address: email,
              name: "一链通用户",
            },
          },
        ],
        merge_info: {
          name: email,
          OTP: code,
          team: "一链通团队",
          product_name: "一链通空投学院",
        },
        subject: "验证码",
      }),
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
