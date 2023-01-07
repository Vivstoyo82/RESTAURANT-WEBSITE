import React from "react";
import classes from './Input.module.css';

const Input = (props) => { 
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} /> 
        {/* yahan par humne {...props.input isliye} use kiya hai suppose props.input humko aik text de raha hai so woh type="text" add karde */}
    </div>
};

export default Input;