String.prototype.toAlternatingCase = function() {
  var output = '';
  for (var i=0; i<this.length; i++) {
    if (this[i].toLowerCase() === this[i]) {
      output = output + this[i].toUpperCase();
    } else if (this[i].toUpperCase() === this[i]) {
      output = output + this[i].toLowerCase();
    } else {
      output = output + this[i];
    }
  }
  return output;
}
console.log('hello world'.toAlternatingCase(), '|', 'HELLO WORLD');
console.log('HELLO WORLD'.toAlternatingCase(), '|', 'hello world');
console.log('12345'.toAlternatingCase(), '|', '12345');
console.log('1a2b3c4d5e'.toAlternatingCase(), '|', '1A2B3C4D5E');