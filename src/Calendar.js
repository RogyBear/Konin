import React, { Component } from 'react';
import { getDay, getDaysInMonth, startOfMonth } from 'date-fns';
import './Calendar.css';
import { gapi } from 'gapi-script';

class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayMonth: this.props.month,
			displayYear: this.props.year,
			events: []
		};
		this.handleData = this.handleData.bind(this);
		this.handleDays = this.handleDays.bind(this);
		this.handleMonth = this.handleMonth.bind(this);
	}

	// Google Calendar API

	componentDidMount = () => {
		this.getEvents();
	};

	getEvents() {

		let that = this;
		function start() {
			gapi.client
				.init({
					apiKey: 'AIzaSyDrKBMhLmh1-M3ubOcxqLQuhQrHEx2_U8Y'
				})
				.then(function() {
					return gapi.client.request({
						path: `https://www.googleapis.com/calendar/v3/calendars/${`68d19lho66i1dklnm3e7lpg7fs@group.calendar.google.com`}/events`
					});
				})
				.then(
					(response) => {
						let events = response.result.items;
						that.setState(
							{
								events
							},
							() => {
								
								console.log(that.state.events);
								
							}
						);
					},
					function(reason) {
						console.log(reason);
					}
				);
		}
		gapi.load('client', start);
	}

	//End Google Calendar API

	handleData(event) {
		const { name, value } = event.target;
		if (value === 'inc') {
			return this.setState((prevState) => {
				return {
					[name]: prevState.displayMonth + 1
				};
			});
		} else if (value === 'dec') {
			return this.setState((prevState) => {
				return {
					[name]: prevState.displayMonth - 1
				};
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
			<div className="month-selector">
				<button
					className="reverse-btn"
					name="displayMonth"
					value={this.state.displayMonth === 0 ? 'minusOneYear' : 'dec'}
					onClick={this.handleData}
				/>

				<h3>
					{months[this.state.displayMonth]} {this.state.displayYear}
				</h3>
				<button
					className="forward-btn"
					name="displayMonth"
					value={this.state.displayMonth === 11 ? 'addOneYear' : 'inc'}
					onClick={this.handleData}
				/>
			</div>
		);
	}

	handleDays(month = this.state.displayMonth, year = this.state.displayYear) {
		let date = new Date(year, month, 1);
		let days = [];
		let daysUI;
		let startDay = getDay(startOfMonth(new Date(year, month)));

		const styles = {
			gridColumnStart: startDay
		};
		let numDays = getDaysInMonth(new Date(year, month));
		for (let i = 0; i < numDays; i++) {
			days.push(date.getDate() + i);
		}
		daysUI = days.map((el, i) => {
			if (i === 0) {
				styles.gridColumnStart = startDay;
				return (
					<div style={styles} className="day">
						{el}
					</div>
				);
			} else {
				return <div className="day">{el}</div>;
			}
		});

		return daysUI;
	}
	render() {
		return (
			<div className="calendar">
				{this.handleMonth()}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(7, 40px)',
						gridTemplateRows: 'repeat(6, 40px)',
						fontFamily: 'sans-serif'
					}}
				>
					{this.handleDays()}
				</div>
			</div>
		);
	}
}
export default Calendar;
