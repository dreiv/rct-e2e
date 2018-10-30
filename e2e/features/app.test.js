let app
module.exports = {
	beforeEach : function(browser) {
		browser
		.url('http://localhost:3000/')
		.waitForElementVisible('body', 1000)

		app = browser.page.app()
	},

	'Title is "React App"': function(browser) {
		browser.verify.title('React App')
	},

	'Logo is present': function(browser) {
		app.verify.visible('@logo')
	},
	
	'Header text is present': function(browser) {
		app.verify.visible('@headerText')
	},

	'Link is present': function(browser) {
		app.verify.visible('@link')
	},

	afterAll : function(browser) {
		browser.end()
	}
}