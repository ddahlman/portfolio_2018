import React from 'react';
import style from './About.scss';
import PropTypes from 'prop-types';

const BarColumn = ({ isGrowing, spaceX, pointX, angleX, skill, bar }) => {
    return (
        <g>
            <rect
                className={
                    isGrowing
                        ? `${style.bar} ${style[bar.barClass]}`
                        : style.bar
                }
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
                className={style.barChartText}
                x={pointX - 31}
                y="159"
                fill={'#000'}
                textAnchor="end">
                {skill}
            </text>
        </g>
    );
};

BarColumn.propTypes = {
    isGrowing: PropTypes.bool,
    spaceX: PropTypes.number,
    pointX: PropTypes.number,
    angleX: PropTypes.number,
    skill: PropTypes.string,
    bar: PropTypes.object,
};

export default BarColumn;
