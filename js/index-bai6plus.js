// VD1
document.getElementById("btnVd1").onclick = function () {
  var num1 = Number(document.getElementById("iVd1").value);
  var count1 = 1;
  var ketQua1 = "";
  while (num1 > 1) {
    num1 = parseInt(num1 / 2);
    ketQua1 += "<div>count: " + count1 + " - num: " + num1 + "</div>";
    count1++;
    console.log("num: " + num1 + " - count: " + count1);
  }
  document.getElementById("ketQua1").style.display = "block";
  document.getElementById("ketQua1").innerHTML = ketQua1;
};

// VD2
document.getElementById("btnVd2").onclick = function () {
  var num2 = Number(document.getElementById("iVd2").value);
  var count2 = 0;
  var sum = 0;
  do {
    count2++;
    sum += count2;
  } while (count2 < num2);
  document.getElementById("ketQua2").style.display = "block";
  document.getElementById("ketQua2").innerHTML = sum;
};

// VD3
document.getElementById("btnVd3").onclick = function () {
  var num3 = Number(document.getElementById("iVd3").value);
  var soChan = "";
  var soLe = "";
  for (var count3 = 0; count3 <= num3; count3++) {
    if (count3 % 2 == 0) {
      soChan += count3 + " ";
    } else {
      soLe += count3 + " ";
    }
  }
  document.getElementById("ketQua3").style.display = "block";
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Các số chẵn: ${soChan} <br> Các số lẻ: ${soLe}`;
};

// VD4
document.getElementById("btnVd4").onclick = function () {
  var num4 = Number(document.getElementById("iVd4").value);
  var sum4 = 0;
  for (var count4 = 2; count4 <= num4; count4 += 2) {
    sum4 += count4;
  }
  document.getElementById("ketQua4").style.display = "block";
  document.getElementById("ketQua4").innerHTML = sum4;
};

// VD5
document.getElementById("btnVd5").onclick = function () {
  var num5 = Number(document.getElementById("iVd5").value);
  var soChiaHetCho3 = "";
  var demSo = 0;
  for (var count5 = 0; count5 <= num5; count5 += 3) {
    soChiaHetCho3 += count5 + " ";
    demSo++;
  }
  document.getElementById("ketQua5").style.display = "block";
  document.getElementById(
    "ketQua5"
  ).innerHTML = `Có ${demSo} số chia hết cho 3 <br>Đó là ${soChiaHetCho3}`;
};
