import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
	
	this.state = {
		string: 'Hello Harsh Rana'
		};
	}

	render() {
		return (
			<div className = 'App'>
				<header className= 'App-header'>
					<img src={logo} className="App-logo" alt="logo" />
					<p>{this.state.string}</p>
					<button onClick={() => this.setState({string: 'Hello Rana'})}>Change Text</button>
					</header>
				</div>
			);
	}

}


export default App;
