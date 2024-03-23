// VD1
document.getElementById("btnVd1").onclick = function () {
  var input1 = Number(document.getElementById("iVd1").value);
  var output1 = "";
  var dem1 = 1;
  while (dem1 <= input1) {
    var div = '<div class="alert alert-success">Hello cybersoft</div>';
    output1 += div;
    dem1++;
  }
  document.getElementById("ketQua1").innerHTML = output1;
};

// VD2
document.getElementById("btnVd2").onclick = function () {
  var input2 = Number(document.getElementById("iVd2").value);
  var output2 = 1;
  var dem2 = 1;
  while (dem2 <= input2) {
    output2 *= dem2++;
  }
  document.getElementById("ketQua2").innerHTML = output2;
};

// VD3
document.getElementById("btnVd3").onclick = function () {
  var input3 = Number(document.getElementById("iVd3").value);
  var output3 = 0;
  var dem3 = 1;
  while (dem3 <= input3) {
    output3 += dem3++;
  }
  document.getElementById("ketQua3").innerHTML = output3;
};

// VD4
document.getElementById("btnVd4").onclick = function () {
  var input4 = Number(document.getElementById("iVd4").value);
  var output4 = 0;
  var dem4 = 2;
  while (dem4 <= input4) {
    // if (dem4 % 2 === 0) {
    //   output4 += dem4;
    // }
    // dem4++;
    output4 += dem4;
    dem4 += 2;
  }
  document.getElementById("ketQua4").innerHTML = output4;
};

// VD5 Cách 1
// document.getElementById("btnVd5").onclick = function () {
//   var input5 = Number(document.getElementById("iVd5").value);
//   var output5 = "";
//   var dem5 = 1;
//   var soUoc = 0;
//   while (dem5 <= input5) {
//     if (input5 % dem5 === 0) {
//       soUoc++;
//     }
//     dem5++;
//   }
//   if (soUoc === 2) {
//     output5 = input5 + " là số nguyên tố!";
//   } else {
//     output5 = input5 + " không phải là số nguyên tố!";
//   }
//   document.getElementById("ketQua5").innerHTML = output5;
// };

// VD5 Cách 2
document.getElementById("btnVd5").onclick = function () {
  var input5 = Number(document.getElementById("iVd5").value);
  var output5 = "";
  var checkSoNT = true;
  var dem5 = 2;
  if (input5 === 0 || input5 === 1) {
    checkSoNT = false;
  }
  while (dem5 <= Math.sqrt(input5)) {
    if (input5 % dem5 === 0) {
      checkSoNT = false;
      break;
    }
    dem5++;
  }
  if (checkSoNT) {
    output5 = input5 + " là số nguyên tố!";
  } else {
    output5 = input5 + " không phải là số nguyên tố!";
  }
  document.getElementById("ketQua5").innerHTML = output5;
};

// VD6 Cách 1: Vòng lặp while
// document.getElementById("btnVd6").onclick = function () {
//   var input6 = Number(document.getElementById("iVd6").value);
//   var output6 = "";
//   var dem6 = 1;
//   while (dem6 <= input6) {
//     output6 += " *";
//     dem6++;
//   }
//   document.getElementById("ketQua6").innerHTML = output6;
// };

// VD6 Cách 1: Vòng lặp for
document.getElementById("btnVd6").onclick = function () {
  var input6 = Number(document.getElementById("iVd6").value);
  var output6 = "";
  for (var dem6 = 1; dem6 <= input6; dem6++) {
    output6 += ' <i class="fa fa-star text-warning"></i>';
  }
  document.getElementById("ketQua6").innerHTML = output6;
};

// VD7
document.getElementById("btnVd7").onclick = function () {
  var soHang = Number(document.getElementById("soHang").value);
  var soCot = Number(document.getElementById("soCot").value);
  var output7 = "";
  for (var soHangVe = 1; soHangVe <= soHang; soHangVe++) {
    output7 += in1HangSao(soCot) + "<br>";
  }
  document.getElementById("ketQua7").innerHTML = output7;
};

// VD8
document.getElementById("btnVd8").onclick = function () {
  var input8 = Number(document.getElementById("iVd8").value);
  var output8 = "";
  for (var targetNum = 2; targetNum <= input8; targetNum++) {
    if (IsPrime(targetNum)) {
      output8 += targetNum + " ";
    }
  }
  document.getElementById("ketQua8").innerHTML = output8;
};
