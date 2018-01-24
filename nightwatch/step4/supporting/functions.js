const selectors = require('./selectors')
const data = require('../supporting/data')
/**
 * Looks over the UI to make sure needed elements are visible and displaying the right text.  (Buttons and the display)
 * 
 * @param {object} browser     an object provided by NightwatchJS which hooks into the test browser
 */
const uiChecker = browser => {

    //check elements for visibility
    data.selectors.forEach(selector => {
        browser.expect.element(selectors[selector]).to.be.visible
    })

    //check elements for displayed text
    data.display.forEach(display => {
        browser.expect.element(selectors[display]).text.to.equal(display)
    });
}

// keeps track of the number on the calculator display screen based
// on button clicks
var currentDisplay = '0'

/**
 * Clicks a button and checks that the resulting display is correct.
 * If the button clicked is a special operator (=, %, +/-), we won't
 * check the result in this function.
 * 
 * @param {object} browser     an object provided by NightwatchJS which hooks into the test browser
 * @param {string} button      the key of the button to click (corresponds to the keys in selectors.js)
 */
const buttonClicker = (browser, button) => {
    //click the button
    browser.click(selectors[button])
    //verify the display if NOT a special operator
    //if the button is one of the listed 'special operators' we'll just end our function now.
    if (button === '=' || button === '%' || button === '+/-')
        return
    //if the button clicked is not a number or decimal, we handle it a little differently.
    if (isNaN(parseInt(button)) && button !== '.') {
        //current display is returned to 0
        currentDisplay = '0'
        browser.expect.element(selectors['result']).text.to.equal('0')
    }
    else {
        //if the current display is 0, the button clicked will replace it, unless the button is a period.
        if (currentDisplay === '0' && button !== '.')
            currentDisplay = button
        //otherwise, the button clicked is appended to the current display
        else
            currentDisplay += button
        //either way, now we can check the updated display
        browser.expect.element(selectors['result']).text.to.equal(currentDisplay)
    }
}

module.exports = {
    uiChecker: uiChecker,
    buttonClicker: buttonClicker
}