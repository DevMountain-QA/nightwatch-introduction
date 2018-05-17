const uiCheck = require('../functions/uiCheck')
const mathRunner = require('../functions/mathRunner')
const testData = require('../test-data/data')

module.exports = {
    beforeEach : browser => {
        let calculator = browser.page.solutionCalculator()
        calculator.navigate()
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => uiCheck(browser.page.solutionCalculator()),
    'simpleAddition' : browser => {
        mathRunner(browser.page.solutionCalculator(), testData.simpleAddition)
    },
    'decimalMultiplicaiton' : browser => {
        mathRunner(browser.page.solutionCalculator(), testData.decimalMultiplication)
    },
    'otherButtons' : browser => {
        mathRunner(browser.page.solutionCalculator(), testData.otherButtons)
    }
}