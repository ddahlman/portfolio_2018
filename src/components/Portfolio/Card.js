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
		const { scaleCard, cardIndex, src, text, ...other } = this.props;
		/* console.log(scaleCard); */
		if (src !== null) {
			/* console.log(scaleCard); */ 
			return (
				<FLIP
					animate={scaleCard}
					duration={{
						transform: '.3s',
						opacity: '.5s',
						delay: `0.${cardIndex}3s`
					}}
					styleDeclaration={'scaleAndOpacity'}
				>
					<div className={scaleCard ? `${style.card} ${style.isScaled}` : `${style.card} ${style.isNotScaled}`} onClick={this.open}>
						<CardImg src={src} scaleCard={scaleCard} {...other} />
						<div className={style.cardText}>{scaleCard && <p>{text}</p>}</div>
					</div>
				</FLIP>
			);
		} else {
			return (<div className={style.emptyCell}></div>);
		}
	}
}

Card.propTypes = {
	openBox: PropTypes.func,
	scaleCard: PropTypes.bool,
	cardIndex: PropTypes.number,
	src: PropTypes.string,
	text: PropTypes.string
};

