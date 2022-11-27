// @ts-check

const path = require('path');
const { process, dad2020Design } = require('./src');

(async () => {
	const _ = await process({
		meta: {
			isDebug: true,
			outputDirectory: path.join(__dirname, "./out"),
			stopOnError: true,
			maxCards: 5
		},
		design: dad2020Design
	});
})();