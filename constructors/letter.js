function Letter(conversionWord) {
  this.value = conversionWord;
  this.arr = conversionWord.split('');
  this.hide = function() {
    for(var i = 0; i < this.arr.length; i++) {
      if(this.arr[i] !== ' ') {
        this.arr[i] = '_';
      }
    }
  }
}

module.exports = Letter;