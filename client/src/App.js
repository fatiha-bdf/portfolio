import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import Contact from './components/sections/Contact'

import AlertState from './context/alert/AlertState'
import AuthState from './context/auth/AuthState'


const App = () =>  {
	return (
		<AuthState>
		<AlertState>
		<Router>
			<Fragment >
				<div >
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path='/contact' component={Contact}/>
					</Switch>
				</div>
			</Fragment>
		</Router>
		</AlertState>
		</AuthState>
	);
}

export default App;
