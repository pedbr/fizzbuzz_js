# JavaScript FizzBuzz Challenge

## Author: Pedro Brás
#

Part of the second week of the Craft Academy coding bootcamp, this project consists on the development of the game FizzBuzz using JavaScript.

Along the way, some questions regarding the concepts being used will be posed and answered.

#

#### Question 1. To the best of your knowledge please explain what the following lines of code do:
```
global.browser = new BrowserHelpers()
global.expect = chai.expect;
```

It looks to me that these lines are establishing syntax rules. The first line is similar to an instance being created. Regarding the second line it seems to me that the ```chai``` syntax is being called. This is the syntax we use for testing.
#

#### Question 2. To the best of your knowledge please explain why we are placing the ```let fizzBuzz = new FizzBuzz``` outside the it block?

The ```let fizzBuzz = new FizzBuzz``` is an instance of the Class/Funtions FizzBuzz and it's created as an example of that class to be used for testing. It's located outside the ```it``` block because if it was inside, it could only be used for that specific test. Having it outside will allow us to call out that instance for other tests.
#

#### Question 3. To the best of your knowledge please explain the difference between using ```===``` and ```==``` in JS?

The difference is that the equality using the ```===``` will only be true if the elements that are being compared are from the same type.
#

#### Question 4. To the best of your knowledge please explain why we are moving ```(number % 5 === 0)``` to the top?

The code is read and run from the top to bottom, and adding the ```(number % 5 === 0)``` on the top means that we want that code to run first and be prioritized. So, for example, if we leave the code as it is, and if the input is 15, the output would be Buzz, even though 15 is divisable by 3 and 5 it will return Buzz because that part of the code is on top and it will prioritized. Eventualy we will add a similar condition for the program to return FizzBuzz when the number is divisable by 15, and that code should be added at the top, so that if the input is 30 for instance, even though it is divisable by 3 and 5 as well, the program will return FizzBuzz, again because that part of the code is on the top and will be read first.
#

#### Question 5. To the best of your knowledge please explain the difference between feature and unit test.

Unit test is when we test a specific function or method or any specific block of code to check if they are behaving and outputing the results that we intend. A feature test is a test of an entire functionality (or feature) that it is normally composed not by one piece of code, but by different of intertwined methods,functions and different elements working together.
#

#### Question 6. To the best of your knowledge please explain what this following code does:
```
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
```
This is basicaly a setup for a test. It says that for the to run, before we need to open the browser, to visit a specific URL. Then it is saying that the page needs to be reloaded before each individual test, and finally that the browser needs to close after all the tests are done.
#

#### Question 7. To the best of your knowledge please explain what expectations in the context of testing are.

The very word "expectations" doesn't leave much to the imagination. As the word says, Expectations in contex of testing is the specific outcome or behavior that we want to take out from that specific test. It's what we expect the test to prove.
#

#### Question 8. To the best of your knowledge please write a line to line explanation of what is happening in this code:

```
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
```
The first ```<script>``` tag is calling into the html file the JavaScript file where we created our logic/functionality. The secont one is setting an ```EventListener```, which is a function that sets what piece of code should run when an event happens, for example a click. In this case we first are establishing a button variable and assigning it to the actual button that we have in our html file finding it by it's ID. We do the exact same thing for the ```<div>``` where the result will be dispayled. Finally we add an ```EventListener``` to the button we established before, and saying that when it is clicked it should run our FizzBuzz function and display the result in our html.

