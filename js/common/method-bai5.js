function zoomFontSize(size, id) {
  var tagId = domID(id);
  var fontSize = Number(tagId.style.fontSize.replace("px", ""));
  fontSize += size;
  tagId.style.fontSize = fontSize + "px";
}

// Viết hàm trả về 1 thẻ sau khi dom
function domID(id) {
  return document.getElementById(id);
}
