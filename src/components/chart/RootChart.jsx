import React, {useEffect, useState} from 'react';
import {
    CartesianGrid, Customized,
    ReferenceLine, ResponsiveContainer,
    Scatter,
    ScatterChart,
    XAxis,
    YAxis
} from "recharts";
import MyCircle from "./MyCircle";
import MyTriangle from "./MyTriangle";
import MySquare from "./MySquare";
import {shallowEqual, useSelector} from "react-redux";
import classes from "./RootChart.module.css";
import {selectRows} from "../../store/slices/result/tableSlice";
import ClickSquare from "./ClickSquare";

const RootChart = () => {
    const dots = useSelector(selectRows, shallowEqual);
    const rar = useSelector(state => state.coords.r);
    const [rootCoords, setRootCoords] = useState([])
    useEffect(() => {
        setRootCoords([
            {
                x:0,
                y:0
            },
            {
                x: 0,
                y: rar
            },
            {
                x:rar/2,
                y:0
            },
            {
                x:-rar,
                y:rar
            },
            {
                x: 0,
                y: -rar/2
            },
            {
                x: -5,
                y: 5
            },
            {
                x: 5,
                y: -5
            },
            {
                x: -rar/2,
                y: 0
            },
            {
                x: -rar,
                y: 0
            }

        ])
    }, [rar]);
    return (
        <ResponsiveContainer className={classes.container}  width="100%" height="100%" >
            <ScatterChart width={500}
                          height={300}
                          margin={{
                              top: 5,
                              right: 30,
                              left: 40,
                              bottom: 5,

                          }}
            >
                <Customized component={MyCircle}/>
                <Customized component={MyTriangle}/>
                <Customized component={MySquare}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <YAxis
                    dataKey="y"
                    domain={[-5, 5]}
                    type="number"
                    interval={0}
                    tickCount={11}
                    allowDataOverflow={true}
                />

                <XAxis
                    dataKey="x"
                    domain={[-5, 5]}
                    interval={0}
                    tickCount={11}
                    type="number"
                    allowDataOverflow={true}
                />
                <ReferenceLine
                    y={0}
                    stroke="white"
                    strokeWidth={1.5}
                />
                <ReferenceLine
                    x={0}
                    stroke="white"
                    strokeWidth={1.5}
                />
                <Scatter data={rootCoords} fillOpacity={0} opacity={0}/>
                <Scatter data={dots.filter((dot,index,self) =>
                    dot.status && index === self.findIndex((t) => (
                            t.x === dot.x && t.y === dot.y && dot.r === t.r
                        ))
                ).map((dot) => ({x: dot.x/dot.r*rar, y: dot.y/dot.r*rar, r: rar}))} fill="green"/>
                <Scatter data={dots.filter((dot,index,self) =>
                        !dot.status && index === self.findIndex((t) => (
                            t.x === dot.x && t.y === dot.y && dot.r === t.r
                        ))
                ).map((dot) => ({x: dot.x/dot.r*rar, y: dot.y/dot.r*rar, r: rar}))} fill="red"/>
                <Customized component={ClickSquare}/>
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export default RootChart;