var arrName = ["Anh", "Thiên", "Tâm", "Nguyên", "Nhật"];
arrName[3] = "Tuấn";
console.log(arrName);
console.log(arrName.length);

var content = "";
// Duyệt mảng: In ra màn hình console của browser
for (var index = 0; index < arrName.length; index++) {
  content += '<p class="badge text-bg-light">' + arrName[index] + "</p>";
}
console.log(content);
document.getElementById("content-array").innerHTML = content;

// Hàm thêm dữ liệu vào mảng
// // push(): Hàm thêm 1 hoặc nhiều giá trị vào cuối mảng
// arrName.push("Ngọc");

// // unshift(): Hàm thêm 1 hoặc nhiều giá trị vào đầu mảng (làm thay đổi chỉ số index nên ít sử dụng)
// arrName.unshift("Suzuki", "Minh");
// console.log(arrName);

// Hàm xoá giá trị ra khỏi mảng
// splice(): Xoá 1 hoặc nhiều giá trị trong mảng => Thay đổi index cũng như length của mảng
// arrName.splice(2, 1);
// console.log(arrName);

// shift(): Lấy ra 1 phần tử ở đầu mảng và xoá ra khỏi mảng
//pop(): Lấy ra 1 phần tử ở cuối mảng và xoá phần tử đó
var mem1 = arrName.shift();
console.log("mem1", mem1);
console.log(arrName);

var mem2 = arrName.pop();
console.log("mem2", mem2);
console.log(arrName);

// DOM qua tagName
var arrTagSection = document.getElementsByTagName("section");
arrTagSection[1].innerHTML = "I love you";
arrTagSection[1].style.color = "green";
console.log("arrTagSection", arrTagSection);

for (var index = 0; index < arrTagSection.length; index++) {
  arrTagSection[index].className = "badge text-bg-dark m-2";
}

// DOM qua className
var arrTagClass = document.getElementsByClassName("txt");
console.log("arrTagClass", arrTagClass);

for (var index = 0; index < arrTagClass.length; index++) {
  var tag = arrTagClass[index];
  tag.innerHTML = "Hello cả nhà";
  tag.className = "txt alert alert-info";
}

// DOM qua name
var arrTagName = document.getElementsByName("text-demo");
console.log("arrTagName", arrTagName);
arrTagName[0].style.color = "navy";
for (var index = 0; index < arrTagName.length; index++) {
  var tag = arrTagName[index];
  tag.innerHTML = "Hello cả nhà iu của kem!!";
  tag.className = "text-demp alert alert-success";
}

/*
.querySelector(selector): Khi dom đến dựa vào querySelector
thì kết quả trả về là 1 thẻ đầu tiên khớp với selector đó 
(dù có nhiều thẻ có selector giống nhau). Nếu không có thẻ
nào khớp với selector đó thì kết quả trả về là undefined
*/

document.querySelector("#btnSubmit").onclick = function () {
  var pText1 = document.querySelector(
    ".demo-selector .p-text:nth-of-type(2)"
  ).innerHTML;
  alert(pText1);
};

/*
.querySelectorAll(selector): Khi dom đến dựa vào querySelectorAll
thì kết quả trả về là 1 mảng. Lưu ý: Nếu như chỉ có 1 thẻ khớp
với selector thì nó vẫn trả về 1 mảng và mảng đó có 1 phần tử.
Nếu không khớp phần tử nào thì kết quả là []
*/

document.querySelector("#btnDangNhap").onclick = function (event) {
  event.preventDefault(); // Hàm chặn sự kiện reload lại trang mặc định của browser khi submit
  var arrTagInput = document.querySelectorAll("#form input");
  console.log("taiKhoan", arrTagInput[0].value);
  console.log("matKhau", arrTagInput[1].value);
  console.log("abc", arrTagInput);
};
