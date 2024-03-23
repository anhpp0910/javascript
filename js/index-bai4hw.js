// Bài 1: Xuất 3 số theo thứ tự tăng dần
document.getElementById("btnBai1").onclick = function () {
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);
  var soThu3 = Number(document.getElementById("soThu3").value);
  var temp = 0;
  // chuyển số bé nhất vào soThu1
  if (soThu1 > soThu2) {
    temp = soThu1;
    soThu1 = soThu2;
    soThu2 = temp;
  }
  if (soThu1 > soThu3) {
    temp = soThu1;
    soThu1 = soThu3;
    soThu3 = temp;
  }
  // chuyển số bé nhì vào soThu2
  if (soThu2 > soThu3) {
    temp = soThu2;
    soThu2 = soThu3;
    soThu3 = temp;
  }
  document.getElementById("ketQuaBai1").innerHTML =
    soThu1 + ", " + soThu2 + ", " + soThu3;
};

// Bài 2: Viết chương trình chào hỏi
document.getElementById("btnBai2").onclick = function () {
  var user = document.getElementById("user").value;
  var chaoHoi = "";
  if (user === "B") {
    chaoHoi = "Chào bác trai!";
  } else if (user === "M") {
    chaoHoi = "Chào bác gái!";
  } else if (user === "A") {
    chaoHoi = "Chào bạn!";
  } else if (user === "E") {
    chaoHoi = "Chào em!";
  } else {
    chaoHoi = "Vui lòng chọn người dùng!!!";
  }
  document.getElementById("ketQuaBai2").innerHTML = chaoHoi;
};

// Bài 3: Đếm số số chẵn, số lẻ
document.getElementById("btnBai3").onclick = function () {
  var soThuNhat = Number(document.getElementById("soThuNhat").value);
  var soThuHai = Number(document.getElementById("soThuHai").value);
  var soThuBa = Number(document.getElementById("soThuBa").value);
  var countOdd = 0;
  var countEven = 0;
  if (soThuNhat % 2 === 0) {
    countEven += 1;
  } else countOdd += 1;
  if (soThuHai % 2 === 0) {
    countEven += 1;
  } else countOdd += 1;
  if (soThuBa % 2 === 0) {
    countEven += 1;
  } else countOdd += 1;
  document.getElementById(
    "ketQuaBai3"
  ).innerHTML = `Số số chẵn là: ${countEven} <br> Số số lẻ là: ${countOdd}`;
};

// Bài 4: Xét dạng tam giác
document.getElementById("btnBai4").onclick = function () {
  var canh1 = Number(document.getElementById("canh1").value);
  var canh2 = Number(document.getElementById("canh2").value);
  var canh3 = Number(document.getElementById("canh3").value);
  var type = "";
  if (
    canh1 * canh1 === canh2 * canh2 + canh3 * canh3 ||
    canh2 * canh2 === canh1 * canh1 + canh3 * canh3 ||
    canh3 * canh3 === canh1 * canh1 + canh2 * canh2
  ) {
    type = "Tam giác vuông";
  } else if (canh1 === canh2 && canh1 === canh3) {
    type = "Tam giác đều";
  } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
    type = "Tam giác cân";
  } else {
    type = "Tam giác thường";
  }
  document.getElementById("ketQuaBai4").innerHTML = type;
};
