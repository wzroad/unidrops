import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  // 处理登出逻辑
  return { code: 200, data: { success: true }, message: 'success' };
});