import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import Display from "./display.js";
import Result from "./result.js";
import Btn from "./button.js";

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
            result: null,
            dot1: false,
            dot2: false,
		};
		this.handleClick = this.handleClick.bind(this);
        this.firstNum = this.firstNum.bind(this);
        this.operator = this.operator.bind(this);
        this.secondNum = this.secondNum.bind(this);
        this.equal = this.equal.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleClick(e){
        
        let pressed;
        pressed = e.target.value;

        this.setState({
            display: pressed, 
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
        // eslint-disable-next-line
        return new Function('return ' + this.state.display)();  
    }

    render(){
        console.log(this.state);
        const mainClass = "drum-pad metal linear ";

        const btn = [
            {
                id:"clear", value:"AC"
            },
            {
                id:"divide", value:"/"
            },
            {
                id:"multiply", value:"*"
            },
            {
                id:"seven", value:"7"
            },
            {
                id:"eight", value:"8"
            },
            {
                id:"nine", value:"9"
            },
            {
                id:"subtract", value:"-"
            },
            {
                id:"four", value:"4"
            },
            {
                id:"five", value:"5"
            },
            {
                id:"six", value:"6"
            },
            {
                id:"add", value:"+"
            },
            {
                id:"one", value:"1"
            },
            {
                id:"two", value:"2"
            },
            {
                id:"three", value:"3"
            },
            {
                id:"equals", value:"="
            },
            {
                id:"zero", value:"0"
            },
            {
                id:"decimal", value:"."
            },

        ];
        const buttons = btn.map((item,i) => {

            if(i===0){
                return <Btn klasa={mainClass+"item2"} id={item.id} key={i} value={item.value} onClick={this.handleClick} text={item.value} />
            }
            else if(i===14){
                return <Btn klasa={mainClass+"item3"} id={item.id} key={i} value={item.value} onClick={this.handleClick} text={item.value} />
            }
            else if(i===15){
                return <Btn klasa={mainClass+"item4"} id={item.id} key={i} value={item.value} onClick={this.handleClick} text={item.value} />
            }
            else{
                return <Btn klasa={mainClass} id={item.id} key={i} value={item.value} onClick={this.handleClick} text={item.value} />
            }

        });

        return(
            <div id="calculator" className="grid-container cent">
                <Display klasa="item1x2" id="display" displayNums={this.state.display}/>
                <Result klasa="item1x1" result={this.state.result}/>
                {buttons}
            </div>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));