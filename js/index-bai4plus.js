// VD1: Tính tiền phạt thẻ tín dụng
document.getElementById("btnVd1").onclick = function () {
  var creditCardBalance = Number(document.getElementById("soDuThe").value);
  var payment = Number(document.getElementById("tienThanhToan").value);
  var balance = payment - creditCardBalance;
  if (balance > 0) {
    var penalty = (balance / 100) * 1.5;
    console.log(balance);
    console.log(penalty);
    document.getElementById("ketQuaVd1").innerHTML =
      "Tiền phạt tháng này là: " + (balance + penalty);
  } else {
    balance = -balance;
    document.getElementById("ketQuaVd1").innerHTML =
      "Số dư còn: " + balance.toLocaleString() + " VND. Không bị nợ !!";
  }
};

// VD2: Tính tiền lương
document.getElementById("btnVd2").onclick = function () {
  var hours = Number(document.getElementById("soGioLam").value);
  var pay = Number(document.getElementById("tienLuong1Gio").value);
  var rate = 1.5;
  if (hours > 40) {
    var totalSalary = pay * 40 + pay * (hours - 40) * rate;
  } else {
    totalSalary = hours * pay;
  }
  document.getElementById("ketQuaVd2").innerHTML =
    "Tiền lương tuần này của bạn là: " + totalSalary.toLocaleString() + " VND";
};

// VD3: Tính tiền hàng
document.getElementById("btnVd3").onclick = function () {
  var soLuong = Number(document.getElementById("soLuong").value);
  var donGia = Number(document.getElementById("donGia").value);
  console.log(soLuong);
  console.log(donGia);
  if (soLuong > 0 && soLuong < 50) {
    var thanhTien = donGia * soLuong;
    console.log(thanhTien);
  } else if (soLuong >= 50 && soLuong <= 100) {
    thanhTien = donGia * soLuong * 0.92;
  } else if (soLuong > 100) {
    thanhTien = donGia * soLuong * 0.88;
  } else {
    document.getElementById("ketQuaVd3").innerHTML =
      "Số lượng không hợp lệ !!!";
  }
  document.getElementById("ketQuaVd3").innerHTML =
    "Tiền hàng của bạn là: " + thanhTien.toLocaleString() + " VND";
};

// VD4: Xếp loại sinh viên
document.getElementById("btnVd4").onclick = function () {
  var ten = document.getElementById("ten").value;
  var diemToan = Number(document.getElementById("diemToan").value);
  var diemLy = Number(document.getElementById("diemLy").value);
  var diemHoa = Number(document.getElementById("diemHoa").value);
  var diemTB = (diemToan + diemLy + diemHoa) / 3;
  var ketQua = "";
  if (diemTB >= 8.5 && diemToan >= 0 && diemLy >= 0 && diemHoa >= 0) {
    ketQua = "Giỏi";
    document.getElementById("ketQuaVd4").innerHTML =
      "Sinh viên " + ten + " xếp loại: " + ketQua;
  } else if (
    diemTB >= 6.5 &&
    diemTB < 8.5 &&
    diemToan >= 0 &&
    diemLy >= 0 &&
    diemHoa >= 0
  ) {
    ketQua = "Khá";
    document.getElementById("ketQuaVd4").innerHTML =
      "Sinh viên " + ten + " xếp loại: " + ketQua;
  } else if (
    diemTB >= 5 &&
    diemTB < 6.5 &&
    diemToan >= 0 &&
    diemLy >= 0 &&
    diemHoa >= 0
  ) {
    ketQua = "Trung bình";
    document.getElementById("ketQuaVd4").innerHTML =
      "Sinh viên " + ten + " xếp loại: " + ketQua;
  } else if (
    diemTB >= 0 &&
    diemTB < 5 &&
    diemToan >= 0 &&
    diemLy >= 0 &&
    diemHoa >= 0
  ) {
    ketQua = "Yếu";
    document.getElementById("ketQuaVd4").innerHTML =
      "Sinh viên " + ten + " xếp loại: " + ketQua;
  } else {
    document.getElementById("ketQuaVd4").innerHTML =
      "Vui lòng nhập điểm hợp lệ !!!";
  }
};

// VD5: Xét tháng hợp lệ
document.getElementById("btnVd5").onclick = function () {
  var month = Number(document.getElementById("month").value);
  var checkMonth = "";
  switch (month) {
    case 1:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 31";
      }
      break;
    case 2:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 28";
      }
      break;
    case 3:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 31";
      }
      break;
    case 4:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 30";
      }
      break;
    case 5:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 31";
      }
      break;
    case 6:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 30";
      }
      break;
    case 7:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 31";
      }
      break;
    case 8:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 31";
      }
      break;
    case 9:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 30";
      }
      break;
    case 10:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 31";
      }
      break;
    case 11:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 30";
      }
      break;
    case 12:
      {
        checkMonth = "Tháng hợp lệ. Số ngày 31";
      }
      break;
    default: {
      checkMonth = "Tháng không hợp lệ !!!";
    }
  }
  document.getElementById("ketQuaVd5").innerHTML = checkMonth;
};
