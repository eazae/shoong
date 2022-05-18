export const parseDate = (date: number[]) => {
  const now = new Date();
  const curYear = now.getUTCFullYear();
  const curMonth = now.getUTCMonth() + 1;
  const curDay = now.getUTCDate();
  const year = date[0];
  const month = date[1];
  const day = date[2];
  const hour = date[3].toString().padStart(2, '0');
  const minute = date[4].toString().padStart(2, '0');
  const second = date[5].toString().padStart(2, '0');

  return curYear === year && curMonth === month
    ? curDay - day === 0
      ? `오늘 ${hour}:${minute}:${second}`
      : `어제 ${hour}:${minute}:${second}`
    : `${year}.${month.toString().padStart(2, '0')}.${day
        .toString()
        .padStart(2, '0')} ${hour}:${minute}:${second}`;
};
