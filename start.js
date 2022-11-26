// @ts-check

const path = require('path');
const { process, testEmptyDesign } = require('./src');

(async () => {
	const _ = await process({
		meta: {
			isDebug: true,
			outputDirectory: path.join(__dirname, "./out"),
			stopOnError: true
		},
		design: testEmptyDesign
	});
})();