function find_average(array) {
  var sum=0;
  const length=array.length;
  for (i=0;i<length;i++){
  sum+=array[i];
  }
  return sum/length;
}


// or use reduce...

//  function find_average(array) {
//    var sum = array.reduce((a, b) => a + b, 0);
//    return sum/array.length;
//  }