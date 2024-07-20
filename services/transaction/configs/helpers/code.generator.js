/**
 *
 * @param {String} prefix
 * @param {Number} latestNumber
 * @param {Number} size
 * @returns
 */
const generateCode = (prefix, latestNumber, size = 4) => {
  let str = latestNumber.toString();
  while (str.length < size) str = "0" + str;

  return `${prefix}${str}`;
};

module.exports = { generateCode };
