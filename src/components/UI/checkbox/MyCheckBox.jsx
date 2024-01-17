import React from 'react';
import classes from './MyCheckBox.module.css'
const MyCheckBox = ({children,...props}) => {

    return (
        <div className={classes.checkboxes}>
            <input {...props} type="checkbox" id="checkbox" className={classes.checkbox}/>
            <label htmlFor="checkbox" className={classes.label}>{children}</label>
        </div>

    );
};

export default MyCheckBox;