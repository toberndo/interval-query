 
var intervals = function(from, to, num, range, maxLen, int) {
  for(var i = 0; i < num; i++) {
    var a,b;
    a = Math.random() * range;
    b = a + Math.random() * maxLen;
    //console.log('%d,%d', a, b);
    if (int) {
      a = Math.floor(a);
      b = Math.floor(b);
    }
    from.push(a);
    to.push(b);
  }
}

module.exports.intervals = intervals;