// Get Selenium and the drivers
const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')

const reports_path = 'e2e/reports'

const config = {
	src_folders: ['e2e/features'],
	output_folder : reports_path,
	selenium: {
		// Information for selenium, such as the location of the drivers ect.
		start_process: true,
		server_path: seleniumServer.path,
		port: 4444, // Standard selenium port
		cli_args: {
			'webdriver.chrome.driver': chromedriver.path,
			'webdriver.gecko.driver': geckodriver.path
		},
		log_path: reports_path
	},
	test_workers: {
		// This allows more then one browser to be opened and tested in at once
		enabled: true,
		workers: 'auto'
	},
	test_settings: {
		default: {
			screenshots: {
				enabled: false
			},
			globals: {
				// How long to wait (in milliseconds) before the test times out
				waitForConditionTimeout: 5000
			},
			desiredCapabilities: {
				// The default test
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true,
				nativeEvents: true
			}
		},
		// Here, we give each of the browsers we want to test in, and their driver configuration
		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true,
				nativeEvents: true
			}
		},
		firefox: {
			desiredCapabilities: {
				browserName: 'firefox',
				javascriptEnabled: true,
				acceptSslCerts: true,
				nativeEvents: true
			}
		}
	}
}

module.exports = config