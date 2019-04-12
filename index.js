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
        let template
        if(map[i][j] === 'wall') {
          template = ` 
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconqiang"></use>
          </svg>`
        } else if(map[i][j] === 'floor') {
          template = 'f'
        } else if(map[i][j] === 'target') {
          template = ` 
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconmubiao"></use>
          </svg>`
        } else if(map[i][j] === 'box') {
          template = ` 
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icongift"></use>
          </svg>`
        } else if(map[i][j] === 'boy') {
          template = ` 
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconhuaji"></use>
            </svg>`
        }
        let div = this.utils.createElement('div', template, 'item')
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

