import React, { Component } from 'react';
import style from './Portfolio.scss';
import HillsWithTrees from '../HillsWithTrees/HillsWithTrees';
import AllCards from './AllCards';
import FadeUpText from './FadeUpText';
import FadeUpContent from './FadeUpContent';
import SvgBackground from '../SvgBackground/SvgBackground';
import portfolioItems from './portfolioItems';
import PropTypes from 'prop-types';

export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: portfolioItems,
			cssClasses: {
				a: 'keepDarkest1',
				b: 'keepDarkest2',
				c: 'keepDarkest3'
			},
			hasFadedUp: false,
			hasRotated: false,
			scaleCard: false
		};
		this.changeSize = this.changeSize.bind(this);
		this.rotate = this.rotate.bind(this);
		this.imagesHasLoaded = this.imagesHasLoaded.bind(this);
		this.setImageState = this.setImageState.bind(this);
		this.imgArray = [];
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

	imagesHasLoaded(callback) {
		this.imgArray = [...this.imgArray, 'loaded'];
		this.imgArray.length > 5 && callback(this.imgArray);
	}

	setImageState(imgArray) {
		const isLoaded = imgArray.every(img => img === 'loaded');
		imgArray.length === 6 &&
			isLoaded &&
			this.setState({ scaleCard: isLoaded });
	}

	rotate() { this.setState({ hasRotated: !this.state.hasRotated }); }

	changeSize(index) {
		this.cardIndex = index;
		let newArray = [...this.state.boxes];
		newArray[index].enlarged = !newArray[index].enlarged;
		this.setState({
			boxes: newArray,
			hasFadedUp: !this.state.hasFadedUp
		});
	}


	render() {
		const { cssClasses, cards, hasFadedUp, hasRotated, scaleCard } = this.state;
		return (
			<section className={style.absoluteContainer}>
				<div className={style.container}>
					<div className={style.cardContainer}>
						<AllCards cards={cards}
							setImageState={this.setImageState}
							scaleCard={scaleCard}
							crossRotate={this.rotate}
							hasLoaded={this.imagesHasLoaded}
							openBox={this.changeSize}
						/>
					</div>
					<FadeUpText closeBox={() => { this.changeSize(this.cardIndex); }}
						hasFadedUp={hasFadedUp}
						cross={hasRotated}>
						{this.cardIndex !== undefined && (<FadeUpContent
							header={cards[this.cardIndex].header}
							text={cards[this.cardIndex].text}
						/>)}
					</FadeUpText>
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