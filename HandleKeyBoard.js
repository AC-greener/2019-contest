//处理键盘事件
class HandleKeyBoard {
  constructor(map) {
    this.m = map
    this.map = JSON.parse(JSON.stringify(map))        //克隆一份地图,在这个地图上面操作
    this.boyPostion = this.getBoyPostion(this.map)   //boy当前所在的位置
    this.inTarget = false
    this.boxInTarget = false
    this.target = []
    this.resultList = this.findResultList(this.map)
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
        return false
      } else if(boxPostion === 'floor') {
        this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'   //吧boy所在的位置变成地板
        this.boyPostion = [nextY, nextX]        //更新boy位置
        this.map[nextY + y][nextX + x] = 'box'  //更新box位置
        this.map[nextY][nextX] = 'boy'
        main.render(this.map)
        return true
      } else if(boxPostion === 'target') {
        this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'   //吧boy所在的位置变成地板
        if(this.boxInTarget) {
          this.map[this.boyPostion[0]][this.boyPostion[1]] = 'target'  
        }
         if(this.m[this.boyPostion[0]][this.boyPostion[1]] === 'floor' || this.m[this.boyPostion[0]][this.boyPostion[1]] === 'box') {
        this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'
      } 
        this.boyPostion = [nextY, nextX]        //更新boy位置
        this.map[nextY + y][nextX + x] = 'box'  //更新box位置
        this.map[nextY][nextX] = 'boy'
        this.boxInTarget = true
        this.target = [nextY + y, nextX + x]
      
        main.render(this.map)
        this.judgeSuccess(this.map)
        return true
      }
    } else if(destination === 'wall') {  //要走的下一步遇到墙
      return false
    } else if(destination === 'floor') {  //要走的下一步是地板
      this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'
      if(this.m[this.boyPostion[0]][this.boyPostion[1]] === 'target') {
        this.map[this.boyPostion[0]][this.boyPostion[1]] = 'target'
      }
      this.boyPostion = [nextY, nextX]
      // console.log(this.boyPostion[1], this.boyPostion[0])
      this.map[nextY][nextX] = 'boy'   //移动boy
     
      if(this.inTarget) {
        this.map[this.target[0]][this.target[1]] = 'target' 
        this.inTarget = false
      }
     
      main.render(this.map)
      this.judgeSuccess(this.map)
      // console.log('是地板，可以走！！')
      return true
    } else if(destination === 'target') {
      this.map[this.boyPostion[0]][this.boyPostion[1]] = 'floor'
      if(this.m[this.boyPostion[0]][this.boyPostion[1]] === 'target') {
        this.map[this.boyPostion[0]][this.boyPostion[1]] = 'target'
      }
      this.boyPostion = [nextY, nextX]
      this.map[nextY][nextX] = 'boy'  
      if(this.inTarget && this.map[this.target[0]][this.target[1]] != 'box') {
        this.map[this.target[0]][this.target[1]] = 'target' 
        console.log('target',this.target) 
      } 
      
      this.inTarget = true
      this.target = [nextY, nextX]
      main.render(this.map)
      this.judgeSuccess(this.map)
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
  findResultList(map) {
    let result = []
    for(let y = 0; y < map.length; y++) {
      for(let x = 0; x < map[y].length; x++) {
        if(map[y][x] === 'target') {
          result.push([y, x])
        }
      }
    }
    return result
  }
  judgeSuccess(map) {
    let flag = true
    for(let i = 0; i < this.resultList.length; i++) {
      console.log(map[this.resultList[i][0]][this.resultList[i][1]] )
      if(map[this.resultList[i][0]][this.resultList[i][1]] !== 'box') {
        flag = false
      }
    }
    if(flag) {
      alert('通关啦！！！！')
    }
  }
}