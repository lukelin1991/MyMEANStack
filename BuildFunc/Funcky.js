// function runningLogger(){
//   console.log('I am running!');
// }
//
// function multiplyByTen(x){
//   return x*10;
// }
// console.log(multiplyByTen(5));

function stringReturnOne(){
  return "BLARGHAOEGKNSLADGASG";
}

function stringReturnTwo(){
  return "me two";
}

// function caller(o){
//   console.log(typeof o);
//   if (typeof o == "function"){
//     console.log(o());
//   }
// }
//
// caller(stringReturnOne);

// function myDoubleConsoleLog(a, b){
//   console.log(typeof a);
//   console.log(typeof b);
//   if (typeof a == "function" && typeof b == "function"){
//     console.log(a());
//     console.log(b());
//   }
// }
//
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);


function caller2(z){
  console.log('starting');
  var y = setTimeout(function(){
    if (typeof z == "function"){
      console.log(z());
    }
  }, 2000);
}

caller2(stringReturnOne);
