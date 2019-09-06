import React, { Component } from 'react';
import { getDaysInMonth } from 'date-fns';
import './App.css';
import Calendar from './Calendar';

function App() {


	return (
		<div className="App">
			<Calendar />
		</div>
	);
}

export default App;
