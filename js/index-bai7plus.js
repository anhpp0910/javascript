function myFunction() {
  var x = document.getElementsByClassName("example");
  x[0].style.color = "red";
  x[0].innerHTML = "Xin chào chao xìn!";
}

// Demo array
var a = [9, 3, 5, 8];

// Chiều dài mảng
console.log("Chiều dài mảng " + a.length);

// Truy cập vào các phần tử mảng
for (var i = 0; i < a.length; i++) {
  console.log("a[" + i + "] = " + a[i]);
}

var animals = ["dog", "cat", "tiger"];

// Chiều dài mảng
console.log("Chiều dài mảng " + animals.length);

// Truy cập vào các phần tử mảng
for (var i = 0; i < animals.length; i++) {
  console.log("animals[" + i + "] = " + animals[i]);
}

// push
var pushVD = ["dog", "cat", "tiger"];
console.log('pushVD.push("mouse", "cow"): ', pushVD.push("mouse", "cow"));
console.log(pushVD);

// pop
var popVD = ["dog", "cat", "tiger"];
console.log("popVD.pop(): ", popVD.pop());
console.log(popVD);

// unshift
var unshiftVD = ["dog", "cat", "tiger"];
console.log(
  "unshiftVD.unshift('mouse', 'cow'): ",
  unshiftVD.unshift("mouse", "cow")
);
console.log(unshiftVD);

// shift
var shiftVD = ["dog", "cat", "tiger"];
console.log("shiftVD.shift(): ", shiftVD.shift());
console.log(shiftVD);

// reverse
var numbers = [1, 4, 7, 3];
console.log(numbers.reverse());

// sort tăng dần
console.log(numbers.sort());

// sort giảm dần
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

// join
var colors = ["red", "green", "blue"];
console.log(colors.join(", "));
console.log(colors.join("; "));
console.log(colors.join("|"));

// slice
var colorsSlice = ["red", "green", "blue", "yellow", "gray"];
console.log(colorsSlice.slice(2));
console.log(colorsSlice.slice(1, 3));
console.log(colorsSlice.slice(-2));
console.log(colorsSlice.slice(-3, -2));

// splice
var colorsSplice = ["red", "green", "yellow"];
colorsSplice.splice(1, 0, "orange");
console.log(colorsSplice);

colorsSplice.splice(1, 2, "gold");
console.log(colorsSplice);

console.log("colorsSplice.splice(1, 1);: ", colorsSplice.splice(1, 1));
console.log(colorsSplice);

// concat()
var numbersC = [1, 2];
var nNumbersC = numbersC.concat([3, 4], [5], 8, 9);
console.log(nNumbersC);

// map
var colorsM = ["red", "green", "yellow"];
var upperColors = colorsM.map(function (c) {
  return c.toUpperCase();
});
console.log(upperColors);

// filter
var numbersF = [12, 5, 3, 8, 9, 26];
var evenNum = numbersF.filter(function (n) {
  return n % 2 == 0;
});
console.log(evenNum);

// VD
function clearField() {
  document.getElementById("iVD").value = "";
}

function getNum(num) {
  var NumArr = [];
  NumArr.push(num);
  console.log(NumArr);

  clearField();
}

function addNumToArr() {
  var iVD = Number(document.getElementById("iVD").value);
  var fullNumArr = [getNum(iVD)];
  fullNumArr.push(iVD);
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("ketQua").innerHTML = fullNumArr;
}
