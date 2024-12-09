'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    if (array.indexOf(item) !== -1) array.splice(array.indexOf(item), 1);
  }
};

module.exports = { removeElements };
