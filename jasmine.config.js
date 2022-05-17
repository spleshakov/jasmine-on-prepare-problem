(async () => {
	let Jasmine = require('jasmine');
	let jasmine = new Jasmine();

	jasmine.exitOnCompletion = false;
	jasmine.loadConfig({
		'spec_files': ['*.spec.js'],
		'helpers': ['on-prepare.js'],
		'stopSpecOnExpectationFailure': false,
		'random': false,
	})

	const result = await jasmine.execute();
})()
