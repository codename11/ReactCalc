import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

let arr = [];
class Calculator  extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            firstNum: false,
            firstNumber: null,
            secondNum: false,
            secondNumber: null,
            operator: false,
            typeOfOperator: null,
            display: ""
		};
		this.handleClick = this.handleClick.bind(this);
        this.firstNum = this.firstNum.bind(this);
        this.operator = this.operator.bind(this);
    }

    handleClick(e){
        
        let pressed;
        pressed = e.target.value;

        if(this.firstNum(pressed) && this.state.firstNum === false){
            arr.push(this.firstNum(pressed));
            this.setState({
                display: this.state.display+this.firstNum(pressed),
            });
        }

        if(this.operator(pressed) && this.state.secondNum === false && this.state.operator === false){
            /*Checks if operator exists, if it not exists, puts one.*/
            
            this.setState({
                typeOfOperator: this.operator(pressed),
                operator: true,
                firstNum: true,
                firstNumber: arr.join(""),
                display: this.state.display+this.operator(pressed),
            });

            arr.push(this.operator(pressed));

        }

        if(this.operator(pressed) && this.state.secondNum === false && this.state.operator === true){
            /*Checks if operator exists, if it exists, changes it with other one.*/
            arr.pop();
            arr.push(this.operator(pressed));

            this.setState({
                typeOfOperator: this.operator(pressed),
                operator: true,
                firstNum: true,
                display: this.state.display.substring(0,this.state.display.length-1)+this.operator(pressed),
            });

        }

	}

    firstNum(num){

        switch(num) {

            case "0":
              return num;

            case "1":
                return num;

            case "2":
                return num;

            case "3":
                return num;

            case "4":
                return num;

            case "5":
                return num;

            case "6":
                return num;

            case "7":
                return num;

            case "8":
                return num;

            case "9":
                return num;

            default:
              console.log("Not an number!");
              return null;
          
        }

    }

    operator(operator){

        switch(operator) {
            case "+":
                return operator;
            case "-":
                return operator;
            case "*":
                return operator;
            case "/":
                return operator;
            default:
                console.log("Not an operator!");
                return null;
          }

    }


    render(){
    

        //let nums = this.state.formula && (this.state.formula[this.state.formula.length-1] === "+" || "-" || "*" || "/")
        console.log(this.state);
        console.log(arr);
        return(
            <div id="calculator" className="grid-container cent">
                <div className="item1x1">{this.state.display}</div>
                <div className="item1x2">{this.state.firstNumber}</div>
                <button className="drum-pad metal linear item2" value="AC" onClick={this.handleClick}>AC</button>
                <button className="drum-pad metal linear" value="/" onClick={this.handleClick}>/</button>
                <button className="drum-pad metal linear" value="*" onClick={this.handleClick}>*</button>
                <button className="drum-pad metal linear" value="7" onClick={this.handleClick}>7</button>
                <button className="drum-pad metal linear" value="8" onClick={this.handleClick}>8</button>
                <button className="drum-pad metal linear" value="9" onClick={this.handleClick}>9</button>
                <button className="drum-pad metal linear" value="-" onClick={this.handleClick}>-</button>
                <button className="drum-pad metal linear" value="4" onClick={this.handleClick}>4</button>
                <button className="drum-pad metal linear" value="5" onClick={this.handleClick}>5</button>
                <button className="drum-pad metal linear" value="6" onClick={this.handleClick}>6</button>
                <button className="drum-pad metal linear" value="+" onClick={this.handleClick}>+</button>
                <button className="drum-pad metal linear" value="1" onClick={this.handleClick}>1</button>
                <button className="drum-pad metal linear" value="2" onClick={this.handleClick}>2</button>
                <button className="drum-pad metal linear" value="3" onClick={this.handleClick}>3</button>
                <button className="drum-pad metal linear item3" value="=" onClick={this.handleClick}>=</button>
                <button className="drum-pad metal linear item4" value="0" onClick={this.handleClick}>0</button>
                <button className="drum-pad metal linear" value="." onClick={this.handleClick}>.</button>
            </div>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));