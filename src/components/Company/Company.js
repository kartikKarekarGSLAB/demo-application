//Container.
import React from 'react';
import Radium from 'radium';
import Employee from './../Employee/Employee';
import './../../styles/Application.css';

const Company = (props) => {
    let employees = props.employees.map( 
        (employee, index) => {
            if(props.showCIS && employee.pratice === `CIS`) {
                return (<Employee 
                    key={employee.id}
                    name={employee.name}
                    project={employee.project}
                    pratice={employee.pratice}
                    changePratice={ () => props.changePratice(index, employee.pratice) }
                    changeProject={ (event) => props.changeProject(event, employee.id) } />);

            } else if (props.showCIS=== false && employee.pratice === `SMAC`) {
                return (<Employee
                    key={employee.id} 
                    name={employee.name}
                    project={employee.project}
                    pratice={employee.pratice}
                    changePratice={ props.changePratice.bind(this, index, employee.pratice) }
                    changeProject={ (event) => props.changeProject(event, employee.id) } />);
            }
            return '';
        } 
    );

    return (<div className="Company">
             {employees}
            </div>);
}

export default Radium(Company);

// Note :
/*
Since the changePratice call back handler will 
take an argument we have called using the arow so that we can pass the required argument.
    ex : changePratice={ () => props.changePratice([parameterlist]) }
But if we want to avoid this, we can use bind function.
    ex : changePratice={ props.changePratice.bind(this, [parameterlist]) }
*/

/*
Note : do not use the index of an array to render the list elements.
 Since react use the attribute 'key' to update the list according.
 And if any of the element from the list got deleted the index are reshuffle again.
 So better to have a unique key for every element.
*/