import React from 'react';
import logo from './logo.svg';
import './App.css';

import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './screens/Login';
import Profile from './screens/Profile';
import Navigations from './config/router';

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
              <h1>This is header</h1>

              <div style={{border: '2px dashed white', padding: 20, width: '100%'}}>
                <Navigations />
              </div>


              {/* {!this.state.showProfile ? <Login afterLogin={this.afterLogin.bind(this)} /> : <Profile />} */}
              <h1>This is footer</h1>
            </header>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
