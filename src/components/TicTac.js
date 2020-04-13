import React, { Component } from 'react'
import style from './TicTac.module.css'
export default class TicTac extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),      //[0,1,2,3,4,5,6,7,8]
            count: 0
        }
        this.winnerLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    winner = () => {
        let s = (this.state.count % 2 === 0) ? 'X' : 'O';
        for (let i = 0; i < 8; i++) {
            let line = this.winnerLine[i];
            if (this.state.squares[line[0]] === s &&
                this.state.squares[line[1]] === s &&
                this.state.squares[line[2]] === s) {
                alert('The winner is :' + s);
                setTimeout(() => {
                    this.setState({ squares: Array(9).fill(null) })
                    this.setState({ count: 0 });
                }, 1000)

            }
        }
    }

    clearFields=()=>{
        this.setState({ squares: Array(9).fill(null) })
        this.setState({ count: 0 });
    }

    clickHandler = event => {
        let data = event.target.getAttribute('data');   //data это номер квадрата по которому мы кликаем
        let currentSquare = this.state.squares;
        if (currentSquare[data] === null) {               //Если квадратик пустой то сделай все что мы прописали ниже
            currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';  // если наш count делится на два без остатка то пишем 'X',если нет то пишем 'O' 
            this.setState({ squares: currentSquare });      //currentSquare это и есть this.state.squares
            this.setState({ count: this.state.count + 1 });
        }
        else {
            alert('This square is already filled up')  //если нет то кинь 'alert'
        }
        { this.winner() }
    }

    render() {
        return (
            <div>
                <h1>Tic-Tac-Toe</h1>
                <div className={style.tictac}>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='0'>{this.state.squares[0]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='1'>{this.state.squares[1]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='2'>{this.state.squares[2]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='3'>{this.state.squares[3]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='4'>{this.state.squares[4]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='5'>{this.state.squares[5]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='6'>{this.state.squares[6]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='7'>{this.state.squares[7]}</div>
                    <div className={style.tttgrid} onClick={this.clickHandler} data='8'>{this.state.squares[8]}</div>
                </div>
                <div>
                   <button onClick={this.clearFields} className={style.clearButton}> Clear the fields</button>
            </div>
            </div>
        )
    }
}
