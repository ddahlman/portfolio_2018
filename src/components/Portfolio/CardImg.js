import React, { Component } from 'react';
import FLIP from './FLIP';
import style from './Portfolio.scss';
import PropTypes from 'prop-types';

export default class CardImg extends Component {

	hasLoaded(callback) {
		e => {
			this.props.hasLoaded(callback, e);
		};
	}


	loaded() { this.hasLoaded(this.props.setImageState); }

	render() {
		const { crossRotate, src, enlarged } = this.props;

		return (
			<FLIP
				animate={enlarged}
				duration={{ transform: '.4s', opacity: '0s', delay: '0s' }}
				styleDeclaration={'transformAndScale'}
			>
				<div
					className={enlarged ? `${style.imgContainer} ${style.scale}` : `${style.imgContainer} ${style.collapsed}`}
					onTransitionEnd={crossRotate}
				>
					<img onLoad={this.loaded} className={style.img} src={src} alt={'svg'} />
				</div>
			</FLIP>
		);
	}
}

CardImg.propTypes = {
	hasLoaded: PropTypes.func,
	cardIndex: PropTypes.number,
	setImageState: PropTypes.func,
	crossRotate: PropTypes.func,
	src: PropTypes.string,
	enlarged: PropTypes.bool
};
