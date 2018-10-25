import React, { Component } from 'react';
import style from './About.scss';
import HillsWithTrees from '../HillsWithTrees/HillsWithTrees';
import SvgBackground from '../SvgBackground/SvgBackground';
import PropTypes from 'prop-types';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cssClasses: {
				a: 'keepDarker1',
				b: 'keepDarker2',
				c: 'keepDarker3'
			}
		};
	}

	componentDidMount() {
		if (this.props.location.state !== undefined) {
			const { prevPath } = this.props.location.state;
			const cssClasses = prevPath === '/' ? { a: 'lightToDarker1', b: 'lightToDarker2', c: 'lightToDarker3' } :
				prevPath === '/portfolio' ? { a: 'darkestToDarker1', b: 'darkestToDarker2', c: 'darkestToDarker3' } :
					{ a: 'keepDarker1', b: 'keepDarker2', c: 'keepDarker3' };
			this.setState({ cssClasses });
		}
	}

	render() {
		const { cssClasses } = this.state;
		return (
			<section className={style.absoluteContainer}>
				<div className={style.container}>
					<SvgBackground cssClasses={cssClasses} />
					<HillsWithTrees />
				</div>
			</section>
		);
	}
}

About.propTypes = {
	location: PropTypes.object
};