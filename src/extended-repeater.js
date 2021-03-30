const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, arg) {

  var defArg = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  };

	var separator = "";

  if(typeof str != "string")
    str += "";

  arg.repeatTimes = arg.repeatTimes || defArg.repeatTimes;
  arg.separator = arg.separator || defArg.separator;

  if (arg.hasOwnProperty("addition")) {
    if(typeof arg.addition != "string")
      arg.addition += "";
    arg.additionRepeatTimes = arg.additionRepeatTimes || defArg.additionRepeatTimes;
    arg.additionSeparator = arg.additionSeparator || defArg.additionSeparator;
  } else
    arg.addition = defArg.addition;

	if (arg.addition !== "")
		separator = new Array(arg.additionRepeatTimes).fill(arg.addition).join(arg.additionSeparator);

  return new Array(arg.repeatTimes).fill(str + separator).join(arg.separator);
};
