import React, { Component } from 'react';

class Test extends Component {
    render() {
		return (
			<div style={{marginTop: '100px'}}>
				<div className="container ">
					<div className="row p-3 mb-2 bg-info text-dark">
						<div className="col-sm">
						One of three columns
						</div>
						<div className="col-sm">
						One of three columns
						</div>
						<div className="col-sm">
						One of three columns
						</div>
					</div>
				</div>
			</div>
			
		);
	}
}


export default Test
