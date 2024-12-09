'use strict';

const removeElement = (array, item) => {
  if (array.indexOf(item) !== -1) array.splice(array.indexOf(item), 1);
};
module.exports = { removeElement };
