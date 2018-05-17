const uiCheck = require('../functions/uiCheck')
const clickButton = require('../functions/clickButton')

module.exports = {
    beforeEach : browser => {
        let calculator = browser.page.solutionCalculator()
        calculator.navigate()
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => uiCheck(browser.page.solutionCalculator()),
    '2+2=4' : browser => {
        let calculator = browser.page.solutionCalculator()
        clickButton(calculator, '@2Button', '2')
        clickButton(calculator, '@addButton', '0')
        clickButton(calculator, '@2Button', '2')
        clickButton(calculator, '@equalsButton', '4')
    },
    '32.1*2=64.2' : browser => {
        let calculator = browser.page.solutionCalculator()
        clickButton(calculator, '@3Button', '3')
        clickButton(calculator, '@2Button', '32')
        clickButton(calculator, '@decimalButton', '32.')
        clickButton(calculator, '@1Button', '32.1')
        clickButton(calculator, '@multiplyButton', '0')
        clickButton(calculator, '@2Button', '2')
        clickButton(calculator, '@equalsButton', '64.2')
    }
}