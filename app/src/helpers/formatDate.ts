export const formatDate = (date: string) => {
  const d = new Date(parseInt(date, 10));
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};
