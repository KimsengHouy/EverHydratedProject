export const mLToCups = (value, unit) => {
  if (unit && unit == 'mL') {
    return value;
  } else {
    return value / 250;
  }
};
