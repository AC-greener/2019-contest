//处理键盘事件
class HandleKeyBoard {
  constructor(map) {
    this.map = map
    this.realMap = JSON.parse(JSON.stringify(map))
    this.boyCurrent = this.getBoyCurrent(this.realMap)   //boy当前所在的坐标
    this.from = 'floor'
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
    if(this.judge(y, x)) {
      console.log('可以走')
      let boyNext = [y + this.boyCurrent[0], x + this.boyCurrent[1]]
      if(this.map[boyNext[0]][boyNext[1]] === 'floor') {
        this.realMap[this.boyCurrent[0]][this.boyCurrent[1]] = 'floor'
        this.realMap[boyNext[0]][boyNext[1]] = 'boy'
        this.boyCurrent = [boyNext[0], boyNext[1]]
        main.render(this.realMap)
      }
    }
  }

  judge(y, x) {
    let nextX = x + this.boyCurrent[1], nextY = y + this.boyCurrent[0]
    let boyNext = this.realMap[nextY][nextX]
    if(boyNext === 'box') {   //要走的下一步遇到箱子
      let boxNext = this.realMap[nextY + y][nextX + x]
      if(boxNext === 'box' || boxNext === 'wall') {
        return false
      } else if(boxNext === 'floor') {
        return true
      } else if(boxNext === 'target') {
        return true
      }
    } else if(boyNext === 'wall') {  //要走的下一步遇到墙
      return false
    } else if(boyNext === 'floor') {  //要走的下一步是地板
      return true
    } else if(boyNext === 'target') {
     return true
    }
   
  }
  getBoyCurrent(realMap) {
    for(let y = 0; y < realMap.length; y++) {
      for(let x = 0; x < realMap[y].length; x++) {
        if(realMap[y][x] === 'boy') {
          return [y, x]
        }
      }
    }
  }
  judge2(y, x) {
    let nextX = x + this.boyCurrent[1], nextY = y + this.boyCurrent[0]
    let boyNext = this.realMap[nextY][nextX]
    console.log('目的地：', boyNext)
   
    if(boyNext === 'box') {   //要走的下一步遇到箱子
      let boxCurrent = this.realMap[nextY + y][nextX + x]
      if(boxCurrent === 'box' || boxCurrent === 'wall') {
        return false
      } else if(boxCurrent === 'floor') {
        this.realMap[this.boyCurrent[0]][this.boyCurrent[1]] = 'floor'   //吧boy所在的位置变成地板
        this.boyCurrent = [nextY, nextX]        //更新boy位置
        this.realMap[nextY + y][nextX + x] = 'box'  //更新box位置
        this.realMap[nextY][nextX] = 'boy'
        console.log('箱子旁边可以走！！')
        main.render(this.realMap)
        return true
      } else if(boxCurrent === 'target') {
        this.realMap[this.boyCurrent[0]][this.boyCurrent[1]] = 'floor'   //吧boy所在的位置变成地板
        this.boyCurrent = [nextY, nextX]        //更新boy位置
        this.realMap[nextY + y][nextX + x] = 'box'  //更新box位置
        this.realMap[nextY][nextX] = 'boy'
        main.render(this.realMap)
        return true
      }
    } else if(boyNext === 'wall') {  //要走的下一步遇到墙
      return false
    } else if(boyNext === 'floor') {  //要走的下一步是地板
      this.realMap[this.boyCurrent[0]][this.boyCurrent[1]] = 'floor'
      this.boyCurrent = [nextY, nextX]
      // console.log(this.boyCurrent[1], this.boyCurrent[0])
      this.realMap[nextY][nextX] = 'boy'   //移动boy
      main.render(this.realMap)
      // console.log('是地板，可以走！！')
      return true
    } else if(boyNext === 'target') {
      // if(this.map[])
      this.realMap[this.boyCurrent[0]][this.boyCurrent[1]] = 'floor'
      this.boyCurrent = [nextY, nextX]
      this.realMap[nextY][nextX] = 'boy'  

      main.render(this.realMap)
    }
   
  }
}