import React, {useState} from 'react';
import classes from './CheckBoxes.module.css'
import MyCheckBox from "../UI/checkbox/MyCheckBox";
const CheckBoxes = ({children,checkboxes,id,changeCoord}) => {

    const [checkBoxes,setCheckBoxes] = useState([...checkboxes.map((e) => ({name:e,checked:false}))])
    const changeChecked = (check) => {
        const newcheckBoxes = checkBoxes.map(checkbox => {
            if(checkbox.name===check.name){
                return {...checkbox,checked: true};
            } else {
                return {...checkbox,checked: false};
            }
        });
        setCheckBoxes(newcheckBoxes)


    }
    return (
        <div className={classes.body}>
            {children}
            <div className={classes.container}>
                {checkBoxes.map((e,index) =>
                    <MyCheckBox key={index}
                                onChange={() =>
                                {
                                    changeChecked(e);
                                    changeCoord(e.name);

                                }}
                                checked={e.checked}>
                        {e.name}
                    </MyCheckBox>)}
            </div>
        </div>
    );
};

export default CheckBoxes;