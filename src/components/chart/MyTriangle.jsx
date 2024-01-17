import React from 'react';
import {Curve} from "recharts";

const MyTriangle = (props) => {
    const {formattedGraphicalItems } = props;
    const firstSeries = formattedGraphicalItems[0];
    const dots = [...firstSeries?.props?.points.map((e)=>{
        return e
    })];
    dots.pop()
    dots.pop()
    dots.pop()
    dots.pop()
    dots.pop()
    dots.pop()
    dots.map((e) => e.x = e.cx)
    dots.map((e) => e.y = e.cy)
    return (
        <Curve
               type={"monotone"}
               points={dots}
               fill="#ccc"
               fillOpacity={0.5}
        >
        </Curve>
    );
};

export default MyTriangle;