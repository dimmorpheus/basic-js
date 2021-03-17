const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (arr == undefined)
		return false;

	if (typeof(arr) != "array")
		throw new CustomError("it's not an array");

	var size = arr.length - 1;
	var cs = new String(); 

	for (var i = 0; i < arr.length; ++i) {
		if (typeof(arr[i]) == "string") {
			cs = arr[i];
			break;
		}
	}

	if (cs == "") 
		return arr;
	
	if (cs.includes("discard"))
		--size;
	else
		++size;

	var rArr = new Array(size);

	for (var i = 0, j = 0; i < arr.length; ++i, ++j) {
		if (arr[i] != cs)
			rArr[j] = arr[i];
		else {
			if (cs == "--discard-prev")
				j -= 2;
			else if (cs == "--discard-next") {
				++i;
				--j;
			}
			else if (cs == "--double-prev") 
				rArr[j] = rArr[j-1];
			else if (cs == "--double-next")
				rArr[j] = arr[i + 1];
		}
	}

return rArr;

}
