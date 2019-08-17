import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

class Calculator  extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            btn: " "
		};
		this.handleClick = this.handleClick.bind(this);
		
    }
    
    handleClick(e){
        
        let pressed;
        pressed = e.target.value;
        
        switch(e.target.value) {
            case "0":
                pressed = e.target.value;
              break;
            case "1":
                pressed = e.target.value;
                break;
            case "2":
                pressed = e.target.value;
                break;

            case "3":
                pressed = e.target.value;
                break;

            case "4":
                pressed = e.target.value;
                break;

            case "5":
                pressed = e.target.value;
                break;

            case "6":
                pressed = e.target.value;
                break;

            case "7":
                pressed = e.target.value;
                break;

            case "8":
                pressed = e.target.value;
                break;

            case "9":
                pressed = e.target.value;
                break;

            case ".":
                pressed = e.target.value;
                break;

            case "AC":
                pressed = "";
                
                break;

            default:
                pressed = "";
        }
        
        if(this.state.formula===undefined){

            if(pressed===""){
                this.setState({
                    formula: "",
                });
            }
            else{
                this.setState({
                    formula: pressed,
                });
            }
            
        }
        else{

            if(pressed===""){
                this.setState({
                    formula: "",
                });
            }
            else{
                this.setState({
                    formula: this.state.formula+pressed,
                });
            }
            
        }

        console.log(e.target.value);
		
	}

    render(){
        return(
            <div id="calculator" className="grid-container cent">
                <div className="item1x1">{this.state.formula}</div>
                <div className="item1x2"></div>
                <button className="drum-pad metal linear item2" value="AC" onClick={this.handleClick}>AC</button>
                <button className="drum-pad metal linear" value="/" onClick={this.handleClick}>/</button>
                <button className="drum-pad metal linear" value="x" onClick={this.handleClick}>x</button>
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