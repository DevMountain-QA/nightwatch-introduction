
# Nightwatch Introduction

## Outline and Overview

We have here a basic calculator app that you will be utilizing to start your test automation career. NightwatchJS is our automation framework of choice, and step by step you will become familiar with the process of automating tests. One step at a time we'll build a set of automated tests to cover the requirements and acceptance criteria, which can be found below. 

Every step is in a separate folder. Look in the file explorer of the project, and open the `nightwatch` folder. Notice that there are multiple folders inside, one for page objects (which you'll learn about), then four steps, and a solution).
* For each step in the instructions below, use the corresponding step folder.
* The folder for the next step is sort of a solution folder for the step before.
  * i.e. `step2` contains the files you might have at the end of `step1`. The only exception is that the solution to `step4` is in `theSolution`.
* To run each step's tests, use the command `npm run step*` where `*` is the step number.
  * i.e. for Step 1 you would use the command `npm run step1`. The only exception is that to check the full solution you could use the command `npm run solution`.

**IMPORTANT** You need to start the application before running tests, use the command `npm start` to do so.

## How To Use This Project

There is a Table of Contents below you can use for quick navigation. First follow the *Setup* instructions and review the *Requirements*. Then, proceed through the steps, *completing ONLY the steps you have been instructed to do*. Do your best to complete the project with just basic instructions. Detailed instructions and code solutions are provided; if you need to use them, try to re-do the step again without using anything extra. Repeat as necessary.

* **[Setup and Requirements](https://github.com/devmtn-aj/nightwatch-introduction#setup-and-requirements)** - READ.
> Read through the [requirements](https://github.com/devmtn-aj/nightwatch-introduction#requirements) and the acceptance criteria. These will give context to what you should be looking for when you test. Click around in the calculator. Make sure you understand how it works - THEN you can get started in automating tests.

* **[Step 1](https://github.com/devmtn-aj/nightwatch-introduction#step-1)** `nightwatch/step1`
> This will cover creating a test case using NightwatchJS.

* **[Step 2](https://github.com/devmtn-aj/nightwatch-introduction#step-2)** `nightwatch/step2`
> This will refactor that test using a page object!

* **[Step 3](https://github.com/devmtn-aj/nightwatch-introduction#step-3)** `nightwatch/step3`
> We will create a function that will check the UI of the calculator, and another to click buttons.

* **[Step 4](https://github.com/devmtn-aj/nightwatch-introduction#step-4)**
`nightwatch/step4`
> This will introduce a data file, and data driven testing.

* **[Stretch Goals](https://github.com/devmtn-aj/nightwatch-introduction#stretch-goals)**
> If you've finished the project and want to keep expanding your skills, look here for stretch goals!

***

## Setup and Requirements

### Setup

To begin, clone this repository to your machine. In your terminal navigate to the folder where you will keep your projects (src or devmtn or projects, whatever you named it). There, run the following command:

`git clone https://github.com/DevMountain-QA/nightwatch-introduction.git`

Once it has finished downloading `cd` into the project root.

`cd nightwatch-introduction`

Now, run `npm i` to install the project dependencies.

`npm i`

After they are installed run `npm start` and a browser window will open at `http://localhost:3000` displaying a (fully functional) calculator app.

`npm start`

* You will need to write up a `nightwatch.props.js` file, or **copy one from another repository if you already have one**. There are some detailed instructions below on setting one up.

<details>

<summary> <code> nightwatch.props.js </code> </summary>

<br />

In this file we'll store the path to the `testing-resources` folder you created before, as well as the filenames for your `seleniumServer` and `chromedriver`. **MAKE SURE** the version on your Selenium server matches the version on *your* machine. Also the resource path needs to be to *your* testing resources folder, not to mine.

```js
module.exports = {
    resourcePath : "/Users/ajlarson/src/testing-resources/",
    seleniumServer: "selenium-server-standalone-3.11.0.jar", //or whatever version you have
    chromedriver: "chromedriver"
}
```

* For Windows computers, you have a different pathing format, so your `resourcePath` may look something like:

```js
    resourcePath : "C:\\Users\\AJ\\src\\testing-resources\\"
```

* Also for Windows, your `chromedriver` listing needs to be `chromedriver.exe`

```js
    chromedriver: "chromedriver.exe"
```

* You can use relative paths as well...

```js
    resourcePath : "../testing-resources/" 
```

  instead of 

```js
    resourcePath : "/Users/ajlarson/src/testing-resources/"
```

</details>

### The Format

***

### Requirements For The Calculator

#### Basic Functionality

1. The display defaults to '0'
1. When numbers are keyed, the appropriate number appears on the display. Subsequent numbers will be appended to the existing display, and no leading zeros will be included.
   * Pressing "1", "2", "0" the resulting display will be "120"
1. One decimal can be added to the number. Only the first decimal click will be accepted.
1. When a mathematical operator is selected, the display will display a '0' until the subsequent number in the calculation is entered.
   * Pressing "1", "+" will result in a "0" on the display
1. Mathematical operations are completed appropriately when the "=" button is selected
   * Pressing "1", "+", "2", "=" will result in a "3" on the display

#### Additional Functionality

1. "+/-" is a key which will flip the positive/negative value of the current number
   * If "2.5" is displayed and "+/-" is selected, "-2.5" will be displayed and used in calculations instead
1. "%" will divide a number by 100 -- showing "decimal notation" for the percentage
   * If "81" is on the screen and the "%" button is selected, "0.81" will be displayed and used in future calculations
1. "A/C" will clear all pre-existing calculations and start fresh from an empty "0" display

#### Acceptance Criteria

1. The buttons should appear in an order and configuration consistent with most simple calculators
1. Complex chains of calculations should be possible
   * 12 + 2 / 42 - 3, take the result and continue, '%' * 530, etc
   * At least one test should be completed with a set of at least 40 button presses 


Now that we have setup out of the way, and you've had a chance to review the app's requirements, we can start in on actually testing it.

***

## Step 1

### Summary

For this assignment, we will forgo the need of formal test plans and test cases in JIRA. Instead, we should come up with a consistent set of steps we can use in our testing. The fact that this is a single page application makes things a lot simpler in that regard - one set of steps can fulfill our needs. We'll take those and write a simple automated test.

### Instructions

* Outline an acceptable set of steps to check whether the calculator can perform calculations provided in a test case
* The test case would consist of the calculation to perform, and the expected result
* Create one simple test in the `step1/tests/tests.js` file.
* You can use plain strings for your `selectors` (i.e. `'button[name="equalsButton"]'` instead of something like `selectors.buttons.equal`)
* Finally, create at least TWO more test cases on your own for this calculator, following the same pattern as in the earlier step.

<details>

<summary> Detailed Instructions </summary>

Based on the above rules, an effective set of test steps would be something like the following:

> 1. Click the listed buttons in sequence 
> 1. The display should update correctly after each button press

Super simple, but it would get the job done.

A matching test case could be like the following:

> **Precondition**: Open the calculator. The calculation for the test is 2+2

> **Postcondition**: The displayed result is 4

Simplicity at its best, right?

Your `tests.js` file already exists in the `nightwatch/step1/tests` folder, and is configured with its `beforeEach`, `after`, etc. Now you can add a test to the exported object as a new property, like below:

```js
//In nightwatch, tests are "properties" of the exported "test object", and the name of the test
//is the property's "key" while the test function is the "value".
'2+2=4' : browser => {
	
}
```

Remember, in objects, you have comma separated properties, and each property is comprised of a key and a value. So in our test object `'2+2=4'` is now the key of a new property, and `browser => {}` is the value of the new property.

Populating this new test ought to be fairly straightforward. We need to click the buttons, then read the final solution. Use the **Inspector** tool in Google Chrome to build your selectors. Remember when building your selector that any CSS or XPath selector will work (you can get more info [here](https://www.w3schools.com/cssref/css_selectors.asp) on building selectors), but the ones that follow a `tag[attributeName=attributeValue]` format are the most effective in my experience. These will help Nightwatch know EXACTLY what element (item in the page) to interact with. For any test, you need selectors for anything you interact with, as well as anything you need to read/verify. If I were going to pull selectors from this project, just for the test case listed above, they'll be for the `2`, `4`, `+` and `=` buttons, then the result display.

Note: Try to pull them on your own, but you can verify them below (as well as with the `$$()` or `$x()` Chrome console functions).

<details>

<summary> Selectors for Step 1 </summary>

* `'button[name="2Button"]'`
* `'button[name="addButton"]'`
* `'button[name="equalsButton"]'`
* `'button[name="4Button"]'`
* `'span[name="result"]'`

</details>

Now I have all I need to automate a test.

1. A test case that includes data
1. A test procedure / test steps
1. Selectors

Using `NightwatchJS` functions to write this test out, I should only need two. `.click()` and `.expect.element().text.to.equal()`. Both are properties of the `browser` object and work as follows:

`.click()`
> Only needs a selector as an argument, i.e. `.click('button[name="equalsButton"]')`
> This will literally click whatever element the selector provided identifies, just as if we had clicked manually.

`.expect.element().text.to.equal()`
> A combination of functions, technically, all you really need to know is that the `.element()` part needs a selector, from which it will pull the text value. The `.equal()` needs the value we expect to find in the element's text. I.e. `.expect.element('span[name="result"]').text.to.equal('4')`
> This is an 'assertion', similar to `.assert` or `.verify` commands. We use these to check and make sure results are as expected. In this case, to check if the text contained within an element matches what we think it should be.
> Note: while you can chain `.click()`s and other functions one after another without having to type `browser` again, an `.expect` of any sort ends the chain. Also, if an `.expect` fails, the test is marked failed, and all remaining steps are skipped.

Using these two bits of functionality from Nightwatch, I can write the simple test below.

```js
//In nightwatch, tests are "properties" of the exported "test object", and the name of the test is the property's "key" while the test function is the "value".
'2+2=4' : browser => {
	//I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
	browser
		.click('button[name="2Button"]')
		.expect.element('span[name="result"]').text.to.equal('2')
	browser
		.click('button[name="addButton"]')
		.expect.element('span[name="result"]').text.to.equal('0')
	browser
		.click('button[name="2Button"]')
		.expect.element('span[name="result"]').text.to.equal('2')
	browser
		.click('button[name="equalsButton"]')
		.expect.element('span[name="result"]').text.to.equal('4')
}
```

After I've saved this test, I can run the `step1` tests using the command `npm run step1`. Your results should look like this:

<img src="https://raw.githubusercontent.com/devmtn-aj/nightwatch-introduction/solution/readme-assets/step1Results.png"/>

If you have any errors to debug, you can do so... You can also check your code against the solution below.

Now you can go ahead and write two additional tests, using the same steps you followed for the first test, choosing a different mathematical formula of course.

Test your tests on occasion by saving the file then using the command `npm run step1`.

### Code Solution

<details>

<summary> <code> step1/tests/tests.js </code> </summary>

```js
module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },

    after : browser => {
        browser.end()
    },
    
    '2+2=4' : browser => {
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
        browser
            .click('button[name="2Button"]')
            .expect.element('span[name="result"]').text.to.equal('2')
        browser
            .click('button[name="addButton"]')
            .expect.element('span[name="result"]').text.to.equal('0')
        browser
            .click('button[name="2Button"]')
            .expect.element('span[name="result"]').text.to.equal('2')
        browser
            .click('button[name="equalsButton"]')
            .expect.element('span[name="result"]').text.to.equal('4')
    }
}
```

</details>

</details>

## Step 2

### Summary

Now that we've written a basic test and seen it run, now we can start to take advantage of a structure used across many different testing frameworks, the Page Object. We have talked about it in class, and you can find the official documentation [here](http://nightwatchjs.org/guide#page-objects).

### Instructions

* Note the `pageObjects` folder inside of the `nightwatch` folder.
* The `"page_objects_path"` property has already been set in the `nightwatch.conf.js` file, and it points to this `pageObjects` folder.
* Inside of that folder, create a `calculator.js` file, and export a page object containing the calculator's url and all the selectors you may need for your tests.
* Refactor your original test to utilize this page object.

<details>

<summary> Detailed Instructions </summary>

First we need to create the `calculator.js` file, inside of the `pageObjects` folder, which is inside of the repository's `nightwatch` folder.

In that `calculator.js` file we'll export the object that will become our page o ject.

```js
module.exports = {

}
```

It's as simple as that. Now we just need to populate the object with properites. First we'll add a property for the url, where the key is `url` and the value is the url we need for the calculator app, `http://localhost:3000`. Next we need to add our selectors. In a page object, we will add a property called `elements`.

The `elements` property will be another object containing all the selectors we may need to use. The good news is that you already know how to build your selectors, `tag[attributeName=attributeValue]` for CSS, or in other formats for XPath. We even had a few already in our last test. So go out and start grabbing tags and attributes to build your selectors for all of the buttons in the calculator, and the display.

To add these to the `elements` property, you can just add the name of the selector as the key, and the selector as a value *if* the selector is a CSS selector. If it is an XPath selector, the value is instead another object. This one has two properties, `selector` with the value of the XPath selector, and `locateStrategy` with the value of `xpath`. Technically you can use this format for CSS selectors as well, with `locateStrategy` set to `css` but that just adds overhead.

You can see how I got started below:

```js
module.exports = {
    url: 'http://localhost:3000',
    elements: {
        '0Button' : 'button[name="0Button"]',
        '1Button' : 'button[name="1Button"]',
	//....
        'divideButton': 'button[name="divideButton"]',
	//etc.
}
```

You get the idea.

With these values in our page object file, we can then start using them in our `tests.js` file, back in the `tests` folder of `step2`. It's already prepopulated with everything from `step1`, we can start using the page object. One key function is that we can use it to navigate to the page's url, where it will automatically wait until the page is loaded to proceed with our test. Don't forget to initialize the page object before you use it!

```js
module.exports = {
    beforeEach: browser => {
        let calculator = browser.page.calculator()
        calculator.navigate()
    },
```

Now we're prepared to refactor our original `'2+2=4'` test with the selectors from our page object. We can do this by initializing the page object replacing any standard `browser` calls in the app with the page object. Then we will replace any of the plain string selectors (i.e. `'button[name="2Button"]'`) with a page object reference (i.e. `'@2Button'`.

Here's an example of how I could do that.

```js
    '2+2=4': browser => {
        let calculator = browser.page.calculator()
        calculator
            .click('@2Button')
            .expect.element('@result').text.to.equal('2')
        calculator
            .click('@addButton')
            .expect.element('@result').text.to.equal('0')
    		//...
```

Now, after replacing all the string selectors with those from our page object, I can run my tests using the command `npm run step2` this time, with something like the following result:

<img src="https://raw.githubusercontent.com/devmtn-aj/nightwatch-introduction/solution/readme-assets/step1Results.png"/>

### Code Solution

<details>

<summary> <code> pageObjects/calculator.js </code> </summary>

```js
module.exports = {
    url: 'http://localhost:3000',
    elements: {
        '0Button' : 'button[name="0Button"]',
        '1Button' : 'button[name="1Button"]',
        '2Button' : 'button[name="2Button"]',
        '3Button': 'button[name="3Button"]',
        '4Button': 'button[name="4Button"]',
        '5Button': 'button[name="5Button"]',
        '6Button': 'button[name="6Button"]',
        '7Button': 'button[name="7Button"]',
        '8Button': 'button[name="8Button"]',
        '9Button': 'button[name="9Button"]',
        'addButton': 'button[name="addButton"]',
        'subtractButton': 'button[name="subtractButton"]',
        'multiplyButton': 'button[name="multiplyButton"]',
        'divideButton': 'button[name="divideButton"]',
        'equalsButton': 'button[name="equalsButton"]',
        'percentButton': 'button[name="percentButton"]',
        'negativeButton': 'button[name="negativeButton"]',
        'clearButton': 'button[name="clearButton"]',
        'decimalButton': 'button[name="decimalButton"]',
        'result': 'span[name="result"]'
    }
}
```

</details>

<details>

<summary> <code> step2/tests/tests.js </code> </summary>

```js
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
```

</details>

</details>

## Step 3

### Summary

We're now ready to start attempting functions. We'll begin with something simple, like a function that will check the user interface of the application for us. We could run this at the start of every test (in our `beforeEach` even) if we wanted, though it should only be necessary to check once.

Once that function is set up, we'll create one that we're likely to use a little more often, a function to click buttons and check the corresponding result!

### Instructions

* Write a function that will look over the UI of the application
* You can verify things like visibility, text, whatever you want
* This function should be executed before any other tests are run
* Then write a function that can click an element and check the calculator display for the appropriate result

<details>

<summary> Detailed Instructions </summary>

Now that we'll be creating functions to aid us in testing, let's create a folder for them. In our `nightwatch/step3` folder, create a new folder named `functions`. Inside of this folder create a file named `uiCheck.js`. We'll use the `module.export` command to export an anonymous function, like in the example below.

```js
module.exports = () => {

}
```

We should do the following with our new file:
1. Modify it to take the calculator page object as a parameter
1. Do checks for visibility, text, whatever else we may want

Considering what we want any function to do, we'll need to figure out if we need any inputs/arguments, and if it needs to output/return anything.
1. We'll need access to our page object that has all of the selectors pre-defined
  * The easiest way to do this will be to simply pass in the `calculator` page object we define in our `tests.js` file - this will also let us write up our expects or do anything else we'd to using the `browser` in our `tests.js` files.
1. As this is the only place in the test we need to define their value directly, we can just type out the button text manually.
1. With the page object passed in, our test will pass or fail the test appropriately in our function. As such, we won't need to return any values.

Now that we've identified what our function is going to do (check the buttons and display for displayed text in this case), arguments it needs (the `calculator`), and what it returns (nothing), we can get writing. 

```js
module.exports = calculator => {

}
```

Let's get to it! Let's write a `browser.expect` statment for each element to check that they have the right text values! You can always review the [NightwatchJS API Docs](http://nightwatchjs.org/api) (which I recommend) for the proper syntax, but I'll tell you this time, it's `browser.expect.element(selector).text.to.equal(text)`. I'll give you a few examples below to get you started.

```js
    calculator.expect.element('@0Button').text.to.equal('0')
    calculator.expect.element('@1Button').text.to.equal('1')
    calculator.expect.element('@2Button').text.to.equal('2')
    // and so on through all the buttons until you get to the end
    calculator.expect.element('@result').text.to.equal('0')
```

All that's left to do for this function is to create a new test, preferably the first test we'll run. This is so that if the UI is totally broken, Nightwatch will skip the other tests in the file automatically.

We'll create the new test right after the `after` function is declared, and before the first custom test (one with a string name) is declared.

```js
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => functions.uiCheck(),
```

In that declaration, we're missing something. We need to pass in the `calculator` page object! The good news is that we can declare it right where we call the `uiCheck` function.

```js
    'UI Check' : browser => functions.uiCheck(browser.page.calculator()),
```

Now lets run the test using `npm run step3`, and see how we do!

<img src="https://raw.githubusercontent.com/devmtn-aj/nightwatch-introduction/solution/readme-assets/step1Results.png"/>

While your assertion count might not match the image above, it's certainly going to be higher than any we've had before!

With our first function out of the way, we can try one that's a little less striaghtforward. This is the function that clicks a button and verifies the display.

Following the same steps we used to design our uiCheck function, we need to know what we need passed in, and what we'll need to return.
1. To click a button and check a result, we'll need to have access to
  * The calculator page object
  * The button to be clicked
  * The expectedd result
2. Again, with our test passing or failing on the spot, nothing needs to be returned.

To create this function, create a new file inside of the `step3/functions` folder. Call it `clickButton.js`. It's initial setup will look just like our `uiCheck.js` file.

```js
module.exports = () => {

}
```

This time, however, we need several arguments. The calculator page object, the button to click, and the expected result. (Note, where when we only have one argument, we don't need parenthesis around the argument, when we have several, we do need parenthesis to group them up).

```js
module.exports = (calculator, button, result) => {

}
```

We know that whatever button is passed in, we'll be clicking it using our calculator page object - so we're set to go to add the first bit of functionality.

```js
    calculator
        .click(button)
```

This does assume that the `button` parameter passed in is in the page object notation (`'@elementName'`), so keep that in mind when we implement this function.

So we've clicked the button. Next thing to do is check that the display updated correctly.

```js
    calculator
        .click(button)
        .expect.element('@result').text.to.equal(result)
```

We can use the `'@result'` reference directly here, since no matter what button we click, the result element always stays the same. The `result` that we use here is the expected text result that will be passed into this function.

There's one more little tweak we can add to our expect here. Sometimes when we click buttons or change inputs, our test script can move faster than the browser. To be certain that the process has just a moment to catch up to us, we can add one more piece, `.before()`.

```js
    .expect.element('@result').text.to.equal(result).before(500)
```

We'll give it 500 milliseconds to wait, and then if the text doesn't match the test will fail. As soon as the text *does* match, the test will proceed automatically.

Our button clicking function is ready to roll!

In our `step3/tests.js` file, we need to require our new function, up at the top near where we required the `uiCheck` function.

```js
const uiCheck = require('../functions/uiCheck')
const clickButton = require('../functions/clickButton')
```

Now that we have it, let's create a new test, `32.1*2=64.2`. This will check decimals, multi-digit, and a couple of operators. We'll start up the page object, call `clickButton` for each button press, and that's it!

```js
    '32.1*2=64.2' : browser => {
        let calculator = browser.page.calculator()
        clickButton(calculator, '@3Button', '3')
        clickButton(calculator, '@2Button', '32')
        clickButton(calculator, '@decimalButton', '32.')
        clickButton(calculator, '@1Button', '32.1')
        clickButton(calculator, '@multiplyButton', '0')
        clickButton(calculator, '@2Button', '2')
        clickButton(calculator, '@equalsButton', '64.2')
    }
```

There you have it. Run the tests again! (`npm run step3`)

<img src="https://raw.githubusercontent.com/devmtn-aj/nightwatch-introduction/solution/readme-assets/step3Results.png"/>

You should get something similar to this! If you get errors, look back over your functions and test, you can also compare the files to the code solution below.

You can also rework your existing test(s) now with the `clickButton` function!

Good work stepping into the world of functions. In our next step, we'll start incorporating a data file!

### Code Solution

<details>

<summary> <code> step3/functions/uiCheck.js </code> </summary>

```js
module.exports = calculator => {
    calculator.expect.element('@0Button').text.to.equal('0')
    calculator.expect.element('@1Button').text.to.equal('1')
    calculator.expect.element('@2Button').text.to.equal('2')
    calculator.expect.element('@3Button').text.to.equal('3')
    calculator.expect.element('@4Button').text.to.equal('4')
    calculator.expect.element('@5Button').text.to.equal('5')
    calculator.expect.element('@6Button').text.to.equal('6')
    calculator.expect.element('@7Button').text.to.equal('7')
    calculator.expect.element('@8Button').text.to.equal('8')
    calculator.expect.element('@9Button').text.to.equal('9')
    calculator.expect.element('@addButton').text.to.equal('+')
    calculator.expect.element('@subtractButton').text.to.equal('-')
    calculator.expect.element('@multiplyButton').text.to.equal('×')
    calculator.expect.element('@divideButton').text.to.equal('÷')
    calculator.expect.element('@equalsButton').text.to.equal('=')
    calculator.expect.element('@percentButton').text.to.equal('%')
    calculator.expect.element('@negativeButton').text.to.equal('+/-')
    calculator.expect.element('@clearButton').text.to.equal('AC')
    calculator.expect.element('@decimalButton').text.to.equal('.')
    calculator.expect.element('@result').text.to.equal('0')
}
```

</details>

<details>

<summary> <code> step3/functions/clickButton.js </code> </summary>

```js
module.exports = (calculator, button, result) => {
    calculator
        .click(button)
        .expect.element('@result').text.to.equal(result).before(500)
}
```

</details>

<details>

<summary> <code> step3/tests/tests.js </code> </summary>

```js
const uiCheck = require('../functions/uiCheck')
const clickButton = require('../functions/clickButton')

module.exports = {
    beforeEach : browser => {
        let calculator = browser.page.solutionCalculator()
        calculator.navigate()
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => uiCheck(browser.page.calculator()),
    '2+2=4' : browser => {
        let calculator = browser.page.calculator()
        clickButton(calculator, '@2Button', '2')
        clickButton(calculator, '@addButton', '0')
        clickButton(calculator, '@2Button', '2')
        clickButton(calculator, '@equalsButton', '4')
    },
    '32.1*2=64.2' : browser => {
        let calculator = browser.page.calculator()
        clickButton(calculator, '@3Button', '3')
        clickButton(calculator, '@2Button', '32')
        clickButton(calculator, '@decimalButton', '32.')
        clickButton(calculator, '@1Button', '32.1')
        clickButton(calculator, '@multiplyButton', '0')
        clickButton(calculator, '@2Button', '2')
        clickButton(calculator, '@equalsButton', '64.2')
    }
}
```

</details>

</details>

## Step 4

### Overview

Here is where the rubber really hits the road. We'll set up a data file and then get some data driven testing going!

### Instructions

* Create a folder for test data, and a data file in there.
* Require this in the `step4/tests/tests.js` file and use it for all your data (inputs, expected results, etc)
* Ideally you can do this without referring to the detailed instructions
* We haven't tested the '%' button yet, or '+/-', so do that in the new test

<details>

<summary> Detailed Instructions </summary>

Create yourself a `test-data` folder inside of the `step4` folder. Inside of the new folder, create a file named `data.js`.

In practice, you'll set up and require your `data.js` file almost the same way you set up and called your functions, except that we'll make it export an object...

```js
module.exports = {

}
```

```js
//adding it to the filed required in tests.js
const uiCheck = require('../functions/uiCheck')
const clickButton = require('../functions/clickButton')
const testData = require('../test-data/data')
```

With this framework, we want to create properties in our `data.js` export that each contain all the data for one test. So, in the files prepped already for Step 4, we have two tests, so we'll need two corresponding properties in the `data.js` exported object. And while our test names before were easily understood, `'32.1*2=64.2'` is a pain to write over and over again. We'll name the object for our `2+2=4` function `simpleAddition`, and the other `decimalMultiplication`.

```js
module.exports = {
    simpleAddition : [],
    decimalMultiplication : []
}
```

Now, each test data object should track all the inputs and the outputs. For another app this may be more complicated, but for our simple calculator, we have buttons pressed, and expected results. We can handle this pretty easily by making each of the `data.js` properties a list of buttons and results. We'll do this by making them arrays of objects!

Researching arrays and object would be a great stretch goal!

```js
module.exports = {
    simpleAddition : [
        {button : '', result : ''}
    ],
    decimalMultiplication : [
        {button : '', result : ''}
    ]
}
```

With the framework in place, we can popluate the buttons and solution accordingly.

```js
module.exports = {
    simpleAddition : [
        {button : '@2Button', result : '2'},
        {button : '@addButton', result : '0'},
        {button : '@2Button', result : '2'},
        {button : '@equalsButton', result : '4'},
    ],
    decimalMultiplication : [
        {button : '@3Button', result : '3'},
        {button : '@2Button', result : '32'},
        {button : '@decimalButton', result : '32.'},
        {button : '@1Button', result : '32.1'},
        {button : '@multiplyButton', result : '0'},
        {button : '@2Button', result : '2'},
        {button : '@equalsButton', result : '64.2'},
    ]
}
```

Now that we have our data file ready to go for our existing tests, we'll refactor them, so that any time they declared an input or expected result, we'll get it from our data file.

For example, the `2+2=4` test would look like

```js
'2+2=4' : browser => {
    let calculator = browser.page.calculator()
    clickButton(calculator, testData.simpleAddition[0].button, testData.simpleAddition[0].button)
    clickButton(calculator, testData.simpleAddition[1].button, testData.simpleAddition[1].button)
    clickButton(calculator, testData.simpleAddition[2].button, testData.simpleAddition[2].button)
    clickButton(calculator, testData.simpleAddition[3].button, testData.simpleAddition[3].button)
}
```

*Note*: Array indexes start at 0 instead of 1, so an array with 4 items, like the 4 button presses in `simpleAddition` runs from 0-3 instead of 1-4.

What we have above doesn't really look that much easier to deal with... Actually, it looks like more work than what we had before, and that's not what we're aiming for. Now's the time for the real magic to happen. Do you recognize a step that is happening over and over in our test?

...

How about the four `clickButton()` function calls? Let's abstract those out into a new function!

In our `step4/functions` folder, create a new function named `mathRunner.js`. It's time to plan it out.

If we're going to abstract out the `clickButton()` function calls we'll need:
1. Access to the clickButton function
1. Anything the clickButton needs
  * a calculator page object
  * the test data

With this knowledge in hand, we can start setting up the function.

```js
const clickButton = require('./clickButton')

module.exports = (calculator, problem) => {

}
```

Notice, I didn't call the test data `data` or anything. We'll call it `problem` since really, this will be executing math problems on the calculator for us. You could really call it `joebob` if you wanted to, so long as you stayed consistent. Try to go with something that makes *some* sense though.

So. Our function has access ot the `clickButton` function (since we required it), and it has the `calculator` page object as well as the `problem`, which will be the entire `simpleAddition` property from our `test-data/data.js` file. You'll see how to use that next.

The properties from our `data.js` file were arrays, remember? Lists of objects with buttons to press and results to check. Depending on what we pass this function, our `problem` argument could have a value like:

```js
[
    {button : '@2Button', result : '2'},
    {button : '@addButton', result : '0'},
    {button : '@2Button', result : '2'},
    {button : '@equalsButton', result : '4'},
]
```

There's a nifty thing in most scripting languages called a loop. It makes it easy to step through a list like an array. In JavaScript we have something even cooler. Built into each array is a function called `forEach` that lets us step through it's contents, doing something with each piece.

If we did this with the `problem` array listed out above, we'd set it up like so:

```js
    problem.forEach(click => {

    })
```

In this example, we're calling each of the objects in the `problem` array `click`. So the first time through this loop `click` will be `{button : '@2Button', result: '2'}`. The second time through it will be `{button : '@addButton', result: '0'}` and so forth.

Do you remember what we intended to do in the first place with this `mathRunner` function? Abstract out our `clickButton` function calls.

We can implement this really easily now, calling `clickButton` for each of the loop's `click`s.

```js
problem.forEach(click => {
    clickButton(calculator, click.button, click.result)
})
```

When all is said and done, if we called this for the `problem` value we've been talking about, this is the same as writing out:

```js
    clickButton(calculator, '@2Button', '2')
    clickButton(calculator, '@addButton', '0')
    clickButton(calculator, '@2Button', '2')
    clickButton(calculator, '@equalsButton', '4')
```

Look familiar? It should. That's what we wantedd to abstract out in the first place! Now we can simplify the ugly stuff we put into our `step4/tests/tests.js` file.

First we'll need to give our `tests.js` file access to the `mathRunner` function. We can just replace the `clickButton` require statement, as our `tests.js` file won't need it any more.

```js
const uiCheck = require('../functions/uiCheck')
const mathRunner = require('../functions/mathRunner')
const testData = require('../test-data/data')
```

After that, we ipmlement the `mathRunner` function!

```js
'2+2=4' : browser => {
    let calculator = browser.page.calculator()
    clickButton(calculator, testData.simpleAddition[0].button, testData.simpleAddition[0].button)
    clickButton(calculator, testData.simpleAddition[1].button, testData.simpleAddition[1].button)
    clickButton(calculator, testData.simpleAddition[2].button, testData.simpleAddition[2].button)
    clickButton(calculator, testData.simpleAddition[3].button, testData.simpleAddition[3].button)
}
```

becomes

```js
'simpleAddition' : browser => {
    mathRunner(browser.page.solutionCalculator(), testData.simpleAddition)
}
```

You can do the same thing now for the longer multiplication problem!

```js
'decimalMultiplicaiton' : browser => {
    mathRunner(browser.page.solutionCalculator(), testData.decimalMultiplication)
}
```

Test that sucker out. (`npm run step4`)

<img src="https://raw.githubusercontent.com/devmtn-aj/nightwatch-introduction/solution/readme-assets/step4Results.png"/>

Your results might look slightly different, but you should be good to go! If not, check for errors. Now! Try and add one more test, one that checks the OTHER buttons we haven't checked before. Doing so is simple. Add the following test script to your `step4/tests/tests.js` file:

```js
'otherButtons' : browser => {
    mathRunner(browser.page.solutionCalculator(), testData.otherButtons)
}
```

Now we'll need to add an `otherButtons` property to our `test-data/data` file, but that shouldn't be too tough! Just make sure to include button presses and result checks for the buttons we haven't checked yet. That part will be up to you to come up with.

### Code Solution

<details>

<summary> <code> step4/test-data/data.js </code> </summary>

```js
module.exports = {
    simpleAddition : [
        {button : '@2Button', result : '2'},
        {button : '@addButton', result : '0'},
        {button : '@2Button', result : '2'},
        {button : '@equalsButton', result : '4'},
    ],
    decimalMultiplication : [
        {button : '@3Button', result : '3'},
        {button : '@2Button', result : '32'},
        {button : '@decimalButton', result : '32.'},
        {button : '@1Button', result : '32.1'},
        {button : '@multiplyButton', result : '0'},
        {button : '@2Button', result : '2'},
        {button : '@equalsButton', result : '64.2'},
    ],
    otherButtons : [
        {button : '@5Button', result : '5'},
        {button : '@4Button', result : '54'},
        {button : '@2Button', result : '542'},
        {button : '@1Button', result : '5421'},
        {button : '@percentButton', result : '54.21'},
        {button : '@negativeButton', result : '-54.21'},
        {button : '@addButton', result : '0'},
        {button : '@2Button', result : '2'},
        {button : '@equalsButton', result : '-52.21'},        
    ]
}
```

</details>

<details>

<summary> <code> step4/functions/mathrunner.js </code> </summary>

```js
const clickButton = require('./clickButton')

module.exports = (calculator, problem) => {
    problem.forEach(click => {
        clickButton(calculator, click.button, click.result)
    })
}
```

</details>

<details>

<summary> <code> tests.js </code> </summary>

```js
const uiCheck = require('../functions/uiCheck')
const mathRunner = require('../functions/mathRunner')
const testData = require('../test-data/data')

module.exports = {
    beforeEach : browser => {
        let calculator = browser.page.calculator()
        calculator.navigate()
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => uiCheck(browser.page.calculator()),
    'simpleAddition' : browser => {
        mathRunner(browser.page.calculator(), testData.simpleAddition)
    },
    'decimalMultiplicaiton' : browser => {
        mathRunner(browser.page.calculator(), testData.decimalMultiplication)
    },
    'otherButtons' : browser => {
        mathRunner(browser.page.calculator(), testData.otherButtons)
    }
}
```

</details>

</details>

## Stretch Goals

### Overview

Now that you've been introduced to data driven testing, you're in a great place to dive even deeper! If you're feeling brain dead, don't push yourself. The last thing you need is to forget the things you've learned. That being said, if you're ready to learn more, use your resources (documentation, friends, google, etc) to research and/or implement the following topics.

* JavaScript Arrays and Objects
* NightwatchJS Custom Commands
* NightwatchJS Custom Assertions

For this particular project, the stretch goal would be to implement at least ONE custom command. Good luck!

## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2018. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">