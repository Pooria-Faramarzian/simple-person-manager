import React, { Component } from 'react';

import Persons from './components/Persons';

import './App.css';

class App extends Component {
	state = {
		persons: [
			{ id: 1, firstName: 'Pooria', lastName: 'Faramarzian' },
			{ id: 2, firstName: 'Ali', lastName: 'Alavi' },
			{ id: 3, firstName: 'younes', lastName: 'Ebadi' }
		],
		showPersons: false
	};

	handleShowPerson = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};
	handleDeletePerson = id => {
		const perosns = [...this.state.persons];
		const filteredPersons = perosns.filter(person => person.id !== id);
		this.setState({ persons: filteredPersons });
	};

	render() {
		const buttonStyle = {
			padding: '0.5rem',
			backgroundColor: 'skyBlue'
		};
		const { persons, showPersons } = this.state;
		let person = null;
		if (showPersons) {
			person = (
				<Persons persons={persons} personDelete={this.handleDeletePerson} />
			);
		}
		return (
			<div className='App'>
				<h2>Hello World</h2>
				<hr />
				{person}
				<button style={buttonStyle} onClick={this.handleShowPerson}>
					Show Perosns
				</button>
			</div>
		);
	}
}
export default App;
