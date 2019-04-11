class Utils {
  createElement(el, content, className) {
    console.log(content)
    let element = document.createElement(el)
    element.classList.add(className)
    if(content) {
      element.textContent = content
    }
    console.log(element)
    return element
  }
}