import React from 'react';

class Display extends React.Component{

    render(){ 
		return (
			<div className={this.props.klasa} id={this.props.id}>
				{this.props.displayNums}
			</div>
		);  
	}
}

export default Display;
