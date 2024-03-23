// Bài 1
document.getElementById("btn1").onclick = function () {
  var sum1 = 0;
  var count1 = 0;
  while (sum1 < 10000) {
    count1++;
    sum1 += count1;
  }
  document.getElementById("ketQua1").style.display = "block";
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: ${count1} <br> Khi đó tổng là: ${sum1}`;
};

// Bài 2
document.getElementById("btn2").onclick = function () {
  var xBai2 = Number(document.getElementById("xBai2").value);
  var nBai2 = Number(document.getElementById("nBai2").value);
  var totalS = 0;
  for (var count2 = 1; count2 <= nBai2; count2++) {
    totalS += Math.pow(xBai2, count2);
  }
  document.getElementById("ketQua2").style.display = "block";
  document.getElementById("ketQua2").innerHTML = totalS;
};

// Bài 3
document.getElementById("btn3").onclick = function () {
  var num3 = Number(document.getElementById("iBai3").value);
  var tich = 1;
  for (var count3 = 1; count3 <= num3; count3++) {
    tich *= count3;
  }
  document.getElementById("ketQua3").style.display = "block";
  document.getElementById("ketQua3").innerHTML = tich;
};

// Bài 4
document.getElementById("btn4").onclick = function () {
  var output4 = "";
  for (var count4 = 1; count4 <= 10; count4++) {
    if (count4 % 2 == 0) {
      output4 += '<div style="background-color: red;">Hello CyberSoft</div>';
    } else {
      output4 += '<div style="background-color: blue;">Hello CyberSoft</div>';
    }
  }
  document.getElementById("ketQua4").style.display = "block";
  document.getElementById("ketQua4").innerHTML = output4;
};

// Bài 5
function isPrime(number) {
  var checkSoNT = true;
  for (var count5 = 2; count5 <= Math.sqrt(number); count5++) {
    if (number % count5 === 0) {
      checkSoNT = false;
      break;
    }
  }
  return checkSoNT;
}

document.getElementById("btn5").onclick = function () {
  var num5 = Number(document.getElementById("iBai5").value);
  var ketQua5 = "";
  for (var targetNum = 2; targetNum <= num5; targetNum++) {
    if (isPrime(targetNum)) {
      ketQua5 += targetNum + " ";
    }
  }
  document.getElementById("ketQua5").style.display = "block";
  document.getElementById("ketQua5").innerHTML = ketQua5;
};
