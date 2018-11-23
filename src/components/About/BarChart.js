import React, { Component } from "react";
import AllBarColumns from "./AllBarColumns";
import AllBarScales from "./AllBarScales";
import style from "./About.scss";

export default class BarChart extends Component {
    constructor() {
        super();
        this.state = {
            columns: [
                { id: 1, barClass: "bar1", skill: "JavaScript" },
                { id: 2, barClass: "bar2", skill: "React.js" },
                { id: 3, barClass: "bar3", skill: "PHP" },
                { id: 4, barClass: "bar4", skill: "HTML" },
                { id: 5, barClass: "bar5", skill: "CSS" },
                { id: 6, barClass: "bar6", skill: "Sass" }
            ],
            isGrowing: false,
            scaleLabels: [
                "Jedi",
                "advanced",
                "better than good",
                "good",
                "could use some help"
            ]
        };
    }

    componentDidMount() {
        this.setState({ isGrowing: true });
    }

    render() {
        const { isGrowing, columns, scaleLabels } = this.state;
        return (
            <div className={"barChart"}>
                <svg
                    viewBox="0 0 350 285"
                    fill="none"
                    preserveAspectRatio="xMinYMin meet"
                >
                    <g transform={"translate(110, 50)"}>
                        <AllBarScales scaleLabels={scaleLabels} />
                        <polyline
                            strokeWidth="2"
                            stroke="#000"
                            fill="none"
                            points="0,-10 0,150 200,150"
                        />
                        (
            <AllBarColumns columns={columns} isGrowing={isGrowing} />)
          </g>
                </svg>
            </div>
        );
    }
}
