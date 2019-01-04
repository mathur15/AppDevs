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
    /*create a copy of the array for immutabiliity*/
    squares[i]=this.state.xIsNext?"X":"O";
    //determining what to assign based the isnext value
    this.setState({squares:squares,
      xIsNext:!this.state.xIsNext,})//toggle the value for the next turn
  }

  //-----IMP------

  render() {
    const status = "Next player: "+ (this.state.xIsNext? "X":"O");

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
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

/*========================================*/

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);