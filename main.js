var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"]
x.push(100);
var newarr = ["hello", "world", "JavaScript is Fun"]
x.push(newarr);
for (var i = 0; i < x.length; i++){
  console.log(x[i]);
}

//create simple loop sums numbs 1-500
var sumnum = 0;
for (var count = 1; count <= 500; count++){
  sumnum = sumnum + count;
};
console.log(sumnum);

// loop through array find min val
var newarr1 = [1, 5, 90, 25, -3, 0];
var min = newarr1[0]
for (var y = 1; y < newarr1.length; y++){
  if (min > newarr1[y]){
    min = newarr1[y];
  }
}
console.log(min);

// loop go through arr find avg
var avg = 0;
var sumnum1 = 0;
for (var y = 0; y < newarr1.length; y++){
  sumnum1 = sumnum1 + newarr1[y];
}
avg = sumnum1/newarr1.length;

console.log(avg);


// for-in loop navigate... object
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var key in newNinja){
  console.log(key,":", newNinja[key]);
}
