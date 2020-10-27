window.MathJax = {
	startup: {
		output: "chtml"
	},
	loader: {
		load: ["input/asciimath", "output/chtml"]
	},
	chtml: {
		scale: 1,
		mathmlSpacing: true,
	},
	asciimath: {
		delimiters: [["$", "$"]],
		fixphi: true,
		displaystyle: true,
	},
	options: {
		enableMenu: false,
	},
};