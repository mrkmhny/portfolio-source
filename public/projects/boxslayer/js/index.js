'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Provider = ReactRedux.Provider;

// disable browser scrolling with arrows
window.addEventListener("keydown", function (e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

// board info
var BOARDSIZE = { x: 40, y: 25 };
var CELLSIZE = 35;

// action types
var MOVE = 'MOVE';
var UP = 'UP';
var RIGHT = 'RIGHT';
var DOWN = 'DOWN';
var LEFT = 'LEFT';

var HP = 'HP';

var EXPUP = 'EXPUP';
var LEVELUP = 'LEVELUP';
var GETITEM = 'GETITEM';
var FIGHT = 'FIGHT';
var FIGHTBOSS = 'FIGHTBOSS';
var NEWENEMY = 'NEWENEMY';
var DEATH = 'DEATH';
var WIN = 'WIN';

// board contents
var EMPTY = 'EMPTY';
var WALL = 'WALL';
var ITEM = 'ITEM';
var ITEM1 = {
  x: Math.floor(Math.random() * (19 - 12 + 1)) + 12,
  y: Math.floor(Math.random() * (13 - 7 + 1)) + 7
};

var ITEM2 = {
  x: Math.floor(Math.random() * (27 - 2 + 1)) + 2,
  y: Math.floor(Math.random() * (19 - 15 + 1)) + 15
};

var ITEM3 = {
  x: Math.floor(Math.random() * (39 - 2 + 1)) + 2,
  y: Math.floor(Math.random() * (24 - 21 + 1)) + 21
};

var HEALTH = 'HEALTH';

var ENEMY = 'ENEMY';

var ENEMY1 = {
  x: Math.floor(Math.random() * (10 - 4 + 1)) + 4,
  y: Math.floor(Math.random() * (8 - 4 + 1)) + 4
};

var ENEMY2 = {
  x: Math.floor(Math.random() * (6 - 2 + 1)) + 2,
  y: Math.floor(Math.random() * (13 - 10 + 1)) + 10
};

var ENEMY3 = {
  x: Math.floor(Math.random() * (27 - 2 + 1)) + 2,
  y: Math.floor(Math.random() * (19 - 15 + 1)) + 15
};

var ENEMY4 = {
  x: Math.floor(Math.random() * (27 - 12 + 1)) + 12,
  y: Math.floor(Math.random() * (5 - 2 + 1)) + 2
};

var ENEMY5 = {
  x: Math.floor(Math.random() * (27 - 2 + 1)) + 2,
  y: Math.floor(Math.random() * (24 - 21 + 1)) + 21
};

var ENEMY6 = {
  x: Math.floor(Math.random() * (31 - 30 + 1)) + 30,
  y: Math.floor(Math.random() * (4 - 3 + 1)) + 3
};

var ENEMY7 = {
  x: Math.floor(Math.random() * (38 - 37 + 1)) + 37,
  y: Math.floor(Math.random() * (23 - 17 + 1)) + 17
};

var BOSS1 = {
  x: 34,
  y: Math.floor(Math.random() * (24 - 2 + 1)) + 2
};

var BOSS = 'BOSS';

var STICK = 'STICK';
var CLUB = 'CLUB';
var DAGGER = 'DAGGER';
var SWORD = 'SWORD';

var PLAYER = 'PLAYER';
var INITIALPLAYER = {
  exp: 0,
  hp: 100,
  level: 1,
  x: 2,
  y: 2,
  weapon: STICK,
  strength: 3,
  enemyHP: 30,
  bossHP: 300,
  game: false
};

var initializeBoard = function initializeBoard() {
  for (var y = 1; y <= BOARDSIZE.y; y++) {
    for (var x = 1; x <= BOARDSIZE.x; x++) {
      this['x' + x + 'y' + y] = {
        x: x,
        y: y
      };
      this['x' + x + 'y' + y].content = x === INITIALPLAYER.x && y === INITIALPLAYER.y ? PLAYER : x === ITEM1.x && y === ITEM1.y ? ITEM : x === ITEM2.x && y === ITEM2.y ? ITEM : x === ITEM3.x && y === ITEM3.y ? ITEM : x === ENEMY1.x && y === ENEMY1.y ? ENEMY : x === ENEMY2.x && y === ENEMY2.y ? ENEMY : x === ENEMY3.x && y === ENEMY4.y ? ENEMY : x === ENEMY4.x && y === ENEMY4.y ? ENEMY : x === ENEMY5.x && y === ENEMY5.y ? ENEMY : x === ENEMY6.x && y === ENEMY6.y ? ENEMY : x === ENEMY7.x && y === ENEMY7.y ? ENEMY : x === BOSS1.x && y === BOSS1.y ? BOSS

      // 1st room right wall
      : x == 11 && y <= 8 & y != 7 ||

      // 2nd room right wall
      x == 20 && y < 14 && y > 5 ||

      // 2nd room top wall
      x > 11 && x < 20 && y == 6 ||

      // 2nd room mini left wall
      x == 7 && y >= 10 && y < 14 && y != 12 ||

      // 2nd room horizonal wall
      x <= 20 && y == 14 && x != 3 ||

      // 3nd room bottom wall
      x <= 28 && y == 20 && x != 3 ||

      // 3rd room vertical wall
      x == 28 && y != 10 && y != 18 ||

      // final room horizontal wall
      x > 28 && y == 15 ||

      // 1st room bottom wall
      x <= 11 && y == 9 ||

      // borders
      x == 1 || y == 1 || x == BOARDSIZE.x || y == BOARDSIZE.y ? WALL : Math.random() < 0.01 ? HEALTH : EMPTY;
    }
  }
};

var INITIALBOARD = new initializeBoard();
console.log(INITIALBOARD);

/* Helper Functions */

var findNeighborKeyHelper = function findNeighborKeyHelper(direction, origin) {
  var neighborKey = undefined;
  switch (direction) {
    case UP:
      neighborKey = 'x' + origin.x + 'y' + (origin.y - 1);
      break;
    case DOWN:
      neighborKey = 'x' + origin.x + 'y' + (origin.y + 1);
      break;
    case RIGHT:
      neighborKey = 'x' + (origin.x + 1) + 'y' + origin.y;
      break;
    case LEFT:
      neighborKey = 'x' + (origin.x - 1) + 'y' + origin.y;
      break;
    default:
      neighborKey = 'x' + origin.x + 'y' + origin.y;
      break;
  }
  return neighborKey;
};

var findKeyforHelper = function findKeyforHelper(state, searchTerm) {
  return Object.keys(state).find(function (key) {
    return state[key].content === searchTerm;
  });
};

////////////////////
// Redux Reducers //
////////////////////

// Updates the board with the current position of everything
function boardReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIALBOARD : arguments[0];
  var action = arguments[1];

  if (action.type === MOVE) {
    var _Object$assign, _Object$assign2;

    var oldCellKey = findKeyforHelper(state, PLAYER);
    //let oldCellKey = findKeyforHelper(state,PLAYER);
    var newCellKey = findNeighborKeyHelper(action.direction, state[oldCellKey]);

    return Object.assign({}, state, (_Object$assign = {}, _Object$assign[oldCellKey] = Object.assign({}, state[oldCellKey], {
      content: EMPTY
    }), _Object$assign), (_Object$assign2 = {}, _Object$assign2[newCellKey] = Object.assign({}, state[newCellKey], {
      content: PLAYER
    }), _Object$assign2));
  } else {
    return state;
  }
}

// Updates player data
function playerReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIALPLAYER : arguments[0];
  var action = arguments[1];

  if (action.type === MOVE) {
    switch (action.direction) {
      case UP:
        return Object.assign({}, state, {
          x: state.x,
          y: state.y - 1
        });
      case RIGHT:
        return Object.assign({}, state, {
          x: state.x + 1,
          y: state.y
        });
      case DOWN:
        return Object.assign({}, state, {
          x: state.x,
          y: state.y + 1
        });
      case LEFT:
        return Object.assign({}, state, {
          x: state.x - 1,
          y: state.y
        });
      default:
        return state;
    }
  } else if (action.type === HP) {
    return Object.assign({}, state, {
      hp: state.hp + action.hp
    });
  } else if (action.type == GETITEM) return Object.assign({}, state, {
    weapon: state.weapon == STICK ? CLUB : state.weapon == CLUB ? DAGGER : state.weapon == DAGGER ? SWORD : SWORD
  }, { strength: state.strength + 3 });else if (action.type === FIGHT) {
    return Object.assign({}, state, {

      hp: state.hp - action.damage
    }, {
      enemyHP: state.enemyHP - action.strength
    });
  } else if (action.type === FIGHTBOSS) {
    return Object.assign({}, state, {

      hp: state.hp - action.damage
    }, {
      bossHP: state.bossHP - action.strength
    });
  } else if (action.type === NEWENEMY) {
    return Object.assign({}, state, {
      enemyHP: action.hp
    });
  } else if (action.type === DEATH) {
    return Object.assign({}, state, {
      game: DEATH
    });
  } else if (action.type === WIN) {
    return Object.assign({}, state, {
      game: WIN
    });
  } else if (action.type === LEVELUP) {
    return Object.assign({}, state, {
      level: action.level,
      strength: state.strength + state.level * 2 - 1
    });
  } else if (action.type === EXPUP) {
    return Object.assign({}, state, {
      exp: state.exp + action.exp
    });
  } else {
    return state;
  }
}

/* 
Root Reducer
*/
var rootReducer = Redux.combineReducers({
  board: boardReducer,
  player: playerReducer
});

///////////////////////////
// Redux Action Creators //
///////////////////////////

function moveAction(direction) {
  return {
    type: MOVE,
    direction: direction
  };
}

function hpAction(hp) {
  return {
    type: HP,
    hp: hp
  };
}

function getItemAction() {
  return {
    type: GETITEM
  };
}

function levelUpAction(level) {
  return {
    type: LEVELUP,
    level: level
  };
}

function expUpAction(exp) {
  return {
    type: EXPUP,
    exp: exp
  };
}

function fightAction(strength, damage) {
  return {
    type: FIGHT,
    strength: strength,
    damage: damage
  };
}

function fightBossAction(strength, damage) {
  return {
    type: FIGHTBOSS,
    strength: strength,
    damage: damage
  };
}

function newEnemyAction(hp) {
  return {
    type: NEWENEMY,
    hp: hp
  };
}

function deathAction() {
  return {
    type: DEATH
  };
}

function winAction() {
  return {
    type: WIN
  };
}

/////////////////
// Redux Store //
/////////////////

var store = Redux.createStore(rootReducer);

var unsubscribe = store.subscribe(function () {
  return console.log(store.getState());
});

//////////////////////////////////////////////////////////////////////
// React Components //  // React Components //  // React Components //
//////////////////////////////////////////////////////////////////////

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    self = _this.props;
    _this.tryMove = _this.tryMove.bind(_this);
    return _this;
  }

  App.prototype.tryMove = function tryMove(direction) {
    // 1. Get the neighbor cellKey based on direction (helper function)
    // 2. Decide what actions need to be invoked based neighbor content

    // 1
    var neighborKey = findNeighborKeyHelper(direction, this.props.player);
    // 2
    if (this.props.board[neighborKey]) {
      switch (this.props.board[neighborKey].content) {
        case EMPTY:
          this.props.move(direction);
          break;

        case WALL:
          break;

        case ITEM:
          this.props.move(direction);
          this.props.getItem();
          break;

        case HEALTH:
          this.props.move(direction);
          this.props.hp(10);
          break;

        case ENEMY:
          this.props.fight(this.props.player.strength - 3 + Math.floor(Math.random() * 6), 3 + Math.floor(Math.random() * 3));
          if (this.props.player.enemyHP <= 0) {
            this.props.move(direction);
            this.props.newEnemy(35);

            this.props.expUp(50);
            if (this.props.player.exp >= 50) {
              this.props.levelUp(2);
              if (this.props.player.exp >= 100) {
                this.props.levelUp(2);
                if (this.props.player.exp >= 200) {
                  this.props.levelUp(3);
                  if (this.props.player.exp >= 350) {
                    this.props.levelUp(4);
                  }
                }
              }
            }
          }
          if (this.props.player.hp <= 0) {
            this.props.move(direction);
            this.props.death();
            Mousetrap.reset();
          }

          break;

        case BOSS:
          this.props.fightBoss(this.props.player.strength - 3 + Math.floor(Math.random() * 6), 12 + Math.floor(Math.random() * 3));
          if (this.props.player.bossHP <= 0) {
            this.props.move(direction);
            this.props.win();
            Mousetrap.reset();
          }
          if (this.props.player.hp <= 0) {
            this.props.move(direction);
            this.props.death();
            Mousetrap.reset();
          }
          break;

        default:
          break;
      }
    }
  };

  /* KEYBOARD CONTROLS */

  App.prototype.componentDidMount = function componentDidMount() {
    Mousetrap.bind('up', function () {
      this.tryMove(UP);
    }.bind(this));
    Mousetrap.bind('right', function () {
      this.tryMove(RIGHT);
    }.bind(this));
    Mousetrap.bind('left', function () {
      this.tryMove(LEFT);
    }.bind(this));
    Mousetrap.bind('down', function () {
      this.tryMove(DOWN);
    }.bind(this));
  };

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      { style: { backgroundColor: 'black' }, className: 'App' },
      React.createElement(Spotlight, { player: this.props.player }),
      React.createElement(Stats, { stats: this.props.player }),
      React.createElement(
        'p',
        { className: 'App-intro' },
        'Dungeon Crawler'
      ),
      React.createElement(Board, { player: this.props.player, board: this.props.board })
    );
  };

  return App;
}(React.Component);

var Spotlight = function Spotlight(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('div', {
      style: {
        position: 'absolute',
        left: 180,
        top: 125,
        width: 200,
        height: 200,
        borderRadius: 20,
        boxShadow: '0px 0px 4px 10px rgba(0,0,0,0.5) inset, 0px 0px 0px 1000px black'
      }

    }),
    React.createElement(
      'div',
      { style: {
          position: 'absolute',
          left: 180,
          top: 300,
          backgroundColor: 'SteelBlue',
          color: 'white'
        }
      },
      React.createElement(
        'h2',
        null,
        props.player.game
      )
    )
  );
};

var Stats = function Stats(props) {
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        backgroundColor: 'SteelBlue',
        color: 'white',
        zIndex: 1,
        marginTop: -20,
        position: 'absolute',
        width: 600
      }
    },
    React.createElement(
      'h3',
      { style: { marginLeft: 30 } },
      'HP: ',
      props.stats.hp
    ),
    React.createElement(
      'h3',
      { style: { marginLeft: 30 } },
      'EXP: ',
      props.stats.exp
    ),
    React.createElement(
      'h3',
      { style: { marginLeft: 30 } },
      'Level: ',
      props.stats.level
    ),
    React.createElement(
      'h3',
      { style: { marginLeft: 30 } },
      'Weapon: ',
      props.stats.weapon
    ),
    React.createElement(
      'h3',
      { style: { marginLeft: 30 } },
      'Strength: ',
      props.stats.strength
    )
  );
};

var Board = function Board(props) {

  var board = props.board;
  var PLAYERCOLOR = 'blue';
  var WALLCOLOR = 'grey';
  var EMPTYCOLOR = 'WhiteSmoke';
  var ITEMCOLOR = 'gold';
  var ENEMYCOLOR = 'red';
  var HEALTHCOLOR = 'green';
  var BOSSCOLOR = 'Maroon';
  var cellColor = undefined;

  var cells = [];
  for (var cell in board) {
    // Item is not a cell (prototype junk)
    if (!board.hasOwnProperty(cell)) {
      continue;
    }

    ///////////
    // CELLS //
    ///////////

    /* cellColor */
    switch (board[cell].content) {
      case PLAYER:
        cellColor = PLAYERCOLOR;
        break;

      case WALL:
        cellColor = WALLCOLOR;
        break;

      case ITEM:
        cellColor = ITEMCOLOR;
        break;

      case ENEMY:
        cellColor = ENEMYCOLOR;
        break;

      case HEALTH:
        cellColor = HEALTHCOLOR;
        break;

      case BOSS:
        cellColor = BOSSCOLOR;
        break;

      default:
        cellColor = EMPTYCOLOR;
        break;
    }
    //

    var cellStyle = {
      width: CELLSIZE,
      height: CELLSIZE,
      //boxShadow:'0px 0px 0px 1px black inset',
      fontSize: 10,
      backgroundColor: cellColor
    };

    cells.push(React.createElement('div', {
      key: cell,
      style: cellStyle
    }));
  }

  // FINAL BOARD RETURN
  return React.createElement(
    'div',
    {
      style: {
        marginLeft: 300 - props.player.x * CELLSIZE,
        marginTop: 200 - props.player.y * CELLSIZE,
        display: 'flex',
        flexWrap: 'wrap',
        border: "1px solid black",
        width: CELLSIZE * BOARDSIZE.x
      }
    },
    cells
  );
};

///////////////
// React-Redux //
///////////////

var mapStateToProps = function mapStateToProps(state) {
  return {
    board: state.board,
    player: state.player
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    move: function move(direction) {
      dispatch(moveAction(direction));
    },
    hp: function hp(_hp) {
      dispatch(hpAction(_hp));
    },
    getItem: function getItem() {
      dispatch(getItemAction());
    },
    fight: function fight(strength, damage) {
      dispatch(fightAction(strength, damage));
    },
    fightBoss: function fightBoss(strength, damage) {
      dispatch(fightBossAction(strength, damage));
    },
    newEnemy: function newEnemy(hp) {
      dispatch(newEnemyAction(hp));
    },
    levelUp: function levelUp(level) {
      dispatch(levelUpAction(level));
    },
    expUp: function expUp(exp) {
      dispatch(expUpAction(exp));
    },
    win: function win() {
      dispatch(winAction());
    },
    death: function death() {
      dispatch(deathAction());
    }
  };
};

var Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(Container, null)
), document.getElementById('root'));