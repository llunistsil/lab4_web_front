import React from 'react';
import classes from "./MyTable.module.css"
import {shallowEqual, useSelector} from "react-redux";
import {selectRows} from "../../store/slices/result/tableSlice";
import {validateTime} from "../../utils/validators/validateTime";

const MyTable = () => {
    const dots = useSelector(selectRows, shallowEqual)
    return (
        <div className={classes.container}>
            <table className={classes.table}>
                <thead className={classes.head}>
                <tr>
                    <th>Date</th>
                    <th>Execution time</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                </tr>
                </thead>
                <tbody className={classes.boby}>
                {dots.map(x=>(
                    <tr>
                        <td>{validateTime(x.timestamp)}</td>
                        <td>{x.scriptTime}</td>
                        <td>{x.status ? "True" : "False"}</td>
                        <td> {x.owner} </td>
                        <td>{x.x}</td>
                        <td>{x.y}</td>
                        <td>{x.r}</td>
                    </tr>
                ))}
                </tbody>


            </table>
        </div>

    );
};

export default MyTable;