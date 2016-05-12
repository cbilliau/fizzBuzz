// FizzBuzz
// Create app that counts from 1 to 100.
  // For each not divisible by 3 or 5 print number.
  // If number is divisible by 3, print 'frizz'.
  // If number is divisible by 5, print 'buzz'.
  // If number is divisible by 5 and 3, print 'fizzbuzz'.
  $(function(){
    // Wait for html to fully load
    var userNumber;
    // Set global var userNumber
    var fizzBuzzifier = function(num){
      // declare function expression with param 'num'.
      var i;
      // Set var with function scope
      for ( i = 1; i <= num; i++ ) {
        // for loop; iterate over param 'num'
        if ( i % 5 === 0 && i % 3 === 0 ) {
          $('#main').append('<p>FizzBuzz</p>');
        } else if ( i % 5 === 0 ) {
          $('#main').append('<p>Buzz</p>');
        } else if ( i % 3 === 0 ) {
          $('#main').append('<p>Fizz</p>');
        } else {
          $('#main').append('<p>' + i + '</p>');
        }
      }
    };

    while ( (isNaN(userNumber)) && (userNumber % 1 != 0)) {
      // While loop to ensure prompt value is a number
      userNumber = prompt('Enter a whole number');
      userNumber = +userNumber;
      // Convert value of string to a number.
    }

    fizzBuzzifier(userNumber);
    // trigger fizzbuzz event with prompt value as param.

  });
