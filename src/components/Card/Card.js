import React from 'react';
import style from './card.scss';
import PropTypes from 'prop-types';

const Card = ({ cardColor, gridArea, children }) => {
    return (
        <div className={`${style.cardContainer} ${style[gridArea]} ${style[cardColor]}`}>
            {children}
        </div>
    );
};

export default Card;

Card.propTypes = {
    cardColor: PropTypes.string,
    gridArea: PropTypes.string,
    children: PropTypes.node
};