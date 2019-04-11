function render() {
  let m = new Map()
  let map = m.map
  let utils = new Utils()
  let container = document.querySelector('.container')
  let app = document.querySelector('#app')
  for(let i = 0; i < map[0].length; i++) {
    let row = utils.createElement('div', '', 'row')
    for(let j = 0; j < map[0][i].length; j++) {
      let text = ''
      if(map[0][i][j] === 'wall') {
        text = 'w'
      } else if(map[0][i][j] === 'floor') {
        text = 'f'
      } else if(map[0][i][j] === 'target') {
        text = 't'
      } else if(map[0][i][j] === 'box') {
        text = 'b'
      }
      let div = utils.createElement('div', text, 'item')
      row.appendChild(div)

    }
    container.appendChild(row)
  }
  app.appendChild(container)
}
render()

