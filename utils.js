//工具类，里面有一些辅助方法，如：创建元素
class Utils {
  createElement(el, content, className) {
    let element = document.createElement(el)
    element.classList.add(className)
    if(content) {
      element.textContent = content
    }
    return element
  }
}