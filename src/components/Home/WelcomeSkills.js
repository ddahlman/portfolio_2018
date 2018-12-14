import React from 'react';
import style from './Home.scss';
import PropTypes from 'prop-types';

const WelcomeSkills = ({ animate }) => {
	const skills = [
		{ id: 1, skill: 'React' },
		{ id: 2, skill: 'ES6' },
		{ id: 3, skill: 'Sass' },
		{ id: 4, skill: 'JavaScript' },
		{ id: 5, skill: 'Webpack' },
		{ id: 6, skill: 'HTML5' },
		{ id: 7, skill: 'CSS3' },
		{ id: 8, skill: 'Gulp' },
		{ id: 9, skill: 'ajax' },
		{ id: 10, skill: 'Figma' },
		{ id: 11, skill: 'Invision' },
		{ id: 12, skill: 'Wordpress' },
		{ id: 13, skill: 'PHP' },
		{ id: 14, skill: 'MySQL' }
	];
	const slider = skills.map(el => <p key={el.id} className={animate ? `${style.slideEl} ${style.slideToLeft}` : style.slideEl}>{el.skill}</p>);
	return (<div className={style.slideContainer}>{slider}</div>);
};

export default WelcomeSkills;

WelcomeSkills.propTypes = {
	animate: PropTypes.bool
};