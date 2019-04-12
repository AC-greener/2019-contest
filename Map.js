//用来初始化地图, 一张地图代表一个关卡
class Map {
  constructor() {
    this.map = {
      0: [
        ['',     '',       '',       'wall',   'wall',   'wall',   'wall',  'wall',  'wall',  'wall'],
        ['',     '',       'wall',   'wall',   'floor',  'floor',  'wall',  'floor', 'floor', 'wall'],
        ['',     '',       '',       'wall',   'floor',  'floor',  'wall',  'box',   'floor', 'wall'],
        ['',     '',       'wall',   'floor',    'floor',  'box',    'floor', 'boy',   'floor', 'wall'],
        ['',     '',       'wall',   'floor',  'floor',    'wall',   'wall',  'floor', 'floor', 'wall'],
        ['wall', 'wall',   'wall',   'floor',  'box',    'floor',  'wall',  'floor', 'wall',  'wall'],
        ['wall', 'target', 'target', 'target', 'target', 'box', 'floor', 'floor', 'wall',  ''],
        ['wall', 'wall',   'wall',   'wall',   'wall',   'wall',   'wall',  'wall',  'wall',  ''],
      ]
    }

    
  }
}
