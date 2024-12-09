'use strict';

const difference = (array1, array2) => {
  const result = array1;
  for (const item of array2) {
    if (array1.indexOf(item) !== -1) result.splice(result.indexOf(item), 1);
  }
  return result;
};

module.exports = { difference };
