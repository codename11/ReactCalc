import React from 'react';

class Formula extends React.Component{

    render(){ 
		return (
			<div className={this.props.klasa}>
				{this.props.formula}
			</div>
		);  
	}
}

export default Formula;