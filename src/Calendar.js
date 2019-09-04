import React, { Component } from 'react';

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayMonth: this.props.month,
			displayYear: this.props.year,
			displayDays: []
		};
		this.handleData = this.handleData.bind(this);
		this.handleDays = this.handleDays.bind(this);
		this.handleMonth = this.handleMonth.bind(this);
	}

	handleData(event) {
		const { name, value } = event.target;
		if (value === 'inc') {
			return this.setState((prevState) => {
				return { [name]: prevState.displayMonth + 1 };
			});
		} else if (value === 'dec') {
			return this.setState((prevState) => {
				return { [name]: prevState.displayMonth - 1 };
			});
		} else if (value === 'minusOneYear') {
			return this.setState((prevState) => {
				return {
					displayYear: prevState.displayYear - 1,
					displayMonth: (prevState.displayMonth = 11)
				};
			});
		} else if (value === 'addOneYear') {
			return this.setState((prevState) => {
				return {
					displayYear: prevState.displayYear + 1,
					displayMonth: (prevState.displayMonth = 0)
				};
			});
		} else {
			return this.setState({
				[name]: value
			});
		}
	}

	handleMonth() {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		return (
			<div>
				<button
					name="displayMonth"
					value={this.state.displayMonth === 0 ? 'minusOneYear' : 'dec'}
					onClick={this.handleData}
				>
					Go back!
				</button>
				<h3>
					{months[this.state.displayMonth]} {this.state.displayYear}
				</h3>
				<button
					name="displayMonth"
					value={this.state.displayMonth === 11 ? 'addOneYear' : 'inc'}
					onClick={this.handleData}
				>
					Go forward
				</button>
			</div>
		);
	}

	handleDays(month = this.state.displayMonth, year = this.state.displayYear) {
		let date = new Date(year, month, 1);
		let days = [];
		let rowUI =[[],[],[],[],[]]
		let daysUI;

		let numDays = 32 - new Date(year, month, 32).getDate();
		for (let i = 0; i < numDays; i++) {
			days.push(date.getDate() + i);
		}
		daysUI = days.map((el) => {
				
				retrun (<div>{el}</div>)
			
		});

		// Problem: put all of the span elements into dive elements.
		// Once there are 7 span elements in 1 dev element,
		// create a new div element and push the remaining span elements into those divs.
		// Once all of the divs have been filled, return the final result
		// Solution:
		// 1. push the spans into
		return daysUI;
	}
	render() {
		return (
			<div>
				<h1>Calendar</h1>
				<h3>{this.handleMonth()}</h3>
				<div>{this.handleDays()}</div>
			</div>
		);
	}
}
export default Calendar;
