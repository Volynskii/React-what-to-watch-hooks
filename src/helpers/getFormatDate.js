import { format } from "date-fns";

export const getFormatDate = (date) => {
  const dateText = format(date, `MMMM dd, yyyy`);
  const dateTime = format(date, `yyy-mm-dd`);

  return { dateText, dateTime };
};
