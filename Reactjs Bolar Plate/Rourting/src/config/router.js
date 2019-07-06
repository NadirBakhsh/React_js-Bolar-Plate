import React from 'react';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import IndividualProfile from '../screens/IndividualProfile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigations() {
    return (
        //this.props.history.push('/dashboard')
        <Router>
            {/* optional */}
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
            {/* optional */}

            
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/profile/:username" component={IndividualProfile} />
                {/* this.props.match.params.username */}
            </div>
        </Router>
    );
}

export default Navigations