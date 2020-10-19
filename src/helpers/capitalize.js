export const capitalize = (str) => {
  if (typeof str !== `string`) {
    throw new Error(`capitalize argument must be a string`);
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};
