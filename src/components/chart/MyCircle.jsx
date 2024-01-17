import React from 'react';
import {Sector} from "recharts";

const MyCircle = (props) => {
    const { width, height, formattedGraphicalItems} = props;
    const firstSeries = formattedGraphicalItems[0];
    // get any point at any index in chart
    const center = firstSeries?.props?.points[0];
    const r = formattedGraphicalItems[0]?.props?.points[0]?.cx - formattedGraphicalItems[0]?.props?.points[3]?.cx
    return (
        <Sector
            cy={center.cy}
            cx={center.cx}
            height={height}
            width={width}
            stroke="none"
            fill="#ccc"
            type={"linearClosed"}
            outerRadius={r/2}
            startAngle={180}
            endAngle={270}
            fillOpacity={0.5}
        />
    );
};

export default MyCircle;