//用来初始化地图, 一张地图代表一个关卡
class Map {
  constructor() {
    this.map = [
      [
        ['','','wall','wall','wall','','','',''],
        ['wall','wall','wall','target','target','wall','','',''],
        ['','wall','boy','box','box','floor','wall','',''],
        ['','wall','floor','floor','floor','floor','wall','',''],
        ['','wall','wall','wall','wall','wall','wall','','']
      ],
      [
        ['wall','wall','wall','wall','wall','wall','wall','wall'],
        ['wall','wall','wall','wall','floor','boy','wall','wall'],
        ['wall','wall','floor','floor','box','floor','wall','wall'],
        ['wall','floor','floor','wall','floor','wall','target','wall'],
        ['wall','floor','wall','floor','floor','box','target','wall'],
        ['wall','floor','box','floor','floor','floor','target','wall'],
        ['wall','wall','wall','wall','wall','wall','wall','wall']
      ],
      [
        ['',     '',       '',       'wall',   'wall',   'wall',   'wall',  'wall',  'wall',  'wall'],
        ['',     '',       'wall',   'wall',   'floor',  'floor',  'wall',  'floor', 'floor', 'wall'],
        ['',     '',       '',       'wall',   'floor',  'floor',  'wall',  'box',   'floor', 'wall'],
        ['',     '',       'wall',   'floor',    'floor',  'box',    'floor', 'boy',   'floor', 'wall'],
        ['',     '',       'wall',   'floor',  'floor',    'wall',   'wall',  'floor', 'floor', 'wall'],
        ['wall', 'wall',   'wall',   'floor',  'box',    'floor',  'wall',  'floor', 'wall',  'wall'],
        ['wall', 'target', 'target', 'target', 'target', 'box', 'floor', 'floor', 'wall',  ''],
        ['wall', 'wall',   'wall',   'wall',   'wall',   'wall',   'wall',  'wall',  'wall',  ''],
      ],
      [
        ['wall','wall','wall','wall','wall','wall','wall', 'wall', 'wall', 'wall', 'wall'],
        ['wall','wall','wall','wall','wall','wall','wall', 'floor', 'floor', 'floor', 'wall'],
        ['wall','floor','floor','floor','wall','floor','floor', 'box', 'floor', 'floor', 'wall'],
        ['wall','floor','floor','floor','box','floor','floor', 'wall', 'target', 'target', 'wall'],
        ['wall','wall','box','floor','floor','floor','box', 'wall', 'target', 'target', 'wall'],
        ['wall','wall','boy','box','wall','box','floor', 'wall', 'target', 'target', 'wall'],
        ['wall','floor','floor','floor','floor','floor','floor', 'wall', 'wall', 'wall', 'wall'],
        ['wall','wall','wall','wall','wall','wall','wall', 'wall', 'wall', 'wall', 'wall'],
      
      ],
      // [
      //   ['wall','wall','wall','wall','wall','wall','wall','wall'],
      //   ['wall','wall','floor','floor','wall','wall','wall','wall'],
      //   ['wall','wall','boy','box','floor','floor','wall','wall'],
      //   ['wall','wall','wall','floor','wall','floor','wall','wall'],
      //   ['wall','target','wall','floor','wall','floor','floor','wall'],
      //   ['wall','target','box','floor','floor','wall','floor','wall'],
      //   ['wall','target','floor','floor','floor','box','floor','wall'],
      //   ['wall','wall','wall','wall','wall','wall','wall','wall']
      // ]
      [
        ['wall','wall','wall','wall','wall','wall','wall', 'wall', 'wall', 'wall', 'wall'],
        ['wall','boy','floor','floor','floor','floor','floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall','floor','wall','wall','wall','wall','floor', 'wall', 'wall', 'floor', 'wall'],
        ['wall','floor','target','floor','box','target','box', 'floor', 'wall', 'floor', 'wall'],
        ['wall','floor','wall','floor','box','target','box', 'floor', 'target', 'floor', 'wall'],
      
        ['wall','floor','wall','wall','floor','wall','wall', 'wall', 'wall', 'floor', 'wall'],
        ['wall','floor','floor','floor','floor','floor','floor', 'floor', 'floor', 'floor', 'wall'],
        ['wall','wall','wall','wall','wall','wall','wall', 'wall', 'wall', 'wall', 'wall'],

      ],
    ]

    
  }
}
