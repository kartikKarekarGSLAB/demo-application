//Functional Component.
import React from 'react';
import Radium from 'radium';

/*
    Radium used for adding the sudo selectors and media query to the component in CSS styling.
*/

//Inline CSS.
const style = {
    border: `black solid`,
    padding: `10px`,
    width: `50%`,
    margin: `auto`,
    marginTop: `8px`
}

const CIShover = {
    backgroundColor: `#9C27B0`,
    color: `aliceblue`
}
 
const SMAChover = {
    backgroundColor: `chocolate`,
    color: `white`
}

let Employee = (props) => {

    //This selector available because we have added the Radium.
    style[`:hover`] = props.pratice === `CIS` ? CIShover : SMAChover;
    return (
        <p style={style} className={props.pratice}>
            {props.name} from GSLAB working on {props.project}.
            <button onClick={props.changePratice} >switch to {props.pratice === `CIS` ? `SMAC` : `CIS`} practice</button>
            <br/>
            Update Project Name :<input onChange={props.changeProject} value={props.project}/>
        </p>
    );
}

export default Radium(Employee);