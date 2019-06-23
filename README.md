Fizzbuzz weekend project, week 2.

Author: Camilla Kirkegaard

Explain: 

1. global.browser = new BrowserHelpers()
=> BrowserHelper class is a test tool for browsers that has several help methods as, clear cache, find buttons and titles, and also for debugging. 

2. global.expect = chai.expect;
=> Chai is an 'assertion library' for TDD compatible with node. Works with any js testing framework. I think that in that line we are telling the unit test that whenever we use 'assert', we use the one of Chai's. 

3. explain the difference between using === and == in JS?
=> Deep or shallow comparison. === needs both type and value to be identical. == compares values. 

4. explain why we are moving (number % 5 === 0) to the top?
=> In fact, I don't know. It would make more sense to test dividability with 3 first as, dividable with 5 would be more rare. BUT, if the question was about "dividable with 15", then it is important to have that first. E.g. 30 as being dividable with 3, 5 and 15 would generate answer of that which is tested for first. And, the rules are "fizzbuzz" if it is dividable with 15, hence test that first. 

5. explain the difference between feature and unit test
Unit test tests methods and classes, and feature test behavior on webpages. 

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
=> It first sets a comment that will be readable by the tester. Then it puts "async" infront of a anonomous function to be able to use "await". Before the testring the browser is initiated and after done, it loads the webpage on localhost. BeforeEach test the page is reloaded. After each test the browser is closed. 

7. explain what expectations in the context of testing are
=> Weird question. :-/ If you mean "expect()" then we ask the program to perform a task with a certain expected outcome. This expected outcome is then compared with the actual outcome when performing the task.  

8. write a line to line explanation of what is happening in this code

// load the js-file named fizzbuss.js and let all the methods be available in this script. 
<script src="js/fizzbuzz.js"></script>

//everyting in between these script tags should be interpreted as if they were written in a js-file. 
    <script>
        //In the document attach an eventlistener that awaits the page to get reloaded. 
        document.addEventListener('DOMContentLoaded', () => {
            //let our variable button get linked to the html button on the page
            let button = document.getElementById('button')
            //and displayDiv get linked to the (probably output label) display_anser
            let displayDiv = document.getElementById('display_answer')
            //put a listener on the button above and await user (or test) to click it. 
            button.addEventListener('click', () =>{
                //save the value of an element that has "id="value". 
                let value = document.getElementById('value').value
                // create an instance of the class FizzBuzz and save it as fizzbuzz.
                let fizzBuzz = new FizzBuzz
                //save the result [fizz, buzz, fizzbuzz, number] in result, provided by the method check. 
                let result = fizzBuzz.check(value)
                //now present the result of fizzbuzz and display it our label. 
                displayDiv.innerHTML = result;
            })
        })
        //end the script and continue with HTML
    </script>


9. explain what a CDN (Content Delivery Network) is?
=> download content from a server, usually text, graphic or scripts. IT saves band width and reduces cache size. When we used Semantic UI, we used CDN instead of downloading the whole thing. 


