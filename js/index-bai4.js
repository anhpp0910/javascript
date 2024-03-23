var a = 5;
var b = 10;
console.log(a == b);

// Toán tử logic
var dk1 = true;
var dk2 = true;
var dk3 = false;

console.log("dk1 = ", dk1);
console.log("dk2 = ", dk2);
console.log("dk3 = ", dk3);
console.log("dk1 && dk2 && dk3", dk1 && dk2 && dk3);

// VD1
document.getElementById("btnVd1").onclick = function () {
  var inputVd1 = document.getElementById("inputVd1").value;
  var ketQua = 0;
  ketQua = inputVd1;
  if (ketQua < 0) {
    ketQua = -inputVd1;
  }
  document.getElementById("ketQuaVd1").innerHTML = ketQua;
};

// VD2
document.getElementById("btnVd2").onclick = function () {
  var inputVd2 = document.getElementById("inputVd2").value;
  var ketQuaVd2 = "";
  if (inputVd2 % 2 == 0) {
    ketQuaVd2 = "Số chẵn";
  } else {
    ketQuaVd2 = "Số lẻ";
  }
  document.getElementById("ketQuaVd2").innerHTML = ketQuaVd2;
};

// VD3
document.getElementById("btnVd3").onclick = function () {
  var inputVd3 = document.getElementById("inputVd3").value;
  var ketQuaVd3 = "";
  if (Number(inputVd3) >= 5) {
    ketQuaVd3 = "Đậu nha :)";
  } else {
    ketQuaVd3 = "Rớt rồi :(";
  }
  document.getElementById("ketQuaVd3").innerHTML = "Kết quả: " + ketQuaVd3;
};

// VD4
document.getElementById("btnVd4").onclick = function () {
  var inputVd4_1 = Number(document.getElementById("inputVd4_1").value);
  var inputVd4_2 = Number(document.getElementById("inputVd4_2").value);
  var max = inputVd4_1;
  if (max < inputVd4_2) {
    max = inputVd4_2;
  }
  document.getElementById("ketQuaVd4").innerHTML = "Kết quả: " + max;
};

// VD5
document.getElementById("btnVd5").onclick = function () {
  var soGioLam = Number(document.getElementById("soGioLam").value);
  var tienCong1Gio = Number(document.getElementById("tienCong1Gio").value);
  var tienCong = 0;
  if (soGioLam <= 40) {
    tienCong = soGioLam * tienCong1Gio;
  } else {
    tienCong = 40 * tienCong1Gio + (soGioLam - 40) * tienCong1Gio * 1.5;
  }
  document.getElementById("ketQuaVd5").innerHTML =
    "Tiền công là: " + tienCong.toLocaleString() + " VND";
};

// VD6
document.getElementById("btnVd6").onclick = function () {
  var diemToan = Number(document.getElementById("diemToan").value);
  var diemLy = Number(document.getElementById("diemLy").value);
  var diemHoa = Number(document.getElementById("diemHoa").value);
  var diemTB = (diemToan + diemLy + diemHoa) / 3;
  var xepLoai = "";
  if (diemTB >= 0 && diemTB < 5) {
    xepLoai = "Không đạt";
  } else if (diemTB >= 5 && diemTB < 8) {
    xepLoai = "Đạt";
  } else if (diemTB >= 8 && diemTB <= 10) {
    xepLoai = "Giỏi";
  } else {
    xepLoai = "Dữ liệu không hợp lệ!!";
  }
  document.getElementById(
    "ketQuaVd6"
  ).innerHTML = `Điểm TB: ${diemTB} - Xếp loại: ${xepLoai}`;
};

// Biểu thức ba ngôi
var number = 14;
var output = "";
// if (number % 2 == 0) {
//   output = "số chẵn";
// } else {
//   output = "số lẻ";
// }
output = number % 2 == 0 ? "số chẵn" : "số lẻ";
console.log(number + " là " + output);

// VD7
document.getElementById("btnDocSo").onclick = function () {
  var soDem = Number(document.getElementById("soDem").value);
  var ketQuaVd7 = "";
  // if (soDem === 1) {
  //   ketQuaVd7 = "Số một";
  // } else if (soDem === 2) {
  //   ketQuaVd7 = "Số hai";
  // } else if (soDem === 3) {
  //   ketQuaVd7 = "Số ba";
  // } else if (soDem === 4) {
  //   ketQuaVd7 = "Số bốn";
  // } else {
  //   ketQuaVd7 = "Vui lòng nhập từ 1 - 4 !!!";
  // }

  // SWITCH CASE
  switch (soDem) {
    case 1:
      {
        ketQuaVd7 = "Số một";
      }
      break;
    case 2:
      {
        ketQuaVd7 = "Số hai";
      }
      break;
    case 3:
      {
        ketQuaVd7 = "Số ba";
      }
      break;
    case 4:
      {
        ketQuaVd7 = "Số bốn";
      }
      break;
    default: {
      ketQuaVd7 = "Vui lòng nhập từ 1 - 4 !!!";
    }
  }
  document.getElementById("ketQuaVd7").innerHTML = ketQuaVd7;
};
