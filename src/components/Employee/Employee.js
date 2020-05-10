//Functional Component.
import React from 'react';

//Inline CSS.
const style = {
    border: `black solid`,
    padding: `10px`,
    width: `50%`,
    margin: `auto`,
    marginTop: `8px`
}

let Employee = (props) => {
    return (
        <p style={style} className={props.pratice}>
            {props.name} from GSLAB working on {props.project}.
            <button onClick={props.changePratice} >switch to {props.pratice === `CIS` ? `SMAC` : `CIS`} practice</button>
            <br/>
            Update Project Name :<input onChange={props.changeProject} value={props.project}/>
        </p>
    );
}

export default Employee;