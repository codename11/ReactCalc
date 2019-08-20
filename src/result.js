import React from 'react';

class Result extends React.Component{

    render(){ 
		return (
			<div className={this.props.klasa}>
				{this.props.result}
			</div>
		);  
	}
}

export default Result;