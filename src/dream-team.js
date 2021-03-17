const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
	if (arr == undefined)
		return false;

	var str = "";
	var tmp;

	for (var i = 0; i < arr.length; ++i)
		if (typeof(arr[i]) == "string") {
			tmp = arr[i].trim();
			str += tmp[0].toUpperCase();
		}

	return str.split("").sort().join("");
};
