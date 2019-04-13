//工具类，里面有一些辅助方法，如：创建元素.
class Utils {
  createElement(el, content, className) {
    let element = document.createElement(el)
    element.classList.add(className)
    if(content) {
      element.innerHTML = ` 
      <svg class="icon" aria-hidden="true">
        <use xlink:href="${content}"></use>
      </svg>`
    }
    return element
  }
  bindEvents(map) {
    let handleKeyBoard = new HandleKeyBoard(map)
    document.body.addEventListener('keydown', handleKeyBoard.keydown.bind(handleKeyBoard));
  }
}