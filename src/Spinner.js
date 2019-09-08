import React from 'react';
import { css } from '@emotion/core';
// First way to import
import ClipLoader from 'react-spinners/RingLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-80%, -80%);
`;

class Spinner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
		console.log(this.state.loading);
	}
	static getDerivedStateFromProps(props, state) {
		return { loading: props.loading };
	}

	render() {
		return (
			<div className="sweet-loading">
				<ClipLoader css={override} sizeUnit={'px'} size={75} color={'#00afc6'} loading={this.state.loading} />
			</div>
		);
	}
}
export default Spinner;
