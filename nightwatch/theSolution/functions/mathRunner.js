const clickButton = require('./clickButton')

module.exports = (calculator, problem) => {
    problem.forEach(click => {
        clickButton(calculator, click.button, click.result)
    })
}