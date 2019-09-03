import React, { Component } from 'react';

import './App.css';
import Calendar from './Calendar';

function App() {
	let el = new Date();

	let monthNow = el.getMonth();
	let yearNow = el.getFullYear();
	let dayNow = el.getDay();

	//if the month selected, then display days for that month
	// 1. Get the current year with the current month and day

	// 1. determine which month we are checking for days

	// 2. grab all the days from that month

	// 3. display those days in the calendar

	// for (let i = 0; i < el.getFullYear().length; i++) {
	// 	el = el.getDate();
	// }

	return (
		<div className="App">
			<Calendar day={dayNow} month={monthNow} year={yearNow} />
		</div>
	);
}

export default App;
