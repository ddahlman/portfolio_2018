import React, { Component } from 'react';
import style from './Portfolio.scss';
import HillsWithTrees from '../HillsWithTrees/HillsWithTrees';
import Card from './Card';
import SvgBackground from '../SvgBackground/SvgBackground';
import { homePage, dashboard, hangman, snake, todolist, git, codepen, wordpress } from './portfolioItems';
import PropTypes from 'prop-types';

export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{ src: homePage, alt: 'homepage', text: 'This was my first portfoliopage which was created for getting internships' },
				{ src: dashboard, alt: 'dashboard', text: 'I created a dashboard for one of the companies I did my internship at and this was the result' },
				{ src: wordpress, alt: 'wordpress', text: 'My first wordpress theme, nothing to fancy, just to show that I can do it' },
				{ src: todolist, alt: 'todolist', text: 'A simple todolist made out of JS and Bootstrap' },
				{ src: hangman, alt: 'hangman', text: 'A hangman-game that is actually an easter egg in my first portfolio page. Created out of JS' },
				{ src: snake, alt: 'snake', text: 'This is a snake-game made in a html5 canvas element' },
				{ src: git, alt: 'git', text: 'Check out some of my repos' },
				{ src: codepen, alt: 'codepen', text: 'Here is a collection of my tests and "work in progress", love to test new things here' },
				{ src: null },
				{ src: null },
				{ src: null },
				{ src: null }
			],
			cssClasses: {
				a: 'keepDarkest1',
				b: 'keepDarkest2',
				c: 'keepDarkest3'
			}
		};
	}

	componentDidMount() {
		if (this.props.location.state !== undefined) {
			const { prevPath } = this.props.location.state;
			const cssClasses = prevPath === '/'
				? { a: 'lightToDarkest1', b: 'lightToDarkest2', c: 'lightToDarkest3' }
				: prevPath === '/about'
					? { a: 'darkerToDarkest1', b: 'darkerToDarkest2', c: 'darkerToDarkest3' }
					: { a: 'keepDarkest1', b: 'keepDarkest2', c: 'keepDarkest3' };
			this.setState({ cssClasses });
		}
	}


	render() {
		const { cssClasses, cards } = this.state;
		return (
			<section className={style.absoluteContainer}>
				<div className={style.container}>
					<div className={style.cardContainer}>
						{cards.map((card, i) => (<Card src={card.src} key={`card-${i}`} alt={card.alt} text={card.text} />))}
					</div>
					<SvgBackground cssClasses={cssClasses} />
					<HillsWithTrees />
				</div>
			</section>
		);
	}
}

Portfolio.propTypes = {
	location: PropTypes.object
};