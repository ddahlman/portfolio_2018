import React from 'react';
import styles from './About.scss';

const AboutToolItems = ({ items }) => {
    const textItems = items.map((item, i) => {
        let skills = item.text.map((skill, i) => (
            <li key={i}>
                <p>{skill}</p>
            </li>
        ));
        return (
            <li key={item.id}>
                <h4>{item.header}</h4>
                <ul className={styles.aboutTextInnerUl}>{skills}</ul>
            </li>
        );
    });
    return textItems;
};

export default AboutToolItems;