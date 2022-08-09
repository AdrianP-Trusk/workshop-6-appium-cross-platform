const selectorByAccessibilityId = (accessibilityId) => `~${accessibilityId}`

const findElementByAccessibilityId = (driver, accessibilityId) => driver.$(selectorByAccessibilityId(accessibilityId))

const waitForExist = async (driver, selector, timeout = 500) => {
  console.log(`wait for exist with selector ${selector}, for ${timeout} sec`)
  await driver.waitUntil(async () => {
    try {
      console.log('trying to find element')
      await driver.$(selector)
      console.log('element found')
      return true
    } catch (e) {
      console.log('element not found')
      return false
    }
  }, { timeout })
}

const waitForExistByAccessibilityId = async (driver, accessibilityId, timeout = 500) => {
  console.log(`wait for exist by accessibility id ${accessibilityId}, for ${timeout} sec`)
  await waitForExist(driver, selectorByAccessibilityId(accessibilityId), timeout)
}

const waitForNotExist = async (driver, selector, timeout = 500) => {
  await driver.waitUntil(async () => {
    try {
      await driver.$(selector)
      return false
    } catch (e) {
      return true
    }
  }, { timeout })
}

const crossPlatformUtils = {
  findElementByAccessibilityId,
  waitForExist,
  waitForExistByAccessibilityId,
  waitForNotExist,
}

module.exports = crossPlatformUtils
