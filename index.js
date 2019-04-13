// 主函数，推箱子的入口
class Main {
  constructor() {
    this.map = new Map().map
    this.index = 0
    this.utils = new Utils()
    this.container = document.querySelector('.container')
    this.app = document.querySelector('#app')
    this.render(this.map[0])
    this.bindEvents(this.map)
  }
  render(map) {
    let element = this.container
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    for(let i = 0; i < map.length; i++) {
      let row = this.utils.createElement('div', '', 'row')
      for(let j = 0; j < map[i].length; j++) {
        let template
        if(map[i][j] === 'wall') {
          template = '#iconqiang'
        } else if(map[i][j] === 'floor') {
          template = ''
        } else if(map[i][j] === 'target') {
          template = '#iconmubiao'
        } else if(map[i][j] === 'box') {
          template = '#icongift'
        } else if(map[i][j] === 'boy') {
          template = '#iconhuaji'
        }
        let div = this.utils.createElement('div', template, 'item')
        row.appendChild(div)
      }
      this.container.appendChild(row)
    }
    this.app.appendChild(this.container)
  }
  bindEvents(map) {
    let handleKeyBoard = new HandleKeyBoard(map)
    document.body.addEventListener('keydown', handleKeyBoard.keydown.bind(handleKeyBoard));

  }

}
let main = new Main()
