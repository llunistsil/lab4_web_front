import React from 'react';
import classes from './MyLink.module.css'
import {Link} from "react-router-dom";
const MyLink = ({children,...props}) => {
    return (
        <Link className={classes.mylink} {...props}>
            {children}
        </Link>
    );
};

export default MyLink;