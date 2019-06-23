function FizzBuzz()  {
    this.check = (number) => {
        if (number % 15 === 0) {
            return 'FIZZBUZZ!';
        }
        if (number % 5 === 0) {
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