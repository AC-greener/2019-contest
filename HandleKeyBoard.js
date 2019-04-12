//处理键盘事件
class HandleKeyBoard {
  constructor(map) {
    this.map = map
    this.boyPostion = this.getBoyPostion(this.map)   //boy当前所在的位置
    this.inTarget = false
    this.boxInTarget = false
    this.target = []
  }
  keydown(e) {
    let keyCode = e.keyCode
    switch (keyCode) {
      case 37: //向左
        this.handleMove(0, -1)
        break;
      case 38: //向上
        this.handleMove(-1, 0)
        break;
      case 39: //向右
        this.handleMove(0, 1)
        break;
      case 40: //向下
        this.handleMove(1, 0)
        break;
    }
  }

  handleMove(y, x) {
    this.judge(y, x)
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
        this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'   //吧boy所在的位置变成地板
        this.boyPostion = [nextY, nextX]        //更新boy位置
        this.map[nextY + y][nextX + x] = 'box'  //更新box位置
        this.map[nextY][nextX] = 'boy'
        console.log('箱子旁边可以走！！')
        main.render(this.map)
        return true
      } else if(boxPostion === 'target') {
        this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'   //吧boy所在的位置变成地板
        if(this.boxInTarget) {
          this.inTarget = true
            this.map[this.boyPostion[0]][this.boyPostion[1]] = 'target'  
        }
        this.boyPostion = [nextY, nextX]        //更新boy位置
        this.map[nextY + y][nextX + x] = 'box'  //更新box位置
        this.map[nextY][nextX] = 'boy'
        this.boxInTarget = true
        this.target = [nextY + y, nextX + x]
        console.log('target', this.target)
        main.render(this.map)
        return true
      }
    } else if(destination === 'wall') {  //要走的下一步遇到墙
      console.log('有墙，走不动！！')
      return false
    } else if(destination === 'floor') {  //要走的下一步是地板
      this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'
      this.boyPostion = [nextY, nextX]
      // console.log(this.boyPostion[1], this.boyPostion[0])
      this.map[nextY][nextX] = 'boy'   //移动boy
      console.log('nextY nextX', nextY, nextX)
      if(this.inTarget) {
        this.map[this.target[0]][this.target[1]] = 'target' 
        this.inTarget = false
        console.log('target',this.target) 
      } 
      main.render(this.map)
      // console.log('是地板，可以走！！')
      return true
    } else if(destination === 'target') {
      this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'
      this.boyPostion = [nextY, nextX]
      this.map[nextY][nextX] = 'boy'  
      if(this.inTarget && this.map[this.target[0]][this.target[1]] != 'box') {
        this.map[this.target[0]][this.target[1]] = 'target' 
        console.log('target',this.target) 
      } 
      
      this.inTarget = true
      this.target = [nextY, nextX]
      main.render(this.map)
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