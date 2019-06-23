Fizzbuzz project second weekend

Author: Camilla Kirkegaard

Explain: 
1. global.browser = new BrowserHelpers()
2. global.expect = chai.expect;
3. In your README to the best of your knowledge please explain the difference between using === and == in JS?



Available helpers
https://www.npmjs.com/package/e2e_training_wheels#available-helpers
browser.getContent(element)
browser.fillIn(element, {with: string})
browser.clickOnButton(element)
browser.getElement(element)
browser.selectOption(element, {option: string})
browser.selectCheckBox(element)
browser.selectRadioButton(element)
browser.debugTheCode()
- Set breakpoint in tests: await browser.debugTheCode();
- Set breakpoint in code: debugger;