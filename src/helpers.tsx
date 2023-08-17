export const getWeekNumber = (date: Date) => {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};

export const getNumberOfDaysToThursday = (date: Date) => {
  const numberOfDaysToThursday =
    4 - date.getDay() > 0 ? 4 - date.getDay() : 11 - date.getDay();
  return numberOfDaysToThursday;
};
