import React, { Component } from 'react';
import Cross from './Cross';
import FLIP from '../FLIP';
import style from './Portfolio.scss';
import PropTypes from 'prop-types';

export default class FadeUpText extends Component {
	render() {
		const { hasFadedUp, children, ...other } = this.props;

		return (
			<FLIP
				animate={hasFadedUp}
				duration={{ transform: '.5s', opacity: '2s', delay: '0s' }}
				styleDeclaration={'transformAndOpacity'}
			>
				<div className={hasFadedUp ? 'text fadeUp' : 'text fadeDown'}>
					<Cross {...other} />
					<div className={'text-container'}>{children}</div>
				</div>
			</FLIP>
		);
	}
}

FadeUpText.propTypes = {
	hasFadedUp: PropTypes.bool,
	children: PropTypes.node
};
