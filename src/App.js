import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as Components from './components';

export default class App extends Component {
  render() {
    return (
      <div style={{backdropFilter: 'blur(50px)'}}>
        <Router>
          <Components.LeftNav />
          <Components.TopNav />
          <div className='layout'>
            <Routes>
              <Route path='/' >
                <Route path='/register' element={<Components.Signin />} />
                {/* <Route path='/login' element={<Components.Login />} /> */}
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}
