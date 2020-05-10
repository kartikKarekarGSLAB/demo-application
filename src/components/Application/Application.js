import React, { Component } from 'react';
import './../../styles/Application.css';
import  Company from './../Company/Company';

class Application extends Component {

  state = {
    employees : [{id: 'emp10001', name: "Kartik", project: "Patient Connect", pratice: "CIS"},
                 {id: 'emp10002', name: "Pravin", project: "CloudGnix", pratice: "SMAC"},
                 {id: 'emp10003', name: "Shivaji", project: "Patient Connect", pratice: "CIS"},
                 {id: 'emp10004', name: "Ram", project: "CloudGnix", pratice: "SMAC"},
                 {id: 'emp10005', name: "Sanket", project: "CloudGnix", pratice: "SMAC"},
                 {id: 'emp10006', name: "Shreya", project: "CloudGnix", pratice: "SMAC"}],
    showCIS : true
  }

  togglePratice= () => {
    let newState = {...this.state , showCIS: !this.state.showCIS};
    this.setState(newState);
  }

  changePratice= (empIndex, pratice) => {
    let currentEmployeeDetails = [...this.state.employees];
    currentEmployeeDetails[empIndex].pratice = (pratice === `CIS` ? `SMAC` : `CIS`);
    this.setState({...this.state, employees : currentEmployeeDetails});
  }

  changeProject= (event, id) => {
    let currentEmployeeDetails = [...this.state.employees];
    let personIndex = currentEmployeeDetails.findIndex( e => e.id === id);
    currentEmployeeDetails[personIndex].project = event.target.value;
    this.setState({...this.state, employees : currentEmployeeDetails});
  }

  render() {
    return (
      <div className="App">
        <h1>Hey folks! How are you :)</h1>
        <button onClick={this.togglePratice}>Show Employee from {this.state.showCIS ? `SMAC` : `CIS`} pratice.</button>        
        <Company 
          employees={this.state.employees} 
          showCIS={this.state.showCIS} 
          changePratice={this.changePratice}
          changeProject={this.changeProject} />
      </div>
    );
  }
}

export default Application;


/*
Note : Always update the state of in an inmutable fashion.
Don't directly update the state. i.e,
in changePratice function while taking the copy of emplyees from state as,
    let currentEmployeeDetails = this.state.employees;  //mutable While directly update the original state.
instead make a copy of the object, Do the required changes on that copy and the use it to update the state.
as,
  let currentEmployeeDetails = [...this.state.employees];
  currentEmployeeDetails[empIndex].pratice = (pratice === `CIS` ? `SMAC` : `CIS`);
  this.setState({...this.state, employees : currentEmployeeDetails});

*/