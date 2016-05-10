// FizzBuzz
// Create app that counts from 1 to 100.
  // For each not divisible by 3 or 5 print number.
  // If number is divisible by 3, print 'frizz'.
  // If number is divisible by 5, print 'buzz'.
  // If number is divisible by 5 and 3, print 'fizzbuzz'.

$('div').on('click', 'button', function() {  
  // Create loop that iterates from 1 to 100.
  for (var num = 1; num <=100; num++) {
      // check if iteration is divisble by 3 and 5.
    if ((num % 5) === 0 && (num % 3) === 0) {
        // if divisble by 3 and 5, print 'fizzBuzz'.
      document.write('FIZZBUZZ\n\r');
  }
      // check if iteration is divisble by 5.
    else if ((num % 5) === 0) {
        // if divisble by 5 then print 'buzz'.
      document.write('buzz\n\r');
    }
      // check if iteration is divisble by 3.
    else if     ((num % 3) === 0) {
          // if divisble by 3 then print 'fizz'.
        document.write('fizz\n\r');
    }
    else {
      document.write(num + "\n\r");
    }
  }
});
