import React from 'react';
import {Rectangle} from "recharts";

const MySquare = (props) => {
    const {formattedGraphicalItems} = props;
    const firstSeries = formattedGraphicalItems[0];
    const left = firstSeries?.props?.points[0];

    const width = firstSeries?.props?.points[3]?.cx - firstSeries?.props?.points[0]?.cx
    const height = firstSeries?.props?.points[3]?.cy - firstSeries?.props?.points[0]?.cy
    return (
        <Rectangle
                   x={left?.cx}
                   y={left?.cy}
                   width={width}
                   height={height}
                   fill="#ccc"
                   fillOpacity={0.5}

        >
        </Rectangle>
    );
};

export default MySquare;