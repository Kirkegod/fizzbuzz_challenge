Fizzbuzz project second weekend

Author: Camilla Kirkegaard

Explain: 
1. global.browser = new BrowserHelpers()
2. global.expect = chai.expect;
3. explain the difference between using === and == in JS?
4. explain why we are moving (number % 5 === 0) to the top?
5. explain the difference between feature and unit test
6. explain what this following code does:

describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})

7. explain what expectations in the context of testing are

8. write a line to line explanation of what is happening in this code

<script src="js/fizzbuzz.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>


9. explain what a CDN (Content Delivery Network) is?



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