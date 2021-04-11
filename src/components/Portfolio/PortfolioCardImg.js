import React, { PureComponent } from 'react';
import FLIP from '../FLIP';
import style from './Portfolio.scss';
import PropTypes from 'prop-types';

export default class PortfolioCardImg extends PureComponent {
	render() {
		const { crossRotate, src, enlarged, hasLoaded } = this.props;

		return (
			<FLIP
				animate={enlarged}
				duration={{ transform: '.3s', opacity: '0s', delay: '0s' }}
				styleDeclaration={'transformAndScale'}
			>
				<div
					className={enlarged ? `${style.imgContainer} ${style.scale}` : `${style.imgContainer} ${style.collapsed}`}
					onTransitionEnd={crossRotate}
				>
					<img className={hasLoaded ? style.img : style.hiddenImages} src={src} alt={'svg'} />
				</div>
			</FLIP>
		);
	}
}

PortfolioCardImg.propTypes = {
	cardIndex: PropTypes.number,
	setImageState: PropTypes.func,
	crossRotate: PropTypes.func,
	src: PropTypes.string,
	enlarged: PropTypes.bool,
	hasLoaded: PropTypes.bool
};
