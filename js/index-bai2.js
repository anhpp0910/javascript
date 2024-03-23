var tagH3 = document.getElementById("title");

// .innerHTML: Phần nội dung ở giữa 2 thẻ html đóng mở
tagH3.innerHTML = "CyberSoft.edu.vn";

// .value: Phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào

var tagInput = document.getElementById("txt");
tagInput.value = "ThienNT";

//Truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById("num");

console.log(tagInputNumber.value);
// confirm(tagInputNumber.value);

// .src: là nội dung hình ảnh của thẻ img
var tagImg = document.getElementById("love");

tagImg.src = "./img/snoopy_heart.jpeg";

// Định nghĩa hàm: dùng để thực thi một loạt hành động
function sayHello() {
  alert("Hello everyone!");
}

// Lệnh gọi hàm
// sayHello();

/*
Ví dụ 1: Viết chương trình yêu cầu người dùng nhập vào
1 giá trị và khi người dùng bấm hiển thị thì giá trị đó
sẽ in ra tại thẻ span#ketQuaHienThi
*/

function hienThiThongTin() {
  //Lấy giá trị nhập khi gọi hàm hiển thị thông tin
  //input: luôn là string
  var inputVd1 = document.getElementById("giaTriNhap");
  //   console.log(inputVd1.value);
  //output: string
  var output = inputVd1.value;
  //Progress
  //output = inputVd1.value;
  //Xử lý kết quả hiển thị lên giao diện
  var tagSpanKetQua = document.getElementById("ketQuaHienThi");
  tagSpanKetQua.innerHTML = output;
}

/* Ví dụ 2: Nhập vào số tiền lương (1h) và số giờ làm. In ra tổng lương bằng số giờ nhân tiền lương
 */

function tinhTongLuong() {
  //input: tiền lương 1h: number , số giờ làm: number
  var tagTienLuong1h = document.getElementById("tienLuong1h").value;
  var tagSoGioLam = document.getElementById("soGioLam").value;

  console.log(tagTienLuong1h);
  console.log(tagSoGioLam);

  // output: tiền lương 1h và số giờ làm: number
  var tongLuong = 0;
  tongLuong = tagTienLuong1h * tagSoGioLam;
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}

/* Ví dụ 3: Xây dựng form thông báo đăng nhập
 */

// input: tên đăng nhập: string, mật khẩu: string
var btnDangNhap = document.getElementById("btnDangNhap");
btnDangNhap.onclick = function () {
  //anonymous function
  var taiKhoan = document.getElementById("taiKhoan").value;
  var matKhau = document.getElementById("matKhau").value;
  // output: thông báo: string
  var thongBao = "";
  thongBao = "Tài khoản : " + taiKhoan + " - Mật khẩu: " + matKhau;
  var tagKetQua = document.getElementById("ketQuaDangNhap");
  tagKetQua.innerHTML = thongBao;
  tagKetQua.className = "bg-success p-2 m-2 text-white";
};

/*
Ví dụ 4: Tính tiền tip
*/
document.getElementById("btnTinhTien4").onclick = function () {
  var tongTienThanhToan = document.getElementById("tongTienThanhToan").value;
  var phanTramTip = document.getElementById("phanTramTip").value;
  var soNguoiShare = document.getElementById("soNguoiShare").value;
  var tinhTienTip = 0;
  console.log(tongTienThanhToan);
  console.log(phanTramTip);
  console.log(soNguoiShare);
  tinhTienTip = (tongTienThanhToan * phanTramTip) / 100 / soNguoiShare;

  document.getElementById("tienTipTrenNguoi").innerHTML = tinhTienTip + "$";
};
