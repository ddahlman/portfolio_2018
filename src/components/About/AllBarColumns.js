import React from "react";
import BarColumn from "./BarColumn";
import style from "./About.scss";

const AllBarColumns = ({ columns, isGrowing }) => {
    const bars = columns.reduce(
        (acc, bar, i) => {
            acc.components = [
                ...acc.components,
                <BarColumn
                    key={bar.id}
                    barClass={isGrowing ? `${style.bar} ${style[bar.barClass]}` : style.bar}
                    spaceX={(i + 1) * 15}
                    pointX={acc.pointX}
                    angleX={acc.angleX}
                    skill={bar.skill}
                />
            ];
            acc.pointX += 30;
            acc.angleX += 30;
            return acc;
        },
        { pointX: 17, angleX: 10, components: [] }
    );
    return bars.components;
};

export default AllBarColumns;
