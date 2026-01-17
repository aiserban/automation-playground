export const validateAgainstList = <T>(value: any, list: T[]): value is T => {
  if (!list.includes(value)) {
    throw new Error(
      `"${value}" is not allowed. Acceptable values are: ${list.join(', ')}`
    );
  }
  return value;
};
