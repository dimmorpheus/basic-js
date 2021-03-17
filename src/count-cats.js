const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	var sum = 0;

	for (var i = 0; i < arr.length; ++i)
		for (var j = 0; j < arr[i].length; ++j)
			if (arr[i][j] == "^^")
				++sum;

	return sum;
};
