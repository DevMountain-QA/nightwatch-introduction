module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },

    //I click all the required buttons (2 + 2 =) and in return I should get 4//
    '2+2=4': browser => {
        browser
        .click ('button[name="2Button"]')
        .expect.element('span[name="result"]').text.to.equal('2')
        browser
        .click('button[name="addButton"]')
        .expect.element('span[name="result"]').text.to.equal('0')
        browser
        .click ('button[name="2Button"]')
        .expect.element('span[name="result"]').text.to.equal('2')
        browser
        .click ('button[name="equalsButton"]')
        .expect.element('span[name="result"]').text.to.equal('4')
    }

}