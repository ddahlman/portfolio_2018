import React, { Component } from 'react';
import AllBarColumns from './AllBarColumns';
import AllBarScales from './AllBarScales';
import PropTypes from 'prop-types';


export default class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{ id: 1, barClass: 'bar1', skill: 'JavaScript' },
				{ id: 2, barClass: 'bar2', skill: 'React.js' },
				{ id: 3, barClass: 'bar3', skill: 'PHP' },
				{ id: 4, barClass: 'bar4', skill: 'HTML' },
				{ id: 5, barClass: 'bar5', skill: 'CSS' },
				{ id: 6, barClass: 'bar6', skill: 'Sass' }
			],
			scaleLabels: [
				'Jedi',
				'advanced',
				'better than good',
				'good',
				'could use some help'
			]
		};
	}

	render() {
		const { columns, scaleLabels } = this.state;
		const { isGrowing } = this.props;
		return (
			<svg
				viewBox="-205 -100 450 385"
				fill="none"
				preserveAspectRatio="xMinYMin meet"
			>
				<g>
					<AllBarScales scaleLabels={scaleLabels} />
					<polyline
						strokeWidth="2"
						stroke="#000"
						fill="none"
						points="0,-10 0,150 200,150"
					/>
					<AllBarColumns columns={columns} isGrowing={isGrowing} />
				</g>
			</svg>
		);
	}
}

BarChart.propTypes = {
	isGrowing: PropTypes.bool
};