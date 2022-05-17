module.exports = function (message) {

	return {
		jasmineStarted: (suiteInfo) => {
			console.log(message, 'jasmineStarted')
		},
		suiteStarted: (result) => {
			console.log(message, 'suiteStarted')
		},
		specStarted: (result) => {
			console.log(message, 'specStarted')
		},
		specDone: (result) => {
			console.log(message, 'specDone')
		},
		suiteDone: (result) => {
			console.log(message, 'suiteDone')
		},
		jasmineDone: (result) => {
			console.log(message, 'jasmineDone')
		}
	}
}
