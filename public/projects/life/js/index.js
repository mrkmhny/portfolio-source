'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

////////////////////
// game constants //
////////////////////
var ROWLENGTH = 25;
//    COLLENGTH = 25;
var BOXCOUNT = ROWLENGTH * ROWLENGTH;
var BOXSIZE = 15;
var BOXBORDER = 1;
var generation = -1;
var clock;

// creates initial array of boxes
var initBoxes = [];
for (var i = 0; i < BOXCOUNT; i++) {

  ////////////////////////////
  // logic to find neighbors//
  ////////////////////////////

  var neighbors = [];
  // Top Left
  if (i === 0) {
    neighbors.push(i + ROWLENGTH * (ROWLENGTH - 1), i + ROWLENGTH * (ROWLENGTH - 1) + 1, i + 1, i + ROWLENGTH + 1, i + ROWLENGTH, i + ROWLENGTH * 2 - 1, i + ROWLENGTH - 1, i + ROWLENGTH * ROWLENGTH - 1);
  }

  // Top right
  else if (i == ROWLENGTH - 1) {
      neighbors.push(i + ROWLENGTH * (ROWLENGTH - 1), i + ROWLENGTH * (ROWLENGTH - 1) - ROWLENGTH + 1, i - ROWLENGTH + 1, i + 1, i + ROWLENGTH, i + ROWLENGTH - 1, i - 1, i + ROWLENGTH * (ROWLENGTH - 1) - 1);
    }

    // Bottom right
    else if (i == ROWLENGTH * ROWLENGTH - 1) {
        neighbors.push(i - ROWLENGTH, i - ROWLENGTH - ROWLENGTH + 1, i - ROWLENGTH + 1, i - i, i - ROWLENGTH * (ROWLENGTH - 1), i - ROWLENGTH * (ROWLENGTH - 1) - 1, i - 1, i - ROWLENGTH - 1);
      }

      //Bottom left
      else if (i == ROWLENGTH * (ROWLENGTH - 1)) {
          neighbors.push(i - ROWLENGTH, i - ROWLENGTH + 1, i + 1, i - i + 1, i - i, i - i + ROWLENGTH - 1, i + ROWLENGTH - 1, i - 1);
        }

        // top regular
        else if (i < ROWLENGTH) {
            neighbors.push(i + ROWLENGTH * (ROWLENGTH - 1), i + ROWLENGTH * (ROWLENGTH - 1) + 1, i + 1, i + ROWLENGTH + 1, i + ROWLENGTH, i + ROWLENGTH - 1, i - 1, i + ROWLENGTH * (ROWLENGTH - 1) - 1);
          }

          // right regular
          else if ((i + 1) % ROWLENGTH == 0) {
              neighbors.push(i - ROWLENGTH, i - ROWLENGTH - ROWLENGTH + 1, i - ROWLENGTH + 1, i + 1, i + ROWLENGTH, i + ROWLENGTH - 1, i - 1, i - ROWLENGTH - 1);
            }

            // bottom regular
            else if (i >= ROWLENGTH * (ROWLENGTH - 1)) {
                neighbors.push(i - ROWLENGTH, i - ROWLENGTH + 1, i + 1, i - ROWLENGTH * (ROWLENGTH - 1) + 1, i - ROWLENGTH * (ROWLENGTH - 1), i - ROWLENGTH * (ROWLENGTH - 1) - 1, i - 1, i - ROWLENGTH - 1);
              }

              // left regular
              else if (i % ROWLENGTH == 0) {
                  neighbors.push(i - ROWLENGTH, i - ROWLENGTH + 1, i + 1, i + ROWLENGTH + 1, i + ROWLENGTH, i + ROWLENGTH + ROWLENGTH - 1, i + ROWLENGTH - 1, i - 1);
                }

                // just regular
                else {
                    neighbors.push(i - ROWLENGTH, i - ROWLENGTH + 1, i + 1, i + ROWLENGTH + 1, i + ROWLENGTH, i + ROWLENGTH - 1, i - 1, i - ROWLENGTH - 1);
                  }

  initBoxes.push({
    num: i,
    row: Math.floor(ROWLENGTH / i),
    col: i % ROWLENGTH,
    alive: Math.floor(Math.random() * (1 - 0 + 1)) + 0 == 1 ? true : false,
    neighbors: neighbors
  });
}

//////////////////////
// Render the boxes //
//////////////////////

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      boxes: initBoxes
    };
    _this.birthBox = _this.birthBox.bind(_this);
    _this.checkNeighbors2 = _this.checkNeighbors2.bind(_this);
    _this.repeatInterval = _this.repeatInterval.bind(_this);
    _this.stopInterval = _this.stopInterval.bind(_this);
    _this.clearBoxes = _this.clearBoxes.bind(_this);
    return _this;
  }

  Board.prototype.checkNeighbors2 = function checkNeighbors2() {
    var currentBoxes = this.state.boxes;
    var newBoxes = currentBoxes;
    var nextGen = [];
    console.log(currentBoxes);

    for (var b = 0; b < currentBoxes.length; b++) {
      var livingNeighbors = 0;

      for (var j = 0; j < currentBoxes[b].neighbors.length; j++) {
        if (currentBoxes[currentBoxes[b].neighbors[j]].alive == true) {
          livingNeighbors++;
        }
      }

      if (livingNeighbors > 3) {
        nextGen.push([b, false]);
      } else if (livingNeighbors < 2) {
        nextGen.push([b, false]);
      } else if (livingNeighbors == 3) {
        nextGen.push([b, true]);
      }
    }

    for (var p = 0; p < nextGen.length; p++) {
      newBoxes[nextGen[p][0]].alive = nextGen[p][1];
    }
    generation++;
    this.setState({ boxes: newBoxes });

    if (this.state.running === false) {
      clearInterval(this.state.interval);
    }
  };

  Board.prototype.repeatInterval = function repeatInterval() {
    //this.setState({running:true})
    this.setState({ interval: setInterval(this.checkNeighbors2(), 5000) });
  };

  Board.prototype.stopInterval = function stopInterval() {
    clearInterval(clock);
  };

  Board.prototype.birthBox = function birthBox(i) {
    var newBoxes = this.state.boxes;
    newBoxes[i].alive = true;
    this.setState({ boxes: newBoxes });
  };

  Board.prototype.clearBoxes = function clearBoxes() {
    var clearedBoxes = this.state.boxes;
    generation = 0;
    for (var c = 0; c < this.state.boxes.length; c++) {
      clearedBoxes[c].alive = false;
    }

    this.setState({ boxes: clearedBoxes });
  };

  Board.prototype.componentDidMount = function componentDidMount() {
    this.checkNeighbors2();
  };

  Board.prototype.render = function render() {
    var board = this;
    var boxesRend = board.state.boxes.map(function (c, i, a) {
      var boxColor = c.alive ? 'steelblue' : 'lightgrey';
      // !! NOT FINAL COMPONENT RETURN FUNCTION
      return React.createElement('div', {
        onClick: function onClick() {
          board.birthBox(i);
        },

        className: 'box',
        style: {
          width: BOXSIZE,
          height: BOXSIZE,
          fontSize: 10,
          backgroundColor: boxColor
        } });
    }, this);

    //////////////////
    // Final Return //
    /////////////////.

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        null,
        "Generation: " + generation
      ),
      React.createElement(
        'button',
        {
          onClick: function onClick() {
            clock = setInterval(board.checkNeighbors2, 100);
          }
        },
        'Start'
      ),
      React.createElement(
        'button',
        {
          onClick: board.stopInterval
        },
        'Stop'
      ),
      React.createElement(
        'button',
        {
          onClick: board.clearBoxes
        },
        'Clear'
      ),
      React.createElement(
        'div',
        {
          className: 'board',
          style: {
            width: ROWLENGTH * (BOXSIZE + BOXBORDER * 2),
            height: ROWLENGTH * (BOXSIZE + BOXBORDER * 2)
          }
        },
        boxesRend
      )
    );
  };

  return Board;
}(React.Component);

ReactDOM.render(React.createElement(Board, null), document.getElementById('app'));