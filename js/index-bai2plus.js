// VD1
document.getElementById("btnVd1").onclick = function () {
  document.getElementById("noiDungVd1").innerHTML = "Đã thay đổi rồi nhé!";
  document.getElementById("noiDungVd1").style.color = "green";
};

// VD2
document.getElementById("btnVd2").onclick = function () {
  document.getElementById("noiDungVd2").style.display = "none";
};

// VD3
document.getElementById("batDen").onclick = function () {
  document.getElementById("bulb").src = "./img/pic_bulbon.gif";
};

document.getElementById("tatDen").onclick = function () {
  document.getElementById("bulb").src = "./img/pic_bulboff.gif";
};

// VD4

document.getElementById("btnVd4b").onclick = function () {
  document.getElementById("inputVd4").disabled = true;
  document.getElementById("btnVd4a").disabled = true;
};

// VD5
document.getElementById("btnTaoButton").onclick = function () {
  var btn = document.createElement("button");
  btn.innerHTML = "CYBERSOFT CLICK";
  document.body.appendChild(btn);
};

// VD6
document.getElementById("btnTaoPara").onclick = function () {
  var para = document.createElement("p");
  para.innerHTML = "XIN CHÀO HỌC VIỆN CYBERSOFT";
  document.getElementById("myDIV").appendChild(para);
};
