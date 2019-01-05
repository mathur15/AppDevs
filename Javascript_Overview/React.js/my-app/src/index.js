import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Square(props) {
    return (
      <button className="square" 
      onClick=props.onClick()>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state={
      squares:Array(9).fill(null)
      xIsNext:true,
      //this state will determine if X or O should be played
      //it will be flipped everytime
    }
  }
  renderSquare(i) {
    return <Square value={this.squares[i]}
                    onClick={()=> this.handleClick(i)} />;
  }

  //-------IMP------
  //this is essentially passing the state fron parent to child component
  handleclick(i){//handles what each square should look
    //pass the state to the squares
    const squares=this.state.squares.slice();
    if(calculateWinner(squares)||squares[i]){
      return;
    }
    /*create a copy of the array for immutabiliity*/
    squares[i]=this.state.xIsNext?"X":"O";
    //determining what to assign based the isnext value
    this.setState({squares:squares,
      xIsNext:!this.state.xIsNext,})//toggle the value for the next turn
  }

  //-----IMP------

  render() {
    const winner=calculateWinner(squares)
    let status;
    if(winner){
      status="Winner: "+winner
    }
    else{
      status = "Next player: "+ (this.state.xIsNext? "X":"O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/*========================================*/

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);