import React, { Component } from 'react';
import './../../styles/Application.css';
import  Employee from './../Employee/Employee';

class Application extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is where I again started with REACT !</h1>
        <Employee name={`kartik`} project={`Patient Connect`} pratice={`CIS`}/>
      </div>
    );
  }
}

export default Application;