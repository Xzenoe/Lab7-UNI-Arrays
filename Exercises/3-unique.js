'use strict';

const unique = (array) => {
  const result = [];
  for (const item of array) {
    if (result.indexOf(item) === -1) result.push(item);
  }
  return result;
};

module.exports = { unique };
