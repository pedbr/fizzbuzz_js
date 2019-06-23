# JavaScript FizzBuzz Challenge

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

