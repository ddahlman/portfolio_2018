import style from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ cardColor, gridArea = '', children }) => {
    const cardGridArea = gridArea ? ` ${style[gridArea]}` : '';

    return (
        <div
            className={`${style.cardContainer} ${style[cardColor]} ${cardGridArea}`}>
            {children}
        </div>
    );
};

export default Card;

Card.propTypes = {
    cardColor: PropTypes.string,
    gridArea: PropTypes.string,
    children: PropTypes.node,
};
