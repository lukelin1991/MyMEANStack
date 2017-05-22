function fib(){
  var prevNum = 0;
  var currNum = 1;

  function nacci(){
    console.log(currNum);
    var temp = prevNum;
    prevNum = currNum;
    currNum = currNum + temp;
  }
  return nacci
}
var fibCounter = fib();

console.log(0);
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
