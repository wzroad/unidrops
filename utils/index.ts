/**
 * 将数字转为 百万 亿 的形式
 * @param value
 */
export const formatCurrency = (value: string | number) => {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  if (value < 1e4) {
    return value;
  } else if (value < 1e8) {
    return `${value / 1e4}万`;
  } else if (value < 1e12) {
    return `${(value / 1e8).toFixed(2)}亿`;
  }
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};
