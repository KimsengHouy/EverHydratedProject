export const mLToCups = (value, unit) => {
  console.log(unit, 'unit123');
  if (unit == 'mL') {
    return value;
  } else {
    return value / 250;
  }
};
