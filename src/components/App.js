import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
      <Nav  />
      <div className="container">
        <div className="row">
          <div className ="col-xs-12">
            {this.props.children}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
