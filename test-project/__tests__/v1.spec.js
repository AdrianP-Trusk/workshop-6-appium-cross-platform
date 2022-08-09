const path = require('path')

const { remote } = require('webdriverio')

const androidUtils = require('../src/androidUtils')
const appScreen = require('../src/appScreen')
const domain = require('../src/domain')
const fsUtils = require('../src/fsUtils')
const iOSUtils = require('../src/iOSUtils')

const testCases = [
  {
    platformName: 'Android',
    programmingLanguage: 'Node.js',
    enableAPI: true,
    enableWeb: true,
    enableMobile: true,
    expectedTools: {
      stack: domain.PROGRAMMING_LANGUAGES.NODE_JS,
      test: domain.TEST_FRAMEWORKS.JEST,
      api: domain.API_LIBRARIES.AXIOS,
      web: domain.WEB_LIBRARIES.WEBDRIVERIO,
      mobile: domain.MOBILE_LIBRARIES.WEBDRIVERIO,
      bonus: domain.BONUSES.CUCUMBER,
    },
  },
  {
    platformName: 'iOS',
    programmingLanguage: 'Python',
    enableAPI: true,
    enableWeb: false,
    enableMobile: false,
    expectedTools: {
      stack: domain.PROGRAMMING_LANGUAGES.PYTHON,
      test: domain.TEST_FRAMEWORKS.PYTEST,
      api: domain.API_LIBRARIES.REQUESTS,
      web: undefined,
      mobile: undefined,
      bonus: domain.BONUSES.BEHAVE,
    },
  },
  {
    platformName: 'iOS',
    programmingLanguage: 'JAVA',
    enableAPI: false,
    enableWeb: true,
    enableMobile: true,
    expectedTools: {
      stack: domain.PROGRAMMING_LANGUAGES.JAVA,
      test: domain.TEST_FRAMEWORKS.TESTNG,
      api: undefined,
      web: domain.WEB_LIBRARIES.SELENIUM_WEBDRIVER,
      mobile: domain.MOBILE_LIBRARIES.APPIUM,
      bonus: domain.BONUSES.CUCUMBER,
    },
  },
]

describe.each(testCases)('Proposal for $programmingLanguage on $platformName', ({
  platformName,
  programmingLanguage,
  enableAPI,
  enableWeb,
  enableMobile,
  expectedTools,
}) => {
  const screenshotsBasePath = path.join(
    fsUtils.rootPath,
    'test-resources/screenshots',
    platformName,
    programmingLanguage,
  )
  fsUtils.createPathDirectories(screenshotsBasePath)
  const logsBasePath = path.join(
    fsUtils.rootPath,
    'test-resources/logs',
    platformName,
    programmingLanguage,
  )
  fsUtils.createPathDirectories(logsBasePath)
  console.log('test case', {
    platformName,
    programmingLanguage,
    enableAPI,
    enableWeb,
    enableMobile,
    expectedTools,
  })
  let driver

  it(`Given I open Sample Application on ${platformName}`, async () => {
    driver = await remote({
      hostname: 'localhost',
      path: '/wd/hub',
      port: 4723,
      capabilities: platformName === 'Android' ? androidUtils.driverOptions(
        path.join(
          fsUtils.rootPath,
          'resources',
          'android',
          'draft.apk',
        ),
      ) : iOSUtils.driverOptions(
        path.join(
          fsUtils.rootPath,
          'resources',
          'ios',
          'draft.app',
        ),
      ),
    })
    await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_open_app.png'))
  }, 80000)

  it(`When I choose ${programmingLanguage} as development technical stack`, async () => {
    await appScreen.chooseStack(driver, programmingLanguage, platformName)
    await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_choose_stack.png'))
  }, 15000)

  if (enableAPI) {
    it('And I choose to enable API automation', async () => {
      await appScreen.enableAPI(driver, platformName)
      await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_choose_enable_api.png'))
    }, 8000)
  }

  if (enableWeb) {
    it('And I choose to enable Web automation', async () => {
      await appScreen.enableWeb(driver, platformName)
      await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_choose_enable_web.png'))
    }, 8000)
  }

  if (enableMobile) {
    it('And I choose to enable Mobile automation', async () => {
      await appScreen.enableMobile(driver, platformName)
      await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_choose_enable_mobile.png'))
    }, 8000)
  }

  it('And I submit my answers', async () => {
    await appScreen.submit(driver, platformName)
    await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_submit.png'))
  }, 8000)

  it('Then a loading spinner appears', async () => {
    await appScreen.isLoadingSpinnerVisible(driver, platformName)
    await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_see_spinner.png'))
  }, 8000)

  it('And we suggest a valid set of tools', async () => {
    const proposedStack = await appScreen.getProposedStack(driver, platformName)
    await driver.saveScreenshot(path.join(screenshotsBasePath, 'i_verify_suggestions.png'))
    expect(proposedStack).toStrictEqual(expectedTools)
  }, 15000)

  it('And I can close and uninstall the app', async () => {
    await driver.removeApp(platformName === 'Android' ? 'com.apothuaud.sampleapplication' : 'com.apothuaud.sample-application')
    await driver.deleteSession()
  }, 30000)
})


