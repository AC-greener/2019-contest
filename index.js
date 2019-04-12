class Main {
  constructor(map) {
    this.map = map
    this.utils = new Utils()
    this.container = document.querySelector('.container')
    this.app = document.querySelector('#app')
    this.render(this.map)
    this.bindEvents()
  }
  render(map) {
    let element = this.container
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    for(let i = 0; i < map.length; i++) {
      let row = this.utils.createElement('div', '', 'row')
      for(let j = 0; j < map[i].length; j++) {
        let text = ''
        if(map[i][j] === 'wall') {
          text = 'wall'
        } else if(map[i][j] === 'floor') {
          text = 'floor'
        } else if(map[i][j] === 'target') {
          text = 'target'
        } else if(map[i][j] === 'box') {
          text = 'box'
        } else if(map[i][j] === 'boy') {
          text = 'boy'
        }
        let div = this.utils.createElement('div', text, 'item')
        row.appendChild(div)
  
      }
      this.container.appendChild(row)
    }
    this.app.appendChild(this.container)
  }
  bindEvents() {
    let handleKeyBoard = new HandleKeyBoard(this.map)
    document.body.addEventListener('keydown', handleKeyBoard.keydown.bind(handleKeyBoard));
  }
}

let main = new Main(new Map().map[0])

