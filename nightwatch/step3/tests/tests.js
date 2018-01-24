const selectors = require('../supporting/selectors')
const functions = require('../supporting/functions')
const data = require('../supporting/data')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => functions.uiChecker(browser),
    '2+2=4' : browser => {
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
        browser
            .click(selectors[data['2+2=4'].buttons[0]])
            .expect.element(selectors['result']).text.to.equal('2')
        browser
            .click(selectors[data['2+2=4'].buttons[1]])
            .expect.element(selectors['result']).text.to.equal('0')
        browser
            .click(selectors[data['2+2=4'].buttons[2]])
            .expect.element(selectors['result']).text.to.equal('2')
        browser
            .click(selectors[data['2+2=4'].buttons[3]])
            .expect.element(selectors['result']).text.to.equal('4')
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
    },
    '%': browser => {
        browser
        functions.buttonClicker(browser, '')
    },

    '400+20=420': browser => {
        browser
        .click(selectors['4'])
        .expect.element(selectors['result']).text.to.equal('4')
        .click(selectors['0'])
        .expect.element(selectors['result']).text.to.equal('40')
        .click(selectors['0'])
        .expect.element(selectors['result']).text.to.equal('400')
        .click(selectors['+'])
        .expect.equal(selectors['result']).text.to.equal('0')
        .click(selectors['2'])
        .expect.equal(selectors['result']).text.to.equal('2')
        .click(selectors['0'])
        expect.equal(selectors['result']).text.to.equal('20')
        .click(selectors['='])
        .expect.equal(selectors['result']).text.to.equal('420')



    }



}