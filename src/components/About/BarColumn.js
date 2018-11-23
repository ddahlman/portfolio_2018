import React from "react";
import style from "./About.scss";

const BarColumn = ({ barClass, spaceX, pointX, angleX, skill }) => {
    console.log(barClass)
    return (
        <g>
            <rect
                className={barClass}
                y="95"
                transform={`translate(0) rotate(180 ${spaceX} 120)`}
            />
            <title>{skill}</title>
            <polyline
                strokeWidth=".5"
                stroke="#000"
                fill="none"
                points={`${pointX},150 ${pointX},160 ${angleX},165`}
            />
            <text
                transform={`rotate(-30 ${pointX} 120)`}
                className={style.scaleText}
                x={pointX - 31}
                y="159"
                fill={"#000"}
                textAnchor="end"
            >
                {skill}
            </text>
        </g>
    );
};

export default BarColumn;
