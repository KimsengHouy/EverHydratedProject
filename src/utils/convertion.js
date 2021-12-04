export const mLToCups = (value, unit) => {
  console.log(unit, 'unit123');
  console.log(value, 'value123');
  if (unit && unit == 'mL') {
    console.log(unit, 'naa');
    return value;
  } else {
    console.log(value, 'key12');
    return 100;
  }
};
