import React, {useEffect} from 'react';
import {Rectangle} from "recharts";
import {useDispatch, useSelector} from "react-redux";
import {clickHandler} from "../../utils/chartClick";
import {addDot} from "../../utils/requests/addDotRequest";

const ClickSquare = (props) => {
    const click = useSelector(state => state.click);
    const coords = useSelector(state => state.coords)
    const dispatch = useDispatch();
    const {formattedGraphicalItems} = props;
    const firstSeries = formattedGraphicalItems[0];
    const left = firstSeries?.props?.points[6];

    const width = firstSeries?.props?.points[5]?.cx - firstSeries?.props?.points[6]?.cx
    const height = firstSeries?.props?.points[5]?.cy - firstSeries?.props?.points[6]?.cy
    useEffect(() => {
            if (click.x!==null&&click.y!==null) {
                addDot(dispatch, click.x, click.y, coords.r);
            }
        },
        [click]);
    return (
        <Rectangle
            x={left?.cx}
            y={left?.cy}
            width={width}
            height={height}
            fillOpacity={0}
            onClick={e => {
                clickHandler(e,dispatch);
            }}
        >
        </Rectangle>
    );
};

export default ClickSquare;