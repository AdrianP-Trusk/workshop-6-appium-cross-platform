const PROGRAMMING_LANGUAGES = {
  NODE_JS: 'node-js',
  JAVA: 'java',
  PYTHON: 'python',
}

const TEST_FRAMEWORKS = {
  JEST: 'jest',
  PYTEST: 'pytest',
  TESTNG: 'testng',
}

const API_LIBRARIES = {
  AXIOS: 'axios',
  REST_ASSURED: 'rest-assured',
  REQUESTS: 'requests',
}

const BONUSES = {
  BEHAVE: 'behave',
  CUCUMBER: 'cucumber',
}

const WEB_LIBRARIES = {
  SELENIUM_WEBDRIVER: 'selenium-webdriver',
  WEBDRIVERIO: 'webdriverio',
}

const MOBILE_LIBRARIES = {
  APPIUM: 'appium',
  WEBDRIVERIO: 'webdriverio',
}

const stackOptions = [{
  key: '0',
  label: 'Choose...',
  value: '',
}, {
  key: '1',
  label: 'Node.js',
  value: PROGRAMMING_LANGUAGES.NODE_JS,
}, {
  key: '2',
  label: 'JAVA',
  value: PROGRAMMING_LANGUAGES.JAVA,
}, {
  key: '3',
  label: 'Python',
  value: PROGRAMMING_LANGUAGES.PYTHON,
}]

const domain = {
  PROGRAMMING_LANGUAGES,
  TEST_FRAMEWORKS,
  API_LIBRARIES,
  BONUSES,
  WEB_LIBRARIES,
  MOBILE_LIBRARIES,
  stackOptions,
}

module.exports = domain
