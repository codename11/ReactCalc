import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import Display from "./display.js";
import Formula from "./formula.js";
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
            operatorNum: 0,
            display: "",
            equalSign: false,
            result: null,
            dot1: false,
            dot2: false,
            pressed: "",
        };
        this.handleEvent = this.handleEvent.bind(this);
		this.handleClick = this.handleClick.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleEvent, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleEvent, false);
    }

    handleEvent(e){

        let pressed = "";    
        pressed = e.target.value ? e.target.value : e.key;

        if(pressed !== "" && this.state.display === 0){
            
            console.log("1");
            this.setState({
                display: "",
            });
            return;
        }

        if(this.state.num1==="" && this.state.num1.length===0 && ((pressed==="-") || (pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false){
            
            console.log("2");
            this.setState({
                num1: this.state.num1+pressed, 
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }

        if(this.state.num1==="" && this.state.num1.length===0 && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false){
            
            console.log("3");
            this.setState({
                num1: this.state.num1+pressed, 
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }
        
        if(this.state.num1!=="" && this.state.num1.length>0 && this.state.num1[this.state.num1.length-1] === "-" && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false){
            
            console.log("4");
            this.setState({
                num1: this.state.num1+pressed, 
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }

        if(this.state.num1!=="" && this.state.num1.length>0 && this.state.firstNum === false && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9"))){

            console.log("5");
            this.setState({
                num1: (this.state.num1[this.state.num1.length-1]==="0" && pressed==="0") ? this.state.num1 : this.state.num1+pressed, 
                display: (this.state.num1[this.state.num1.length-1]==="0" && pressed==="0") ? this.state.num1 : this.state.num1+pressed,
                pressed: pressed,
            });
            return;
        }
        
        if(this.state.num1!=="" && this.state.num1.length>0 && ((this.state.num1[this.state.num1.length-1]==="0") || (this.state.num1[this.state.num1.length-1]==="1") || (this.state.num1[this.state.num1.length-1]==="2") || (this.state.num1[this.state.num1.length-1]==="3") || (this.state.num1[this.state.num1.length-1]==="4") || (this.state.num1[this.state.num1.length-1]==="5") || (this.state.num1[this.state.num1.length-1]==="6") || (this.state.num1[this.state.num1.length-1]==="7") || (this.state.num1[this.state.num1.length-1]==="8") || (this.state.num1[this.state.num1.length-1]==="9")) && pressed === "." && this.state.dot1 === false && this.state.firstNum === false){
            
            console.log("6");
            this.setState({
                num1: this.state.num1+pressed, 
                dot1: true,
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }

        if(this.state.dot1 === true && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && this.state.firstNum === false && this.state.operator === false){
           
            console.log("7");
            this.setState({
                num1: this.state.num1+pressed, 
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }

        if(((this.state.num1[this.state.num1.length-1]==="0") || (this.state.num1[this.state.num1.length-1]==="1") || (this.state.num1[this.state.num1.length-1]==="2") || (this.state.num1[this.state.num1.length-1]==="3") || (this.state.num1[this.state.num1.length-1]==="4") || (this.state.num1[this.state.num1.length-1]==="5") || (this.state.num1[this.state.num1.length-1]==="6") || (this.state.num1[this.state.num1.length-1]==="7") || (this.state.num1[this.state.num1.length-1]==="8") || (this.state.num1[this.state.num1.length-1]==="9")) && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/")) && pressed !== "." && this.state.firstNum === false && this.state.operator === false){
            
            console.log("8");
            this.setState({
                num1: this.state.num1+pressed, 
                operatorNum: this.state.operatorNum+1,
                typeOfOperator: pressed,
                display: this.state.display+pressed,
                pressed: pressed,
                operator: true,
                firstNum: true,
            });
            return;
        }

        if(((this.state.num1[this.state.num1.length-1] === "+") || (this.state.num1[this.state.num1.length-1] === "-") || (this.state.num1[this.state.num1.length-1] === "*") || (this.state.num1[this.state.num1.length-1] === "/")) && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/")) && this.state.operator === true && this.state.num2 === ""){
            
            console.log("9");
            let num1; 
            
            if(pressed==="+" && ((this.state.num1[this.state.num1.length-2]==="*" || this.state.num1[this.state.num1.length-2]==="/" || this.state.num1[this.state.num1.length-2]==="-") && (this.state.num1[this.state.num1.length-1]==="-"))){
                console.log("9.1");
                num1 = this.state.num1.substr(0,this.state.num1.length-2)+pressed;
            }
            else if((pressed==="+" || pressed==="*" || pressed==="/") && ((this.state.num1[this.state.num1.length-2]==="0") || (this.state.num1[this.state.num1.length-2]==="1") || (this.state.num1[this.state.num1.length-2]==="2") || (this.state.num1[this.state.num1.length-2]==="3") || (this.state.num1[this.state.num1.length-2]==="4") || (this.state.num1[this.state.num1.length-2]==="5") || (this.state.num1[this.state.num1.length-2]==="6") || (this.state.num1[this.state.num1.length-2]==="7") || (this.state.num1[this.state.num1.length-2]==="8") || (this.state.num1[this.state.num1.length-2]==="9")) && (this.state.num1[this.state.num1.length-1]==="+" || this.state.num1[this.state.num1.length-1]==="-" || this.state.num1[this.state.num1.length-1]==="*" || this.state.num1[this.state.num1.length-1]==="/")){
                console.log("9.2");
                num1 = this.state.num1.substr(0,this.state.num1.length-1)+pressed;
            }
            else if(pressed==="-" && this.state.num1[this.state.num1.length-1]==="+"){
                console.log("9.3");
                num1 = this.state.num1.substr(0,this.state.num1.length-1)+pressed;
            }
            else if(pressed==="-" && (this.state.num1[this.state.num1.length-1]==="*" || this.state.num1[this.state.num1.length-1]==="/")){
                console.log("9.3");
                num1 = this.state.num1+pressed;
            }
            
            this.setState({
                num1: num1, 
                typeOfOperator: pressed,
                operator: true,
                operatorNum: this.state.operatorNum+1,
                display: num1, 
                pressed: pressed,
            });
            return;
        }

        if(this.state.num1.length>1 && ((this.state.num1[this.state.num1.length-1]==="0") || (this.state.num1[this.state.num1.length-1]==="1") || (this.state.num1[this.state.num1.length-1]==="2") || (this.state.num1[this.state.num1.length-1]==="3") || (this.state.num1[this.state.num1.length-1]==="4") || (this.state.num1[this.state.num1.length-1]==="5") || (this.state.num1[this.state.num1.length-1]==="6") || (this.state.num1[this.state.num1.length-1]==="7") || (this.state.num1[this.state.num1.length-1]==="8") || (this.state.num1[this.state.num1.length-1]==="9")) && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/")) && this.state.operator === false){
            
            console.log("10");
            this.setState({
                num1: this.state.num1+pressed, 
                firstNum: true,
                operatorNum: this.state.operatorNum+1,
                typeOfOperator: pressed,
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }

        if(this.state.firstNum === true && this.state.operatorNum>0 && this.state.num2 === "" && this.state.num2.length === 0 && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && ((this.state.num1[this.state.num1.length-1] === "+") || (this.state.num1[this.state.num1.length-1] === "-") || (this.state.num1[this.state.num1.length-1] === "*") || (this.state.num1[this.state.num1.length-1] === "/"))){
            
            console.log("11");
            this.setState({
                operator: true,
                operatorNum: this.state.operatorNum+1,
                num2: this.state.num2+pressed, 
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }
        
        if(pressed === "." && this.state.dot2 === false && this.state.operatorNum>0 && ((this.state.num2[this.state.num2.length-1]==="0") || (this.state.num2[this.state.num2.length-1]==="1") || (this.state.num2[this.state.num2.length-1]==="2") || (this.state.num2[this.state.num2.length-1]==="3") || (this.state.num2[this.state.num2.length-1]==="4") || (this.state.num2[this.state.num2.length-1]==="5") || (this.state.num2[this.state.num2.length-1]==="6") || (this.state.num2[this.state.num2.length-1]==="7") || (this.state.num2[this.state.num2.length-1]==="8") || (this.state.num2[this.state.num2.length-1]==="9"))){
            
            console.log("12");
            this.setState({
                num2: this.state.num2+pressed, 
                dot2: true,
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }
        
        if(this.state.num2[this.state.num2.length-1] === "." && this.state.dot2 === true && this.state.secondNum === false && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9"))){
            
            console.log("13");
            this.setState({
                num2: this.state.num2+pressed,
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }

        if(this.state.secondNum === false && ((pressed==="0") || (pressed==="1") || (pressed==="2") || (pressed==="3") || (pressed==="4") || (pressed==="5") || (pressed==="6") || (pressed==="7") || (pressed==="8") || (pressed==="9")) && ((this.state.num2[this.state.num2.length-1]==="0") || (this.state.num2[this.state.num2.length-1]==="1") || (this.state.num2[this.state.num2.length-1]==="2") || (this.state.num2[this.state.num2.length-1]==="3") || (this.state.num2[this.state.num2.length-1]==="4") || (this.state.num2[this.state.num2.length-1]==="5") || (this.state.num2[this.state.num2.length-1]==="6") || (this.state.num2[this.state.num2.length-1]==="7") || (this.state.num2[this.state.num2.length-1]==="8") || (this.state.num2[this.state.num2.length-1]==="9"))){
            
            console.log("14");
            this.setState({
                num2: this.state.num2+pressed, 
                display: this.state.display+pressed,
                pressed: pressed,
            });
            return;
        }

        if(pressed === "=" && this.state.equalSign === false){

            console.log("15");
            let calculated = this.calculate(this.state.num1+this.state.num2).toFixed(4);

            let result = calculated ? calculated.replace(/0+$/, '') : "";
            result = ((result[result.length-1] === ".")) ? result.substr(0,result.length-1) : result;
            
            this.setState({
                equalSign: true, 
                secondNum: true,
                result: result,
                display: this.state.display+pressed,
                operator: true,
                operatorNum: this.state.operatorNum+1,
                pressed: pressed,
                dot1: this.state.num1.indexOf(".")>=0 ? true : false,
                dot2: this.state.num2.indexOf(".")>=0 ? true : false,
            });
            return;
        }

        //If pressed sign after equal.
        if(this.state.equalSign === true && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/"))){
            
            console.log("16");
            let tmp = (""+(Number(this.state.result).toFixed(4)).replace(/0+$/, ''));
            this.setState({
                firstNum: true,
                num1: (tmp[tmp.length-1]==="." ? tmp.substr(0,tmp.length-1) : tmp)+pressed,
                secondNum: false,
                num2: "",
                operator: true,
                typeOfOperator: pressed,
                operatorNum: this.state.operatorNum+1,
                display: (tmp[tmp.length-1]==="." ? tmp.substr(0,tmp.length-1) : tmp)+pressed,
                equalSign: false,
                result: null,
                dot1: this.state.num1.indexOf(".")>=0 ? true : false,
                dot2: this.state.num2.indexOf(".")>=0 ? true : false,
                pressed: pressed,
            });
            return;
        }
        
        if(this.state.operator === true && this.state.operatorNum > 0 && this.state.equalSign === false && this.state.firstNum === true && ((this.state.num2[this.state.num2.length-1]==="0") || (this.state.num2[this.state.num2.length-1]==="1") || (this.state.num2[this.state.num2.length-1]==="2") || (this.state.num2[this.state.num2.length-1]==="3") || (this.state.num2[this.state.num2.length-1]==="4") || (this.state.num2[this.state.num2.length-1]==="5") || (this.state.num2[this.state.num2.length-1]==="6") || (this.state.num2[this.state.num2.length-1]==="7") || (this.state.num2[this.state.num2.length-1]==="8") || (this.state.num2[this.state.num2.length-1]==="9")) && ((pressed === "+") || (pressed === "-") || (pressed === "*") || (pressed === "/")) && (this.state.dot2===true || this.state.dot2===false)){
            
            console.log("17");
            let tmp = ((Number(this.calculate(this.state.display)).toFixed(4)).replace(/0+$/, ''));
            tmp = ((tmp[tmp.length-1] === ".")) ? tmp.substr(0,tmp.length-1) : tmp;
            this.setState({
                pressed: pressed,
                display: tmp+pressed,
                num1: tmp+pressed,
                num2: "",
                operator: true,
                typeOfOperator: pressed,
                operatorNum: this.state.operatorNum+1,
                result: null,
                secondNum: false,
                equalSign: false,
                dot2: false,
            });
            return;
        }

        if(pressed === "AC" ){

            this.setState({
                firstNum: false,
                num1: "",
                secondNum: false,
                num2: "",
                operator: false,
                typeOfOperator: null,
                operatorNum: 0,
                display: "",
                equalSign: false,
                result: null,
                dot1: false,
                dot2: false,
                pressed: "",
            });
            return;
        }
        
    }

    handleClick(e){
        
        this.handleEvent(e);

    }

    calculate(exp){
        // eslint-disable-next-line
        return eval(exp);  
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
        
        let result = (this.state.result && this.state.result.indexOf(".")!==-1) ? this.state.result.replace(/0+$/, '') : (this.state.result ? this.state.result : "");
        result = ((result[result.length-1] === ".")) ? result.substr(0,result.length-1) : result;
        let pressed = this.state.pressed ? this.state.pressed : "0";
        
        const formula = (this.state.display && ((this.state.display[this.state.display.length-1] !== "+") || (this.state.display[this.state.display.length-1] !== "-") || (this.state.display[this.state.display.length-1] !== "*") || (this.state.display[this.state.display.length-1] !== "/"))) ? this.state.display+(result ? result : "") : (this.state.display[this.state.display.length-1] ? this.state.display[this.state.display.length-1] : "");
        
        let num1 = this.state.firstNum ? this.state.num1 : this.state.num1;
        num1 = (num1[num1.length-1]==="+" || num1[num1.length-1]==="-" || num1[num1.length-1]==="*" || num1[num1.length-1]==="/") ? num1.substr(0,num1.length-1) : num1;
        
        let sign = (pressed === "+" || pressed === "-" || pressed === "*" || pressed === "/") ? pressed : "";
        
        let num2 = this.state.secondNum ? this.state.num2 : this.state.num2;
        num2 = (num2[num2.length-1]==="+" || num2[num2.length-1]==="-" || num2[num2.length-1]==="*" || num2[num2.length-1]==="/") ? num1.substr(0,num2.length-1) : num2;

        let blah;

        if(num1){
            blah = num1;
        }
        
        if(sign){
            blah = sign;
        }
        
        if(num2){
            blah = num2;
        }

        if(blah===undefined){
            blah = "0";
        }

        return(
            <div id="calculator" className="grid-container cent">
                <Formula klasa={"item1x1"} formula={formula}/>
                <Display klasa={"item1x2"} id={"display"} displayNums={result ? result : blah}/>
                {buttons}
            </div>
        );
    }

}

ReactDOM.render(<Calculator/>, document.getElementById('root'));