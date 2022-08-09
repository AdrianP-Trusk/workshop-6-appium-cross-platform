const androidUtils = require('./androidUtils')
const crossPlatformUtils = require('./crossPlatformUtils')
const iOSUtils = require('./iOSUtils')

const chooseStackAndroid = async (driver, stackLabel) => {
  console.log('choose stack android')
  await androidUtils.waitForExistByResourceId(driver, 'choose stack', 8000)
  await androidUtils.clickByResourceId(driver, 'choose stack')
  await androidUtils.waitForExistByClassAndText(driver, 'android.widget.CheckedTextView', stackLabel)
  await androidUtils.clickByClassAndText(driver, 'android.widget.CheckedTextView', stackLabel)
}
const chooseStackIOS = async (driver, stackLabel) => {
  await crossPlatformUtils.waitForExistByAccessibilityId(driver, 'choose stack')
  const chooseStackElement = await crossPlatformUtils.findElementByAccessibilityId(driver, 'choose stack')
  const pickerWheel = await iOSUtils.findElementByType(chooseStackElement, 'XCUIElementTypePickerWheel')
  await pickerWheel.addValue(stackLabel)
}
const chooseStack = async (driver, stackLabel, platformName) => {
  console.log('choosing development technical stack', stackLabel, 'on platform', platformName)
  if (platformName === 'Android') await chooseStackAndroid(driver, stackLabel)
  else if (platformName === 'iOS') await chooseStackIOS(driver, stackLabel)
}

const enableAPIAndroid = async (driver) => {
  await androidUtils.clickByResourceId(driver, 'choose api')
}
const enableAPIIOS = async (driver) => {
  await iOSUtils.clickByTypeAndName(driver, 'XCUIElementTypeOther', 'choose api')
}
const enableAPI = async (driver, platformName) => {
  console.log('choose api test ability on platform', platformName)
  if (platformName === 'Android') await enableAPIAndroid(driver)
  else if (platformName === 'iOS') await enableAPIIOS(driver)
}

const enableWebAndroid = async (driver) => {
  await androidUtils.clickByResourceId(driver, 'choose web')
}
const enableWebIOS = async (driver) => {
  await iOSUtils.clickByTypeAndName(driver, 'XCUIElementTypeOther', 'choose web')
}
const enableWeb = async (driver, platformName) => {
  console.log('choose web test ability on platform', platformName)
  if (platformName === 'Android') await enableWebAndroid(driver)
  else if (platformName === 'iOS') await enableWebIOS(driver)
}

const enableMobileAndroid = async (driver) => {
  await androidUtils.clickByResourceId(driver, 'choose mobile')
}
const enableMobileIOS = async (driver) => {
  await iOSUtils.clickByTypeAndName(driver, 'XCUIElementTypeOther', 'choose mobile')
}
const enableMobile = async (driver, platformName) => {
  console.log('choose mobile test ability on platform', platformName)
  if (platformName === 'Android') await enableMobileAndroid(driver)
  else if (platformName === 'iOS') await enableMobileIOS(driver)
}

const submitAndroid = async (driver) => {
  await androidUtils.clickByResourceId(driver, 'submit')
}
const submitIOS = async (driver) => {
  await iOSUtils.clickByTypeAndName(driver, 'XCUIElementTypeOther', 'submit')
}
const submit = async (driver, platformName) => {
  console.log('submit answers on platform', platformName)
  if (platformName === 'Android') await submitAndroid(driver)
  else if (platformName === 'iOS') await submitIOS(driver)
}

const isLoadingSpinnerVisibleAndroid = async (driver) => {
  await androidUtils.waitForExistByClass(driver, 'android.widget.ProgressBar')
}
const isLoadingSpinnerVisibleIOS = async (driver) => {
  await iOSUtils.waitForExistByTypeAndName(driver, 'XCUIElementTypeActivityIndicator', 'spinner')
}
const isLoadingSpinnerVisible = async (driver, platformName) => {
  console.log('verify loading spinner on platform', platformName)
  if (platformName === 'Android') await isLoadingSpinnerVisibleAndroid(driver)
  else if (platformName === 'iOS') await isLoadingSpinnerVisibleIOS(driver)
}

const getProposedStackAndroid = async (driver) => {
  await androidUtils.waitForExistByResourceId(driver, 'proposal stack', 10000)
  const stack = await androidUtils.getTextByResourceId(driver, 'proposal stack')
  const test = await androidUtils.getTextByResourceId(driver, 'proposal test')
  const api = await androidUtils.getTextByResourceId(driver, 'proposal api')
  const web = await androidUtils.getTextByResourceId(driver, 'proposal web')
  const mobile = await androidUtils.getTextByResourceId(driver, 'proposal mobile')
  const bonus = await androidUtils.getTextByResourceId(driver, 'proposal bonus')
  console.log(`found proposed stack: ${JSON.stringify({
    stack,
    test,
    api,
    web,
    mobile,
    bonus,
  })}`)
  const parsed = {
    stack: stack ? stack.split(': ')[1] : undefined,
    test: test ? test.split(': ')[1] : undefined,
    api: api ? api.split(': ')[1] : undefined,
    web: web ? web.split(': ')[1] : undefined,
    mobile: mobile ? mobile.split(': ')[1] : undefined,
    bonus: bonus ? bonus.split(': ')[1] : undefined,
  }
  console.log(`parsed proposed stack, ${JSON.stringify(parsed)}`)
  return parsed
}
const getProposedStackIOS = async (driver) => {
  await iOSUtils.waitForExistByTypeAndName(driver, 'XCUIElementTypeStaticText', 'proposal stack', 10000)
  const stack = await iOSUtils.getValueByTypeAndName(driver, 'XCUIElementTypeStaticText', 'proposal stack')
  const test = await iOSUtils.getValueByTypeAndName(driver, 'XCUIElementTypeStaticText', 'proposal test')
  const api = await iOSUtils.getValueByTypeAndName(driver, 'XCUIElementTypeStaticText', 'proposal api')
  const web = await iOSUtils.getValueByTypeAndName(driver, 'XCUIElementTypeStaticText', 'proposal web')
  const mobile = await iOSUtils.getValueByTypeAndName(driver, 'XCUIElementTypeStaticText', 'proposal mobile')
  const bonus = await iOSUtils.getValueByTypeAndName(driver, 'XCUIElementTypeStaticText', 'proposal bonus')
  console.log(`found proposed stack: ${JSON.stringify({
    stack,
    test,
    api,
    web,
    mobile,
    bonus,
  })}`)
  const parsed = {
    stack: stack ? stack.split(': ')[1] : undefined,
    test: test ? test.split(': ')[1] : undefined,
    api: api ? api.split(': ')[1] : undefined,
    web: web ? web.split(': ')[1] : undefined,
    mobile: mobile ? mobile.split(': ')[1] : undefined,
    bonus: bonus ? bonus.split(': ')[1] : undefined,
  }
  console.log(`parsed proposed stack, ${JSON.stringify(parsed)}`)
  return parsed
}
const getProposedStack = async (driver, platformName) => {
  console.log('get proposed stack information on platform', platformName)
  if (platformName === 'Android') return await getProposedStackAndroid(driver)
  else if (platformName === 'iOS') return await getProposedStackIOS(driver)
}

const appScreen = {
  chooseStack,
  enableAPI,
  enableMobile,
  enableWeb,
  submit,
  isLoadingSpinnerVisible,
  getProposedStack,
}

module.exports = appScreen
