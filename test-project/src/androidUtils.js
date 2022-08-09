const crossPlatformUtils = require('./crossPlatformUtils')
const driverOptions = (apkPath) => ({
  automationName: 'UIAutomator2',
  platformName: 'Android',
  platformVersion: '11',
  deviceName: 'Pixel 3 API 30',
  app: apkPath,
  deviceReadyTimeout: 99000,
  newCommandTimeout: 25000,
})

const selectorByClass = (className) => `android=new UiSelector().className("${className}")`
const selectorByClassAndText = (className, text) => `android=new UiSelector().text("${text}").className("${className}")`
const selectorByResourceId = (resourceId) => `android=new UiSelector().resourceId("${resourceId}")`
const selectorByResourceIdAndText = (resourceId, text) => `android=new UiSelector().text("${text}").resourceId("${resourceId}")`
const selectorByText = (text) => `android=new UiSelector().text("${text}")`

const findElementByClassAndText = async (driver, className, text) => {
  console.log(`find element by class and text with class name: ${className}, text: ${text}`)
  const element = await driver.$(selectorByClassAndText(className, text))
  console.log(`found ${element}`)
  return element
}
const findElementByResourceId = async (driver, resourceId) => {
  console.log(`find element by resource id: ${resourceId}`)
  const element = await driver.$(selectorByResourceId(resourceId))
  console.log(`found ${element}`)
  return element
}
const findElementByResourceIdAndText = async (driver, resourceId, text) => {
  console.log(`find element by resource id: ${resourceId}`)
  const element = await driver.$(selectorByResourceIdAndText(resourceId, text))
  console.log(`found ${element}`)
  return element
}
const findElementByText = async (driver, text) => {
  console.log(`find element by text: ${text}`)
  const element = await driver.$(selectorByText(text))
  console.log(`found ${element}`)
  return element
}

const waitForExistByClass = async (driver, className, timeout = 1500) => {
  console.log(`wait for exist by class: ${className}, for ${timeout} sec`)
  await crossPlatformUtils.waitForExist(driver, selectorByClass(className), timeout)
}
const waitForExistByClassAndText = async (driver, className, text, timeout = 1500) => {
  console.log(`wait for exist by class and text with class name: ${className}, text: ${text}, for ${timeout} sec`)
  await crossPlatformUtils.waitForExist(driver, selectorByClassAndText(className, text), timeout)
}
const waitForExistByResourceId = async (driver, resourceId, timeout = 1500) => {
  console.log(`wait for exist by resource id: ${resourceId}, for ${timeout} sec`)
  await crossPlatformUtils.waitForExist(driver, selectorByResourceId(resourceId), timeout)
}

const clickByClassAndText = async (driver, className, text) => {
  console.log(`click element by class and text with class name: ${className}, text: ${text}`)
  const element = await findElementByClassAndText(driver, className, text)
  await element.click()
  console.log('element clicked')
}
const clickByResourceId = async (driver, resourceId) => {
  console.log(`click element by resource id: ${resourceId}`)
  const element = await findElementByResourceId(driver, resourceId)
  await element.click()
  console.log('element clicked')
}

const getTextByResourceId = async (driver, resourceId) => {
  await waitForExistByResourceId(driver, resourceId)
  const element = await findElementByResourceId(driver, resourceId)
  try {
    const elementText = await element.getText()
    return elementText
  } catch (e) {
    return undefined
  }
}

const androidUtils = {
  driverOptions,
  findElementByClassAndText,
  findElementByResourceId,
  findElementByResourceIdAndText,
  findElementByText,
  waitForExistByClass,
  waitForExistByClassAndText,
  waitForExistByResourceId,
  clickByClassAndText,
  clickByResourceId,
  getTextByResourceId,
}

module.exports = androidUtils
