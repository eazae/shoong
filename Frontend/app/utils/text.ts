export const truncateLongWord = (word: string, digits: number) => {
  return word.slice(0, digits) + '...';
};
