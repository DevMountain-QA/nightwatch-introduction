const selectors = require('../supporting/selectors')
const functions = require('../supporting/functions')
const data = require('../supporting/data')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
        functions.buttonClicker(browser, 'AC')
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => functions.uiChecker(browser),

    'Simple Addition' : browser => {
        data.simpleAddition(browser, [2,2])
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
<<<<<<< HEAD:nightwatch/step4/tests/myTests.js
        /*
        browser
            .click(selectors['2'])
            .expect.element(selectors['result']).text.to.equal('2')
        browser.click(selectors['+'])
            .expect.element(selectors['result']).text.to.equal('0')
            
        browser
            .click(selectors['2'])
            .expect.element(selectors['result']).text.to.equal('2')
        browser
            .click(selectors['='])
            .expect.element(selectors['result']).text.to.equal('4')
            */
=======
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '+')
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '=')
        browser.expect.element(selectors['result']).text.to.equal('4')
>>>>>>> c449c8c2dd80dbf03f2c5ab1a253197a3a9784a4:nightwatch/step4/tests/tests.js
    },
    '32.1*2=64.2' : browser => {
        functions.buttonClicker(browser, '3')
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '.')
        functions.buttonClicker(browser, '1')
        functions.buttonClicker(browser, '*')
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '=')
        browser.expect.element(selectors['result']).text.to.equal('64.2')
    }
}