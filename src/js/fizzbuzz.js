function FizzBuzz()  {
    this.check = (number) => {
        if (number <= 0) {
            return 'MORE THAN 0!';
        }
        else if (number % 15 === 0) {
            return 'FIZZBUZZ!';
        }
        else if (number % 5 === 0) {
            return 'BUZZ!';
        }
        else if (number % 3 === 0) {
            return 'FIZZ!';
        } 
        else {
            return number
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
} 