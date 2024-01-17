import React from 'react';
import classes from "./MyModal.module.css";
import { useNavigate } from "react-router-dom";
const MyModal = ({children,location,toast}) => {
    const navigate = useNavigate()
    return (
        <div className={[classes.modal,classes.active].join(' ')} onClick={() => {
            navigate(location);
            if(toast) {
                toast.remove();
            }
        } }>
            <div className={classes.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;