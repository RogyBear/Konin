import React, { Component } from 'react';
import { getDay, getDaysInMonth, startOfMonth, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import '../css/Calendar.css';
import { gapi } from 'gapi-script';
import Spinner from './Spinner';

class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			displayMonth: new Date().getMonth(),
			displayYear: new Date().getFullYear(),
			daysInMonth: [],
			eventDates: []
		};
		this.handleData = this.handleData.bind(this);
		this.handleDays = this.handleDays.bind(this);
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
							if (events[i].start.date) {
								eventDates.push(events[i].start.date);
							} else if (events[i].start.dateTime) {
								eventDates.push(events[i].start.dateTime);
							}
						}
						that.setState({
							isLoading: false,
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
		let codedArray = [];
		let startDay = getDay(startOfMonth(new Date(this.state.displayYear, this.state.displayMonth)));
		
		if (startDay === 0) {
			startDay = 7;
		}
		console.log(startDay);

		//Filters array to return single array

		let filteredEventDates = this.state.eventDates
			.map((v, i, a) => {
				let vSliced = v.slice(0, 11);
				return vSliced;
			})
			.filter(
				(element, index, arr) =>
					!element.includes('T') || (element.includes('T') && !arr.includes(element.slice(0, -1)))
			);
		filteredEventDates = [ ...new Set(filteredEventDates) ];

		// End Filtering

		//Returns new array of busy, free, and freebusy

		this.state.daysInMonth.forEach((element) => {
			let count = 0;
			filteredEventDates.forEach((eventElement) => {
				count++;
				let slicedDate = eventElement.slice(0, 10);
				if (element === eventElement) {
					codedArray.push('Busy');
					count = 0;
				} else if (eventElement.includes('T') && slicedDate === element) {
					codedArray.push('FreeBusy');
					count = 0;
				} else if (element !== eventElement && count === filteredEventDates.length) {
					codedArray.push('Free');
				}
			});
		});

		//End new array return

		return codedArray.map((el, i) => {
			let params = {};
			switch (el) {
				case 'FreeBusy':
					params = {
						str: 'Полу&#8209;занят',
						dayCode: 'purpleBlueDay',
						start: startDay,
						firstDay: i
					};
					break;

				case 'Busy':
					params = {
						str: 'Занят',
						dayCode: 'purpleDay',
						start: startDay,
						firstDay: i
					};
					break;

				default:
					params = {
						str: 'Свободно',
						dayCode: 'day',
						start: startDay,
						firstDay: i
					};
					break;
			}

			return (
				<div style={params.firstDay === 0 ? { gridColumnStart: startDay } : null} className={params.dayCode}>
					{i + 1} <span className="tooltiptext">{params.str}</span>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="calendar">
				<Spinner loading={this.state.isLoading} />
				<div className="month-selector">
					<button
						className="reverse-btn"
						name="displayMonth"
						value={this.state.displayMonth === 0 ? 'minusOneYear' : 'dec'}
						onClick={this.handleData}
					/>
					<h3>
						{format(new Date(this.state.displayYear, this.state.displayMonth), 'MMMM yyyy', { locale: ru })
							.charAt(0)
							.toUpperCase() +
							format(new Date(this.state.displayYear, this.state.displayMonth), 'MMMM yyyy', {
								locale: ru
							}).slice(1)}
					</h3>
					<button
						className="forward-btn"
						name="displayMonth"
						value={this.state.displayMonth === 11 ? 'addOneYear' : 'inc'}
						onClick={this.handleData}
					/>
				</div>
				<div className="daysBox">{this.handleDays()}</div>
			</div>
		);
	}
}
export default Calendar;
