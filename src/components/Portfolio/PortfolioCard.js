import { PureComponent } from 'react';
import style from './Portfolio.scss';
import PortfolioCardImg from './PortfolioCardImg';
import FLIP from '../FLIP';
import PropTypes from 'prop-types';

export default class PortfolioCard extends PureComponent {
    openBox = (index) => (e) => {
        this.props.openBox(index, e);
    };

    open = this.openBox(this.props.cardIndex);

    render() {
        const { hasLoaded, cardIndex, src, text, ...other } = this.props;
        return (
            <FLIP
                animate={hasLoaded}
                duration={{
                    transform: '.3s',
                    opacity: '.5s',
                    delay: `0.${cardIndex}3s`,
                    /* delay: '0s' */
                }}
                styleDeclaration={'scaleAndOpacity'}>
                <div
                    className={
                        hasLoaded
                            ? `${style.card} ${style.isScaled}`
                            : `${style.card} ${style.isNotScaled}`
                    }
                    onClick={this.open}>
                    <PortfolioCardImg
                        src={src}
                        hasLoaded={hasLoaded}
                        {...other}
                    />
                    <div className={style.cardText}>
                        {hasLoaded && <p>{text}</p>}
                    </div>
                </div>
            </FLIP>
        );
    }
}

PortfolioCard.propTypes = {
    openBox: PropTypes.func,
    hasLoaded: PropTypes.bool,
    cardIndex: PropTypes.number,
    src: PropTypes.string,
    text: PropTypes.string,
};
