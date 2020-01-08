import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Test from './components/Test';
import Timer from './components/Timer';
import Button from '@material-ui/core/Button';
import Question from './components/Question';
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import QuestionCrumbs from './components/QuestionCrumbs';
import Dashboard from './screens/Dashboard';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './screens/Login';

function App() {
	const isLoggedIn = localStorage.getItem('authToken');
	console.log('isLoggedIn', isLoggedIn);
	const protectedRoute = (RouteComponent, props) => isLoggedIn ? <RouteComponent {...props}/> : <Redirect to={{pathname:'/login'}} />
  	return (
		  <Router>
			  <Route  path="/dashboard" render={(props) => <Dashboard {...props}/>} />
			  <Route exact path="/" render={(props) => <Login {...props}/>} />
		  </Router>
  	);
}


{/* <Router>
			  <Route exact path="/" render={(props) => protectedRoute(Dashboard, props)} />
			  <Route path="/login" render={(props) => isLoggedIn ? <Redirect to={{pathname:'/'}} />: <Login {...props}/>} />
		  </Router> */}
export default App;
