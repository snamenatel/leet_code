const n = x => x.charCodeAt(x) - 64;
/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function (columnTitle) {
  return columnTitle
    .split('')
    .reverse()
    .reduce((acc, current, idx) => {
      return acc + (n(current) * (26 ** idx));
    }, 0);
};

