export interface GameConfig {
  path: string
  name: string
  cover?: string
}

export const games: GameConfig[] = [
  {
    path: '/ci/mine-sweeper/index.html',
    name: '扫雷',
    cover: 'mine-sweeper.svg'
  },
  {
    path: '/ci/link-game/index.html',
    name: '连连看',
    cover: 'link-game.svg'
  },
  {
    path: '/ci/greedy-snake/index.html',
    name: '贪吃蛇',
    cover: 'greedy-snake.svg'
  },
  {
    path: '/ci/tetris/index.html',
    name: '俄罗斯方块',
    cover: 'tetris.svg'
  },
  {
    path: '/ci/2048/index.html',
    name: '2048',
    cover: '2048.svg'
  },
  {
    path: '/ci/spider-solitaire/index.html',
    name: '蜘蛛纸牌',
    cover: 'spider-solitaire.svg'
  },
  {
    path: '/ci/chinese-chess/index.html',
    name: '中国象棋',
    cover: 'Chinese-chess.jpg'
  },
  {
    path: 'https://github.com/our-mini-games/mini-games/discussions',
    name: '没有想要的？',
    cover: 'org.svg'
  }
]
