export const dateStrFromSql = (sqlDateStr) => {
  const date = new Date(sqlDateStr);
  const dateStr = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);

  return dateStr;
};
