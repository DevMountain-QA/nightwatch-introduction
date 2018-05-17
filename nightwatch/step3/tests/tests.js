module.exports = {
    beforeEach: browser => {
        let calculator = browser.page.calculator()
        calculator.navigate()
    },
    after: browser => {
        browser.end()
    },
    '2+2=4': browser => {
        let calculator = browser.page.calculator()
        calculator
            .click('@2Button')
            .expect.element('@result').text.to.equal('2')
        calculator
            .click('@addButton')
            .expect.element('@result').text.to.equal('0')
        calculator
            .click('@2Button')
            .expect.element('@result').text.to.equal('2')
        calculator
            .click('@equalsButton')
            .expect.element('@result').text.to.equal('4')
    }
}