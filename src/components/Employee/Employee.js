import React from 'react';

let Employee = (props) => {
    return (
    <p>Hey this {props.name} from GSLAB working on {props.project} under {props.pratice}.</p>
    );
}

export default Employee;