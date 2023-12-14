import React from 'react';
import classes from "./MyModal.module.css";
const MyModal = ({children,active,setActive}) => {
    return (
        <div className={active ? [classes.modal,classes.active].join(' '):classes.modal} onClick={() => setActive(false)}>
            <div className={classes.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;