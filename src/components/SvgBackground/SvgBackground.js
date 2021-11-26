import React from 'react';
import style from './SvgBackground.scss';
import PropTypes from 'prop-types';

const SvgBackground = ({ cssClasses }) => {
    return (
        <svg
            className={style.container}
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMinYMin slice">
            <rect width="1920" height="1080" fill="url(#paint0_linear)" />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x2="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1920) scale(1920 1080) rotate(90)">
                    <stop className={style[cssClasses.a]} stopColor="" />
                    <stop
                        className={style[cssClasses.b]}
                        offset="0.432544"
                        stopColor=""
                    />
                    <stop
                        className={style[cssClasses.c]}
                        offset="1"
                        stopColor=""
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

SvgBackground.propTypes = {
    cssClasses: PropTypes.object,
};

export default SvgBackground;
