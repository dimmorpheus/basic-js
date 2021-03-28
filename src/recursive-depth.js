const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr, depth = 1, depths = []) {

		depths.push(depth);

		arr.forEach(a => {
			if (Array.isArray(a)) 
				this.calculateDepth(a, depth + 1, depths);
		});

		return Math.max.apply(null, depths);
	}
};
