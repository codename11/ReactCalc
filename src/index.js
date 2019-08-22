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
            num1: "",
            secondNum: false,
            num2: "",
            operator: false,
            typeOfOperator: null,
            display: 0,
            equalSign: false,
            result: null,
            dot1: false,
            dot2: false,
		};
		this.handleClick = this.handleClick.bind(this);
        this.ifNum = this.ifNum.bind(this);
        this.operator = this.operator.bind(this);
        this.equal = this.equal.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleClick(e){
        
        let pressed;
        pressed = e.target.value;

        if(this.state.num1==="" && this.state.num1.length===0 && ((pressed==="-") || (pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false){

            this.setState({
                num1: this.state.num1+pressed, 
            });
            
        }

        if(this.state.num1==="" && this.state.num1.length===0 && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false){

            this.setState({
                num1: this.state.num1+pressed, 
            });
            
        }

        if(this.state.num1!=="" && this.state.num1.length>0 && this.state.num1[this.state.num1.length-1] === "-" && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false){

            this.setState({
                num1: this.state.num1+pressed, 
            });
            
        }

        //console.log((this.state.num1[this.state.num1.length-1] === ".") +": "+this.state.num1[this.state.num1.length-1]);
        if(this.state.num1!=="" && this.state.num1.length>0 && ((this.state.num1[this.state.num1.length-1]==="0") || (this.state.num1[this.state.num1.length-1]==="1") || (this.state.num1[this.state.num1.length-1]==="2") || (this.state.num1[this.state.num1.length-1]==="3") || (this.state.num1[this.state.num1.length-1]==="4") || (this.state.num1[this.state.num1.length-1]==="5") || (this.state.num1[this.state.num1.length-1]==="6") || (this.state.num1[this.state.num1.length-1]==="7") || (this.state.num1[this.state.num1.length-1]==="8") || (this.state.num1[this.state.num1.length-1]==="9")) && pressed === "." && this.state.dot1 === false && this.state.firstNum === false){
        
            this.setState({
                num1: this.state.num1+pressed, 
                dot1: true
            });
            
        }

        // ((this.state.num1[this.state.num1.length-1]==="0") || (this.state.num1[this.state.num1.length-1]==="1") || (this.state.num1[this.state.num1.length-1]==="2") || (this.state.num1[this.state.num1.length-1]==="3") || (this.state.num1[this.state.num1.length-1]==="4") || (this.state.num1[this.state.num1.length-1]==="5") || (this.state.num1[this.state.num1.length-1]==="6") || (this.state.num1[this.state.num1.length-1]==="7") || (this.state.num1[this.state.num1.length-1]==="8") || (this.state.num1[this.state.num1.length-1]==="9"))
        // ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9"))
        // ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/"))
        // ((this.state.num1[this.state.num1.length-1] === "+") || (this.state.num1[this.state.num1.length-1] === "-") || (this.state.num1[this.state.num1.length-1] === "*") || (this.state.num1[this.state.num1.length-1] === "/"))
        if(this.state.dot1 === true && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false){
            
            this.setState({
                num1: this.state.num1+pressed, 
            });

        }

        if(((this.state.num1[this.state.num1.length-1]==="0") || (this.state.num1[this.state.num1.length-1]==="1") || (this.state.num1[this.state.num1.length-1]==="2") || (this.state.num1[this.state.num1.length-1]==="3") || (this.state.num1[this.state.num1.length-1]==="4") || (this.state.num1[this.state.num1.length-1]==="5") || (this.state.num1[this.state.num1.length-1]==="6") || (this.state.num1[this.state.num1.length-1]==="7") || (this.state.num1[this.state.num1.length-1]==="8") || (this.state.num1[this.state.num1.length-1]==="9")) && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/")) && pressed !== "." && this.state.firstNum === false){

            this.setState({
                num1: this.state.num1+pressed, 
            });

        }

        // minus broj tacka broj znak
        if(((this.state.num1[this.state.num1.length-1] === "+") || (this.state.num1[this.state.num1.length-1] === "-") || (this.state.num1[this.state.num1.length-1] === "*") || (this.state.num1[this.state.num1.length-1] === "/")) && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/"))){

            this.setState({
                num1: this.state.num1.substr(0, this.state.num1.length-1)+pressed, 
                operator: true,
                typeOfOperator: pressed,
                display: this.state.num1,
            });

        }

        if(this.state.num1.length>1 && ((this.state.num1[this.state.num1.length-1]==="0") || (this.state.num1[this.state.num1.length-1]==="1") || (this.state.num1[this.state.num1.length-1]==="2") || (this.state.num1[this.state.num1.length-1]==="3") || (this.state.num1[this.state.num1.length-1]==="4") || (this.state.num1[this.state.num1.length-1]==="5") || (this.state.num1[this.state.num1.length-1]==="6") || (this.state.num1[this.state.num1.length-1]==="7") || (this.state.num1[this.state.num1.length-1]==="8") || (this.state.num1[this.state.num1.length-1]==="9")) && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/"))){

            this.setState({
                firstNum: true,
            });

        }

        /*  Ukoliko je zadnji karakter u this.state.num1 neki znak, this.state.operator===true, 
            this.state.firstNum===true, onda treba da pocne ubacivanje u this.state.num2.
        */

    }

    ifNum(num){

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

    equal(operator){

        switch(operator) {
            
            case "=":
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
        //console.log("****");
        //console.log("****");
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

        const display = this.state.num1;

        return(
            <div id="calculator" className="grid-container cent">
                <Display klasa="item1x2" id="display" displayNums={display ? display : "0"}/>
                <Result klasa="item1x1" result={this.state.result}/>
                {buttons}
            </div>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));