function isSameType(value1, value2) {
  // Check if both values are NaN (NaN is the only JS value that's not equal to itself)
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if both values have the same type
  return typeof value1 === typeof value2;
}