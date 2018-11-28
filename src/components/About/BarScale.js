import React from "react";
import style from "./About.scss";

const BarScale = ({ yAxis, label }) => (
    <g>
        <text
            className={style.barChartText}
            x="-15"
            y={yAxis + 3}
            textAnchor="end"
        >
            {label}
        </text>
        <line
            x1="-10"
            y1={yAxis}
            x2="0"
            y2={yAxis}
            stroke="#000"
            strokeWidth=".5"
        />
        <line
            strokeDasharray="2"
            x1="0"
            y1={yAxis}
            x2="200"
            y2={yAxis}
            stroke="#999"
            strokeWidth=".1"
        />
    </g>
);

export default BarScale;