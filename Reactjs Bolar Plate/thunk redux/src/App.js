import React from 'react';
import logo from './logo.svg';
import './App.css';

import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './screens/Login';
import Profile from './screens/Profile';

class App extends React.Component {
  state = {
    showProfile: false
  }

  afterLogin() {
    this.setState({ showProfile: true });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

              {!this.state.showProfile ? <Login afterLogin={this.afterLogin.bind(this)} /> : <Profile />}

            </header>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
