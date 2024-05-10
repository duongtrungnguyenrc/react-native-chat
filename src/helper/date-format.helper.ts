export const getTime = (time: Date) => {
  if (!time) return null;
  const dateTime = new Date(time);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};
