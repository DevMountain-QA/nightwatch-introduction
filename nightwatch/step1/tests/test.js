module.exports = {
    beforeEach : browser => {
        //loads the page url before each test execution
        browser.url('http://localhost:3000')
    },
    after : browser => {
        //closes the browser after each test execution
        browser.end()
    },

    checkDefaultDisplay: browser =>
    {
        //checks the initial display of the calculator
        browser.expect.element("span[name ='result']").text.to.equal('0');
    },

    checkKeys: browser =>
    {
        //ensures that keys display numbers properly
        browser.click("button[name = '2Button']")
        //ensures appropriate number appears on display when numbers are keyed
        browser.expect.element("span[name ='result']").text.to.equal('2')
        browser.click("button[name = '2Button']")
        //ensures subsequent numbers are appended to existing display with no leading zeros
        browser.expect.element("span[name = 'result']").text.to.equal('22')
        browser.click("button[name = 'addButton']")
        browser.pause(500)
        //checks display to be zero when a mathematical operator is selected
        browser.expect.element("span[name ='result']").text.to.equal('0')
    },

    checkAdd: browser =>
    {
        //checks the functionality of the add and equals buttons
        browser.click("button[name = '2Button']")
        browser.pause(1000)
        browser.click("button[name = 'addButton']")
        browser.pause(1000)
        browser.click("button[name = '4Button']")
        browser.pause(1000)
        browser.click("button[name = 'equalsButton']")
        browser.pause(500)
        browser.expect.element("span[name ='result']").text.to.equal('6')
    },

    checkMultiply: browser =>
    {
        //checks the functionality of the multiply button
        browser.click("button[name = '2Button']")
        browser.pause(1000)
        browser.click("button[name = 'multiplyButton']")
        browser.pause(1000)
        browser.click("button[name = '4Button']")
        browser.pause(1000)
        browser.click("button[name = 'equalsButton']")
        browser.pause(500)
        browser.expect.element("span[name ='result']").text.to.equal('8')
    },

    checkSubtract: browser =>
    {
        //checks the functionality of the subtract button
        browser.click("button[name = '8Button']")
        browser.click("button[name = 'subtractButton']")
        browser.click("button[name = '2Button']")
        browser.click("button[name = 'equalsButton']")
        browser.pause(500)
        browser.expect.element("span[name = 'result']").text.to.equal('6')
    },

    checkDivide: browser =>
    {
        //checks the functionality of the divide button
        browser.click("button[name = '8Button']")
        browser.click("button[name = 'divideButton']")
        browser.click("button[name = '2Button']")
        browser.click("button[name = 'equalsButton']")
        browser.pause(500)
        browser.expect.element("span[name = 'result']").text.to.equal('4')
    },

    checkNegative: browser =>
    {
        //checks the functionaity of the negative button
        browser.click("button[name = '8Button']")
        browser.click("button[name = 'negativeButton']")
        browser.expect.element("span[name ='result']").text.to.equal('-8')
        browser.click("button[name = 'negativeButton']")
        browser.pause(500)
        browser.expect.element("span[name ='result']").text.to.equal('8')
    },

    checkPercent: browser =>
    {
        //checks percent button functionality
        browser.click("button[name = '8Button']")
        browser.click("button[name = 'percentButton']")
        browser.pause(500)
        browser.expect.element("span[name = 'result']").text.to.equal('0.08')
    },

    checkClear: browser =>
    {
        //checks clear button functionality
        browser.click("button[name = '8Button']")
        browser.click("button[name = 'clearButton']")
        browser.pause(500)
        browser.expect.element("span[name = 'result']").text.to.equal('0')
    },

    checkComplex: browser =>
    {
        //checks the computation of a math problem requirng three steps.
        browser.click("button[name = '2Button']")
        browser.click("button[name = 'addButton']")
        browser.click("button[name = '4Button']")
        browser.click("button[name = 'multiplyButton']")
        browser.click("button[name = '2Button']")
        browser.click("button[name = 'equalsButton']")
        browser.pause(500)
        browser.expect.element("span[name = 'result']").text.to.equal('12')
    },

    checkSuperComplex: browser =>
    {
        //checks the computation of a math problem requiring at least 40 steps
        browser.click("button[name = '2Button']")
        for(i=0;i<40;i++)
        {
        browser.click("button[name = 'addButton']")
        browser.click("button[name = '2Button']")
        browser.click("button[name = 'equalsButton']")
        browser.pause(500)
        }
        browser.expect.element("span[name = 'result']").text.to.equal('82')
    },

}