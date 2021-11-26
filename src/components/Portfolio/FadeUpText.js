import { Component } from 'react';
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
                styleDeclaration={'transformAndOpacity'}>
                <div
                    className={
                        hasFadedUp
                            ? `${style.text} ${style.fadeUp}`
                            : `${style.text} ${style.fadeDown}`
                    }>
                    <Cross {...other} />
                    <div className={style.textContainer}>{children}</div>
                </div>
            </FLIP>
        );
    }
}

FadeUpText.propTypes = {
    hasFadedUp: PropTypes.bool,
    children: PropTypes.node,
};
