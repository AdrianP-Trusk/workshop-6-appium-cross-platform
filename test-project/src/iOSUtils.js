const crossPlatformUtils = require('./crossPlatformUtils')
const driverOptions = (appPath) => ({
  automationName: 'XCUITest',
  platformName: 'iOS',
  platformVersion: '15.5',
  deviceName: 'iPhone 13',
  app: appPath,
  deviceReadyTimeout: 99000,
  newCommandTimeout: 25000,
})

const selectorPredicateString = (predicateString) => `-ios predicate string:${predicateString}`
const selectorByName = (name) => selectorPredicateString(`name == '${name}'`)
const selectorByType = (type) => selectorPredicateString(`type == '${type}'`)
const selectorByTypeAndName = (type, name) => selectorPredicateString(`type == '${type}' && name == '${name}'`)

const findElementByName = async (driver, name) => {
  const element = await driver.$(selectorByName(name))
  return element
}
const findElementByType = async (driver, type) => {
  const element = await driver.$(selectorByType(type))
  return element
}
const findElementByTypeAndName = async (driver, type, name) => {
  const element = await driver.$(selectorByTypeAndName(type, name))
  return element
}

const waitForExistByName = async (driver, name, timeout = 1500) => {
  console.log(`wait for exist by name: ${name}, for ${timeout} sec`)
  await crossPlatformUtils.waitForExist(driver, selectorByName(name), timeout)
}
const waitForExistByType = async (driver, type, timeout = 1500) => {
  console.log(`wait for exist by type: ${type}, for ${timeout} sec`)
  await crossPlatformUtils.waitForExist(driver, selectorByType(type), timeout)
}
const waitForExistByTypeAndName = async (driver, type, name, timeout = 1500) => {
  console.log(`wait for exist by type: ${type} and name: ${name}, for ${timeout} sec`)
  await crossPlatformUtils.waitForExist(driver, selectorByTypeAndName(type, name), timeout)
}

const clickByName = async (driver, name) => {
  const element = await findElementByName(name)
  await element.click()
}
const clickByType = async (driver, type) => {
  const element = await findElementByType(type)
  await element.click()
}
const clickByTypeAndName = async (driver, type, name) => {
  const element = await findElementByTypeAndName(driver, type, name)
  await element.click()
}

const getTextByTypeAndName = async (driver, type, name) => {
  const element = await findElementByTypeAndName(driver, type, name)
  try {
    const elementText = await element.getText()
    return elementText
  } catch (e) {
    return undefined
  }
}

const getValueByTypeAndName = async (driver, type, name) => {
  await waitForExistByTypeAndName(driver, type, name)
  const element = await findElementByTypeAndName(driver, type, name)
  try {
    const elementText = await element.getValue()
    return elementText
  } catch (e) {
    return undefined
  }
}

const iOSUtils = {
  driverOptions,
  findElementByName,
  findElementByType,
  findElementByTypeAndName,
  waitForExistByName,
  waitForExistByType,
  waitForExistByTypeAndName,
  clickByName,
  clickByType,
  clickByTypeAndName,
  getTextByTypeAndName,
  getValueByTypeAndName,
}

module.exports = iOSUtils
