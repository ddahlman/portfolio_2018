import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class FLIP extends Component {
	getSnapshotBeforeUpdate(prevProps) {
		if (this.props.animate !== prevProps.animate) {
			return this.el.getBoundingClientRect();
		}
		return null;
	}

	invert(oldPos, newPos) {
		return {
			x: oldPos.left - newPos.left,
			y: oldPos.top - newPos.top,
			scaleX: oldPos.width / newPos.width,
			scaleY: oldPos.height / newPos.height
		};
	}

	selectStyle(style, invert, el) {
		switch (style) {
		case 'transformAndScale':
			el.style.transform = `translate3d(${invert.x}px,${
				invert.y
			}px,0px) scale(${invert.scaleX}, ${invert.scaleY})`;
			break;
		case 'transformAndOpacity':
			el.style.transform = `translate3d(${invert.x}px,${invert.y}px,0px)`;
			el.style.opacity = 0;
			break;
		case 'scaleAndOpacity':
			el.style.transform = `scale(${invert.scaleX}, ${invert.scaleY})`;
			el.style.opacity = 0;
			break;
		default:
			console.log('add a styledeclaration prop to the component');
			break;
		}
	}

	componentDidUpdate(prevProps, prevState, snapShot) {
		if (!snapShot) return;
		const {
			styleDeclaration,
			duration: { transform, opacity, delay }
		} = this.props;
		const { el } = this;
		const newPos = el.getBoundingClientRect();
		const invert = this.invert(snapShot, newPos);

		el.style.transition = '';
		this.selectStyle(styleDeclaration, invert, el);

		requestAnimationFrame(() => {
			window.setTimeout(() => {
				el.style.transition = `transform ${transform} cubic-bezier(0.5, 0.5, 0.2, 1) ${delay}, opacity ${opacity} cubic-bezier(.5, .5, .2, 1) ${delay}`;
				el.style.transform = '';
				el.style.opacity = '';
			}, 0);
		});
	}

	render() {
		const childComponents = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, { ref: node => (this.el = node) });
		});

		return <Fragment>{childComponents}</Fragment>;
	}
}

FLIP.propTypes = {
	animate: PropTypes.bool,
	duration: PropTypes.object,
	styleDeclaration: PropTypes.string,
	children: PropTypes.node
};
