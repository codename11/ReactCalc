import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

class Calculator  extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            firstNum: false,
            secondNum: false,
            operator: false,
            typeOfOperator: null,
            display: 0,
            equalSign: false,
            result: null
		};
		this.handleClick = this.handleClick.bind(this);
        this.firstNum = this.firstNum.bind(this);
        this.operator = this.operator.bind(this);
        this.secondNum = this.secondNum.bind(this);
        this.equal = this.equal.bind(this);
        this.calculate = this.calculate.bind(this);
        this.erase = this.erase.bind(this);
    }

    handleClick(e){
        
        let pressed;
        pressed = e.target.value;

        if(this.firstNum(pressed) && this.state.firstNum === false){
            
            this.setState({
                display: this.state.display===0 ? this.firstNum(pressed) : this.state.display+this.firstNum(pressed),
            });
        }

        if(this.operator(pressed) && this.state.secondNum === false && this.state.operator === false){
            /*Checks if operator exists, if it not exists, puts one.*/

            this.setState({
                typeOfOperator: this.operator(pressed),
                operator: true,
                firstNum: true,
                display: this.state.display+this.operator(pressed),
            });

        }

        if(this.operator(pressed) && this.state.secondNum === false && this.state.operator === true){
            /*Checks if operator exists, if it exists, changes it with other one.*/

            this.setState({
                typeOfOperator: this.operator(pressed),
                operator: true,
                firstNum: true,
                display: this.state.display.substring(0,this.state.display.length-1)+this.operator(pressed),
            });
            
        }

        if(this.secondNum(pressed) && this.state.firstNum === true && this.state.secondNum === false && this.state.equalSign === false){

            this.setState({
                secondNum: true,
                display: this.state.display===0 ? this.secondNum(pressed) : this.state.display+this.secondNum(pressed),
            });

        }

        if(this.equal(pressed) && this.state.firstNum === true && this.state.operator === true && this.state.secondNum === true && this.state.equalSign === false){

            this.setState({
                firstNum: true,
                secondNum: false,
                operator: false,
                typeOfOperator: null,
                equalSign: false,
                display: 0,
            });
            
        }

        if(this.operator(pressed) && this.state.firstNum===true && this.state.operator===false && this.state.secondNum===false){
            
            this.setState({
                operator: true,
                typeOfOperator: this.operator(pressed),
                display: this.state.result+this.operator(pressed),
                result: 0,
            });

        }

        if(this.operator(pressed) && this.state.display.length>0 && this.state.firstNum===true && this.state.operator===true && this.state.secondNum===true){

            this.setState({
                firstNum: true,
                secondNum: false,
                operator: true,
                typeOfOperator: this.operator(pressed),
                equalSign: false,
                display: this.calculate()+this.operator(pressed),
                result: this.calculate()
            });

        }
        
	}

    erase(){
        
        this.setState({
            firstNum: false,
            secondNum: false,
            operator: false,
            typeOfOperator: null,
            display: 0,
            equalSign: false,
            result: null
        });

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
              //console.log("Not an number!");
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
                //console.log("Not an operator!");
                return null;
          }

    }

    secondNum(num){

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
              //console.log("Not an number!");
              return null;
          
        }

    }

    equal(operator){

        switch(operator) {
            
            case "=":
                this.setState({
                    equalSign: true,
                    secondNum: true,
                    result: this.calculate()
                });
                
                return operator;

            default:
                //console.log("Not an equal sign!");
                return null;
          }
          
    }

    calculate(){
        return new Function('return ' + this.state.display)();  
    }

    render(){
        console.log(this.state);
        
        return(
            <div id="calculator" className="grid-container cent">
                <div className="item1x1">{this.state.result ? this.state.result : ""}</div>
                <div className="item1x2">{this.state.display}</div>
                <button className="drum-pad metal linear item2" value="AC" onClick={this.erase}>AC</button>
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