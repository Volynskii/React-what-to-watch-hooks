import { format } from "date-fns";

export const getFormatDate = (date) => {
  const dateText = format(new Date(date), `MMMM dd, yyyy`);
  const dateTime = format(new Date(date), `yyy-mm-dd`);

  return { dateText, dateTime };
};
