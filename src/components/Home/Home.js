import React, { Component } from 'react';
import style from './Home.scss';
import HillsWithTrees from '../HillsWithTrees/HillsWithTrees';
import PropTypes from 'prop-types';
import SvgBackground from '../SvgBackground/SvgBackground';
import WelcomeText from './WelcomeText';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cssClasses: {
				a: 'keepLight1',
				b: 'keepLight2',
				c: 'keepLight3'
			}
		};
	}


	componentDidMount() {
		if (this.props.location.state !== undefined) {
			const { prevPath } = this.props.location.state;
			const cssClasses = prevPath === '/about' ? { a: 'darkerToLight1', b: 'darkerToLight2', c: 'darkerToLight3' } :
				prevPath === '/portfolio' ? { a: 'darkestToLight1', b: 'darkestToLight2', c: 'darkestToLight3' } :
					{ a: 'keepLight1', b: 'keepLight2', c: 'keepLight3' };
			this.setState({ cssClasses });
		}
	}



	render() {
		const { cssClasses } = this.state;
		return (
			<section className={style.absoluteContainer}>
				<div className={style.container}>
					<WelcomeText />
					<SvgBackground cssClasses={cssClasses} />
					<HillsWithTrees />
				</div>
			</section>
		);
	}

}

Home.propTypes = {
	location: PropTypes.object
};




