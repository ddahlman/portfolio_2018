import React, { PureComponent } from 'react';
import style from './Portfolio.scss';
import CardImg from './CardImg';
import FLIP from '../FLIP';
import PropTypes from 'prop-types';

export default class Card extends PureComponent {
	openBox = index => e => {
		this.props.openBox(index, e);
	}

	open = this.openBox(this.props.cardIndex);

	render() {
		const { hasLoaded, cardIndex, src, text, ...other } = this.props;
		return (
			<FLIP
				animate={hasLoaded}
				duration={{
					transform: '.3s',
					opacity: '.5s',
					delay: `0.${cardIndex}3s`
					/* delay: '0s' */
				}}
				styleDeclaration={'scaleAndOpacity'}
			>
				<div className={hasLoaded ? `${style.card} ${style.isScaled}` : `${style.card} ${style.isNotScaled}`} onClick={this.open}>
					<CardImg src={src} hasLoaded={hasLoaded} {...other} />
					<div className={style.cardText}>{hasLoaded && <p>{text}</p>}</div>
				</div>
			</FLIP>
		);
	}
}

Card.propTypes = {
	openBox: PropTypes.func,
	hasLoaded: PropTypes.bool,
	cardIndex: PropTypes.number,
	src: PropTypes.string,
	text: PropTypes.string
};

