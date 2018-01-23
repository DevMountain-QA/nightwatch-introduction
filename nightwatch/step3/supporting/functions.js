/**
 * @fileOverview: Function objectives:
 * check every button for visibility
 * check every button for the text it ought to be displaying
 * check the display for visibility and its default text
 * 
 * @author Wilson Wong
 * 
 * @param {object} browser
 * @param {string} button
*/

const selectors = require('./selectors')


const UIChecker = browser => {
    //checks elements for visibility
    browser.expect.element(selectors['0']).to.be.visible
    browser.expect.element(selectors['1']).to.be.visible
    browser.expect.element(selectors['2']).to.be.visible
    browser.expect.element(selectors['3']).to.be.visible
    //go through all buttons until end is reached

    //checks elements for displayed text
    browser.expect.element(selectors['0']).text.to.equal('0')
    browser.expect.element(selectors['1']).text.to.equal('1')
    // continue until end
}



const buttonClicker = (browser, button) => {

    //click the button
    browser.click(selectors[button])

    //verify the display if NOT a special operator
    if (button === '=' || button === '%' || button === '+/-')
        return



    if (isNaN(parseInt(button)) && button !== '.') {
        var currentDisplay = '0'
        browser.expect.element(selectors['result']).text.to.equal('0')
    }

    else {
        if (currentDisplay === '0' && button !== '.')
            currentDisplay = button

        else
            currentDisplay += button
    }

    browser.expect.element(selectors['result']).text.to.equal(currentDisplay)
}

module.exports
{
    UIChecker: UIChecker;
    buttonClicker: buttonClicker;

}