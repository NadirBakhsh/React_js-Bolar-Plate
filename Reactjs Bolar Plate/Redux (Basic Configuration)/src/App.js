import React from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';
import Login from './screens/Login';
import Profile from './screens/Profile';

class App extends React.Component {
  state = {
    showProfile: false
  }

  afterLogin() {
    this.setState({showProfile: true});
  }

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            {!this.state.showProfile ? <Login afterLogin={this.afterLogin.bind(this)}/> : <Profile />}

          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
