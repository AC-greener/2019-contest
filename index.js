// 入口函数
class Main {
  constructor() {
    this.map = new Map().map
    this.utils = new Utils()    //初始化工具类
    this.container = document.querySelector('.container')
    this.app = document.querySelector('#app')
    this.render(this.map[0])   //渲染地图
    this.utils.bindEvents(this.map)  //监听事件
  }
  render(map) {
    this.clearElement(this.container)
    for(let i = 0; i < map.length; i++) {
      let row = this.utils.createElement('div', '', 'row')
      for(let j = 0; j < map[i].length; j++) {
        let template = this.createTemplate(map[i][j])
        let div = this.utils.createElement('div', template, 'item')
        row.appendChild(div)
      }
      this.container.appendChild(row)
    }
    this.app.appendChild(this.container)
  }
  clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  createTemplate(data) {
    let template
    if(data === 'wall') {
      template = '#iconqiang'
    } else if(data === 'floor') {
      template = ''
    } else if(data === 'target') {
      template = '#iconmubiao'
    } else if(data === 'box') {
      template = '#icongift'
    } else if(data === 'boy') {
      template = '#iconhuaji'
    }
    return template
  }
 
}
let main = new Main()
