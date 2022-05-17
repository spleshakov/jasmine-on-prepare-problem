let asyncCode = (delayMs, value) => {
	return new Promise(resolve => setTimeout(resolve, delayMs))
		.then(() => value);
}

(async () => {
	const {SpecReporter} = require("jasmine-spec-reporter");
	const customReporter = require("./custom-reporter");
	console.log(1, 'modules imported')

	jasmine.getEnv().clearReporters();
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 3 * 60 * 1000;
	jasmine.getEnv().addReporter(
		new SpecReporter({
			spec: {
				displayStacktrace: 'raw',
				displayDuration: true,
			},
			summary: {
				displayDuration: true,
			}
		})
	)
	console.log(2, 'reporters setup')

	await asyncCode(500);
	console.log(3, 'setup func #1 executed')

	let returnedValue = await asyncCode(500, 'customReporter');
	console.log(4, 'setup func #2 executed')
	jasmine.getEnv().addReporter(
		customReporter(returnedValue)
	)
	console.log(5, 'onPrepare work completed')
})();
