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

        if(pressed==="AC"){
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
        
        if(this.firstNum(pressed) && this.state.firstNum === false){
            
            this.setState({
                display: this.state.display===0 ? this.firstNum(pressed) : this.state.display+this.firstNum(pressed),
            });
            
        }
        
        if(pressed==="." && this.state.display===0 && this.state.firstNum === false){
            
            this.setState({
                display: this.state.display===0 ? this.state.display+pressed : this.state.display+pressed,
            });

        }

        if(pressed==="." && this.state.display.length>0 && this.state.firstNum === false && this.state.dot1 === false){
            
            this.setState({
                display: this.state.display===0 ? this.state.display+pressed : this.state.display+pressed,
                dot1: true,
            });

        }

        if(pressed==="." && this.state.firstNum === true && this.state.secondNum === false && this.state.equalSign===false && this.state.dot2 === false){
            
            this.setState({
                display: this.state.display===0 ? this.state.display+pressed : this.state.display+pressed,
                dot2: true,
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
console.log(buttons);
        return(
            <div id="calculator" className="grid-container cent">
                <Result klasa="item1x1" result={this.state.result ? this.state.result : ""}/>
                <Display klasa="item1x2" id="display" displayNums={this.state.display}/>
                {buttons}
            </div>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));