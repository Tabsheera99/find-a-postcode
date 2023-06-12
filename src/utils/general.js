/** Interpolate a string with values passed */

export const interpolate = (string, values, pattern = ["{", "}"]) => {
  let newString = string;
  Object.keys(values).forEach((key) => {
    if (typeof values[key] !== "undefined") {
      newString = newString.replace(
        `${pattern[0]}${key}${pattern[1]}`,
        `${values[key]}`
      );
    }
  });

  return newString;
};
