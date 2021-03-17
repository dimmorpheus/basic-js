const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" ||
    sampleActivity.match(/[A-Za-z]/) != null ||
    sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)
    return false;

  return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (Math.LN2.toFixed(3) / HALF_LIFE_PERIOD));
};
