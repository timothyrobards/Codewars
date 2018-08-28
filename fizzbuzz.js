function solution(number){
  var output = [0, 0, 0];
  for (var i = 1; i < number; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) output[0] += 1;
    else if (i % 5 === 0 && i % 3 !== 0) output[1] += 1;
    else if (i % 3 === 0 && i % 5 === 0) output[2] += 1;
  }
  return output;
}


// typical solution:
//
//  for (var i=1; i < 101; i++){
//      if (i % 15 == 0) console.log("FizzBuzz");
//      else if (i % 3 == 0) console.log("Fizz");
//      else if (i % 5 == 0) console.log("Buzz");
//      else console.log(i);
//  }