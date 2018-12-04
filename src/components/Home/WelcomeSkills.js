import React from 'react';
import style from './Home.scss';

const WelcomeSkills = ({ animate }) => {
    const skills = [
        { id: 1, skill: 'React' },
        { id: 2, skill: 'ES6' },
        { id: 3, skill: 'Sass' },
        { id: 4, skill: 'JavaScript' },
        { id: 5, skill: 'Webpack' },
        { id: 6, skill: 'Gulp' },
        { id: 7, skill: 'ajax' },
        { id: 8, skill: 'Figma' },
        { id: 9, skill: 'Invision' },
        { id: 10, skill: 'Wordpress' },
        { id: 11, skill: 'PHP' },
        { id: 12, skill: 'MySQL' }
    ];
    const slider = skills.map(el => <p key={el.id} className={animate ? `${style.slideEl} ${style.slideToLeft}` : style.slideEl}>{el.skill}</p>);
    return (<div className={style.slideContainer}>{slider}</div>);
}

export default WelcomeSkills;