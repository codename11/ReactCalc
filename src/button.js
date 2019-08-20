import React from 'react';

class Btn extends React.Component{

    render(){ 
		return (
			<button  className={this.props.klasa} id={this.props.id} value={this.props.value} onClick={this.props.onClick}>{this.props.text}</button>
		);  
	}
}

export default Btn;