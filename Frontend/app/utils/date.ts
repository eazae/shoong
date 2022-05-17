export const parseDate = (date: Date) => {
  const now = new Date();
  const curYear = now.getUTCFullYear();
  const curMonth = now.getUTCMonth() + 1;
  const curDay = now.getUTCDate();

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();

  return curYear === year && curMonth === month
    ? curDay - day === 0
      ? `오늘 ${hour}:${minute}:${second}`
      : `어제 ${hour}:${minute}:${second}`
    : `${year}.${month.toString().padStart(2, '0')}.${day
        .toString()
        .padStart(2, '0')} ${hour}:${minute}:${second}`;
};
