import React from 'react';
import styles from './About.scss';
import AboutToolItems from './AboutToolItems';

const AboutTools = () => {

	const items = [
		{ id: 1, header: 'Version control', text: ['Git', 'TFS'] },
		{
			id: 2,
			header: 'UX/UI webdesign tools',
			text: ['Invision', 'Figma', 'Adobe Photoshop']
		},
		{ id: 3, header: 'Agile styles', text: ['Scrum', 'Kanban'] },

		{
			id: 4,
			header: 'Techniques and paterns',
			text: [
				'Functional Programming',
				'Object Oriented Programming',
				'Higher Order Functions',
				'Ajax'
			]
		}
	];

	return (
		<div className={styles.aboutToolsContainer}>
			<AboutToolItems items={items} />
		</div>
	);
};

export default AboutTools;