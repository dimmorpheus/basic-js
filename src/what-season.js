const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(d) {

	if (d == undefined)
		return "Unable to determine the time of year!";

	if (typeof(d) != "date")
		throw new CustomError("is not a date");

	var str;
	var m = d.getMonth();

	switch (m) {
		case 0:
		case 1:
		case 11:
			str = "winter";
			break;
		case 2:
		case 3:
		case 4:
			str = "spring";
			break;
		case 5:
		case 6:
		case 7:
			str = "summer";
			break;
		default:
			str = "autumn";
			break;
	}

	return str;
};
