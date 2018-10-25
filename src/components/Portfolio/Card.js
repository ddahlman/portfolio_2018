import React from 'react';
import style from './Portfolio.scss';

const Card = ({ src, alt, text }) => {
	if (src) {
		return (
			<div className={`${style.card} ${style.cardIsShowing}`}>
				<div className={`${style.imgContainer} ${style.imgContainerCollapsed}`}>
					<img className={style.img} src={src} alt={alt} />
				</div>
				<div className={`${style.cardText} ${style.cardTextIsShowing}`}>{text}</div>
			</div>
		);
	} else {
		return (<div className={style.emptyCell}></div>);
	}
};

export default Card;