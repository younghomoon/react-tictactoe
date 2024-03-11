import React from 'react';
import "./Board.css";
import Square from './Square';

export default class Board extends Component {    // 함수형 Component
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });   // setState()를 호출할때마다 Re-Rendering이 발생한다.

    // if (squares[i] === null) {
    //   squares[i] = this.props.player;
    //   this.setState({
    //     squares: squares
    //   });
    //   this.props.handleClick(i);
    // }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={ () => this.handleClick(i) }/>
  }

  render() {
    return (
      <div>
        <div className='status'>Next Player : X, O</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}


