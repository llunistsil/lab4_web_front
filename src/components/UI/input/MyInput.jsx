import React from 'react';
import classes from "./MyInput.module.css";
const MyInput = ({children,...props}) => {
    return (
        <input {...props} className={classes.myText}>
        </input>
    );
};

export default MyInput;