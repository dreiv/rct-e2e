module.exports = {
	'Title is "React App"': function(browser) {

	browser
		.url('http://localhost:3000/')
		.waitForElementVisible('body', 1000)
		.verify.title('React App')
		.end()
	}
}