import React, { Component } from 'react';

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
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
		let num = value === 1 ? (value = 1) : (value = -1);
		return this.setState((prevState) => {
			return { [name]: prevState.displayMonth +  num };
		});
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
				<button name="displayMonth" value={-1} onClick={this.handleData}>
					Go back!
				</button>
				<h3>
					{months[this.state.displayMonth]} {this.state.displayYear}
				</h3>
				<button name="displayMonth" value={1} onClick={this.handleData}>
					Go forward
				</button>
			</div>
		);
	}

	handleDays(month = this.state.displayMonth, year = this.state.displayYear) {
		let date = new Date(year, month, 1);
		let days = [];
		let numDays = 32 - new Date(year, month, 32).getDate();
		for (let i = 0; i < numDays; i++) {
			days.push(date.getDate() + i);
		}
		console.log(days);
	}

	render() {
		return (
			<div>
				<h1>Calendar</h1>
				<form>
					{/* <input
						type="text"
						name="displayYear"
						placeholder="Year"
						value={this.displayYear}
						onChange={this.handleData}
					/> */}
					{/* <select
						type="text"
						name="displayMonth"
						value={this.state.displayMonth}
						onChange={this.handleData}
						placeholder="month"
					>
						<option value="0">January</option>
						<option value="1">February</option>
						<option value="2">March</option>
						<option value="3">April</option>
						<option value="4">May</option>
						<option value="5">June</option>
						<option value="6">July</option>
						<option value="7">August</option>
						<option value="8">September</option>
						<option value="9">October</option>
						<option value="10">November</option>
						<option value="11">December</option>
					</select> */}

					{/* <button onChange={this.handleDays}>Click Me!!!!</button> */}
				</form>
				<h3>{this.handleMonth()}</h3>

				{this.handleDays()}
			</div>
		);
	}
}
export default Calendar;
