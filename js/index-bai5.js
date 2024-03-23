// VD1
function inNoiDung(id, noiDung) {
  document.getElementById(id).innerHTML = noiDung;
  document.getElementById(id).style.textAlign = "center";
}

inNoiDung("pThongTin", "ThienNT");
inNoiDung("sThongTin", "AnhPP");
inNoiDung("aThongTin", "Do you love me");

// VD2

// document.getElementById("btnTinhDiem").onclick = function () {
//   var diemToan = Number(document.getElementById("diemToan").value);
//   var diemLy = Number(document.getElementById("diemLy").value);
//   var diemHoa = Number(document.getElementById("diemHoa").value);
//   var diemTBKA = (diemToan + diemLy + diemHoa) / 3;
//   document.getElementById("diemTBKA").value = diemTBKA;

//   var diemVan = Number(document.getElementById("diemVan").value);
//   var diemSu = Number(document.getElementById("diemSu").value);
//   var diemDia = Number(document.getElementById("diemDia").value);
//   var diemTBKC = (diemVan + diemSu + diemDia) / 3;
//   document.getElementById("diemTBKC").value = diemTBKC;
// };

function tinhDiemTB3Mon(diemMon1, diemMon2, diemMon3) {
  var diemMon1 = Number(document.getElementById(diemMon1).value);
  var diemMon2 = Number(document.getElementById(diemMon2).value);
  var diemMon3 = Number(document.getElementById(diemMon3).value);
  return (diemTB3Mon = (diemMon1 * 2 + diemMon2 + diemMon3) / 4);
  console.log(123);
}

document.getElementById("btnTinhDiem").onclick = function () {
  document.getElementById("diemTBKA").value = tinhDiemTB3Mon(
    "diemToan",
    "diemLy",
    "diemHoa"
  );
  document.getElementById("diemTBKC").value = tinhDiemTB3Mon(
    "diemVan",
    "diemSu",
    "diemDia"
  );
};

// VD3
document.getElementById("btnZoomInHome").onclick = function () {
  zoomFontSize(5, "home");
};

document.getElementById("btnZoomOutHome").onclick = function () {
  zoomFontSize(-5, "home");
};

// VD4
document.getElementById("btnZoomInText").onclick = function () {
  zoomFontSize(5, "txtContent");
};

document.getElementById("btnZoomOutText").onclick = function () {
  zoomFontSize(-5, "txtContent");
};
