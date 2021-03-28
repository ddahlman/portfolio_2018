import React from 'react';
import styles from './About.scss';

const AboutToolItems = ({ items }) => {
	const textItems = items.map((item) => {
		let skills = item.text.map((skill, i) => (
			<li key={i}>
				<p>{skill}</p>
			</li>
		));
		return (
			<div key={item.id}>
				<h4>{item.header}</h4>
				<ul className={styles.aboutTextInnerUl}>{skills}</ul>
			</div>
		);
	});
	return textItems;
};

export default AboutToolItems;