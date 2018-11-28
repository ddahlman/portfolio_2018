import React, { Component } from 'react';
import styles from './About.scss';
import AboutToolItems from './AboutToolItems';

export default class AboutTools extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                { id: 1, header: "Version control", text: ["Git", "TFS"] },
                { id: 2, header: "Agile", text: ["Scrum", "Kanban"] },
                {
                    id: 3,
                    header: "UX/UI webdesign tools",
                    text: ["Invision", "Figma", "Adobe Photoshop"]
                },
                {
                    id: 4,
                    header: "Techniques and paterns",
                    text: [
                        "Functional Programming",
                        "Object Oriented Programming",
                        "Higher Order Functions",
                        "Ajax"
                    ]
                }
            ]
        };
    }
    render() {
        const { items } = this.state;
        return (
            <ul className={styles.aboutToolsContainer}>
                <AboutToolItems items={items} />
            </ul>
        );
    }
}