module.exports = (calculator, button, result) => {
    calculator
        .click(button)
        .expect.element('@result').text.to.equal(result).before(500)
}