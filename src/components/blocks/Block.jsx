import React from 'react';
import classes from "./Block.module.css";

const Block = ({children,...props}) => {
    return (
        <div {...props} className={classes.block}>
            {children}
        </div>
    );
};

export default Block;