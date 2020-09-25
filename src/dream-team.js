const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  return members
    .filter(member => typeof(member) === 'string')
    .map(member => member.trimLeft())
    .map(member => member[0].toUpperCase())
    .sort()
    .join('');
};
