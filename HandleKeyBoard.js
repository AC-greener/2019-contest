//处理键盘事件
class HandleKeyBoard {
  constructor(map) {
    this.map = map
    this.boyPostion = this.getBoyPostion(this.map)
  }
  keydown(e) {
    let keyCode = e.keyCode
    switch (keyCode) {
      case 37: //向左
        this.handleMove(0, -1)
        console.log('向左')
        break;
      case 38: //向上
        this.handleMove(-1, 0)

        console.log('向上')
        break;
      case 39: //向右
        this.handleMove(0, 1)

        console.log('向右')
        break;
      case 40: //向下
        this.handleMove(1, 0)

        console.log('向下')
        break;
    }
  }

  handleMove(x, y) {
    console.log(this.boyPostion)
    this.judge(x, y)
  }

  judge(y, x) {
    let nextX = x + this.boyPostion[1], nextY = y + this.boyPostion[0]
    let destination = this.map[nextY][nextX]
    console.log('目的地：', destination)
    if(destination === 'box') {   //要走的下一步遇到箱子
      let boxPostion = this.map[nextY + y][nextX + x]
      // console.log(nextY + y, nextX + x)
      if(boxPostion === 'box' || boxPostion === 'wall') {
        console.log('箱子旁边不可以走！！')
        return false
      } else if(boxPostion === 'floor') {
        console.log('箱子旁边可以走！！')
        return true
      } else {
        return false
      }
    } else if(destination === 'wall') {  //要走的下一步遇到墙
      console.log('有墙，走不动！！')
      return false
    } else if(destination === 'floor') {  //要走的下一步是地板
      // this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'
      // this.boyPostion = [nextY, nextX]
      console.log(this.boyPostion[1], this.boyPostion[0])
      this.map[nextY][nextX] = 'boy'
      main.render(this.map)
      // console.log('是地板，可以走！！')
      return true
    }   
  }
  getBoyPostion(map) {
    for(let y = 0; y < map.length; y++) {
      for(let x = 0; x < map[y].length; x++) {
        if(map[y][x] === 'boy') {
          return [y, x]
        }
      }
    }
  }
}