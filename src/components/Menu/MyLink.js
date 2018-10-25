import React from 'react';
import { Link } from 'react-router-dom';
import style from './Menu.scss';
import PropTypes from 'prop-types';

const MyLink = ({ children, direction }) => {
	return (
		<li>
			<Link className={style.linkStyle} to={{ pathname: direction, state: { prevPath: location.pathname } }}>
				{children}
			</Link>
		</li>
	);
};
MyLink.propTypes = {
	children: PropTypes.string,
	direction: PropTypes.string
};
export default MyLink;