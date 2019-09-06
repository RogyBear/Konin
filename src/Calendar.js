import React, { Component } from 'react';
import { getDay, getDaysInMonth, startOfMonth, format } from 'date-fns';
import './Calendar.css';
import { gapi } from 'gapi-script';

class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayMonth: new Date().getMonth(),
			displayYear: new Date().getFullYear()
		};
		this.handleData = this.handleData.bind(this);
		this.handleDays = this.handleDays.bind(this);
		
		// this.handleDate = this.handleDate.bind(this);
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
						let eventDates = [];
						for (let i = 0; i < events.length; i++) {
							eventDates.push(events[i].start);
						}
						that.setState({
							eventDates
						});
					},
					function(reason) {
						console.log(reason);
					}
				);
		}
		gapi.load('client', start);
	}

	//End Google Calendar API

	// Correctly update the days in the month

	handleData(event) {
		const { value } = event.target;
		let data;
		this.setState((prevState) => {
			switch (value) {
				case 'inc':
					data = { displayMonth: prevState.displayMonth + 1 };
					break;
				case 'dec':
					data = { displayMonth: prevState.displayMonth - 1 };
					break;
				case 'minusOneYear':
					data = {
						displayYear: prevState.displayYear - 1,
						displayMonth: 11
					};
					break;
				case 'addOneYear':
					data = {
						displayYear: prevState.displayYear + 1,
						displayMonth: 0
					};
					break;
				default:
					break;
			}
			return data;
		});
	}

	static getDerivedStateFromProps(props, state) {
		let days = [];
		let month = state.displayMonth;
		let year = state.displayYear;
		for (let i = 1; i <= getDaysInMonth(new Date(state.displayYear, state.displayMonth)); i++) {
			days.push(format(new Date(year, month, i), 'yyyy-MM-dd'));
		}

		return {
			daysInMonth: [ ...days ]
		};
	}

	handleDays() {
		let daysUI;
		let startDay = getDay(startOfMonth(new Date(this.state.displayYear, this.state.displayMonth)));
		const styles = {
			gridColumnStart: startDay
		};

		daysUI = this.state.daysInMonth.map((el, i) => {
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
				<div className="month-selector">
					<button
						className="reverse-btn"
						name="displayMonth"
						value={this.state.displayMonth === 0 ? 'minusOneYear' : 'dec'}
						onClick={this.handleData}
					/>

					<h3>
						{(format(new Date(this.state.displayYear, this.state.displayMonth), 'MMMM yyyy'))}
					</h3>

					<button
						className="forward-btn"
						name="displayMonth"
						value={this.state.displayMonth === 11 ? 'addOneYear' : 'inc'}
						onClick={this.handleData}
					/>
				</div>
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
