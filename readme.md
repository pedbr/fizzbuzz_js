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