var topw244 = document.getElementById("topw244")
var beginw244 = document.getElementById("beginw244")
var endw244 = document.getElementById("endw244")
var tabw244 = document.getElementById("tabw244")
//复制内容
endw244.innerHTML = beginw244.innerHTML
//调整table的宽度
tabw244.style.width = topw244.offsetWidth * 2
//循环函数
function marqueew244 () {
  if (endw244.offsetWidth - topw244.scrollLeft <= 0) {
    topw244.scrollLeft -= beginw244.offsetWidth
  } else {
    topw244.scrollLeft += 1
  }
}
//定时器
var mymarw244 = setInterval(marqueew244, 50)
//鼠标移入
topw244.onmouseover = function () {
  clearInterval(mymarw244)
}
//鼠标移出
topw244.onmouseout = function () {
  mymarw244 = setInterval(marqueew244, 50)
}