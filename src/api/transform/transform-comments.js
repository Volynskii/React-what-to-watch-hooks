import { compareDesc } from "date-fns";

const sortByDate = (item1, item2) =>
  compareDesc(new Date(item1.date), new Date(item2.date));

export const transformComments = (comments) => {
  const transformed = comments.map((comment) => {
    return {
      ...comment,
      date: new Date(comment.date)
    };
  });

  return transformed.sort(sortByDate);
};
