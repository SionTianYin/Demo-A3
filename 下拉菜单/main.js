// 在事件处理程序中，我们使用了 getBoundingClientRect() 方法来获取链接的位置和大小

function showDropdown (event, listId) {
  // 阻止链接默认行为
  event.preventDefault()

  // 获取链接位置
  var link = event.target
  var linkRect = link.getBoundingClientRect()

  // 获取下拉框元素和列表元素
  var dropdown = document.getElementById('dropdown')
  var list = document.getElementById(listId)

  // 设置下拉框位置和大小
  dropdown.style.top = linkRect.bottom + 'px'
  dropdown.style.left = linkRect.left + 'px'
  dropdown.style.width = linkRect.width + 'px'

  // 显示列表
  list.style.display = 'block'
}

function hideDropdown () {
  // 获取下拉框和列表元素
  var dropdown = document.getElementById('dropdown')
  var lists = dropdown.getElementsByClassName('list')

  // 隐藏所有列表
  for (var i = 0; i < lists.length; i++) {
    lists[i].style.display = 'none'
  }
}

// 在文档加载完成后绑定鼠标移出事件
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar')
  navbar.addEventListener('mouseleave', hideDropdown)
})
