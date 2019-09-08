import React, {Component} from 'react';
// import {Provider} from 'mobx-react'
// import APP_STORE from './app/store'

// import store from './app/store';
import Router from './app/route'

export default class App extends Component {
  render() {
    return (
      // <Provider {...store}>
        <Router/>
      // </Provider>
    );
  }
}