import React, { Component } from 'react';
import style from './App.scss';
import PropTypes from 'prop-types';

export default class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeOut: false,
        };
        this.animationComplete = this.animationComplete.bind(this);
        this.logoHasFadedOut = this.logoHasFadedOut.bind(this);
    }

    animationComplete() {
        this.setState({ fadeOut: !this.state.fadeOut });
    }

    logoHasFadedOut() {
        this.props.isFinished(true);
    }

    render() {
        const ie11 = window.navigator.userAgent.indexOf('Trident/') > 0;
        const fade = this.state.fadeOut
            ? `${style.svgContainer} ${style.fadeOut}`
            : style.svgContainer;

        if (ie11) {
            return (
                <section
                    className={style.ie11SvgContainer}
                    onAnimationEnd={this.logoHasFadedOut}>
                    <canvas
                        className={style.ie11LogoCanvas}
                        width="700"
                        height="700"></canvas>
                    <svg
                        className={style.ie11LogoSVG}
                        viewBox="0 0 700 700"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin meet">
                        <path
                            className={style.v1}
                            d="M0 15.0729V0H600V15.0729C576.874 29.0294 483.035 56.5403 292.683 54.9325C102.331 53.3247 18.2475 27.6896 0 15.0729Z"
                            transform="translate(50 383)"
                            fill="url(#paint0_radial)"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            className={style.v2}
                            d="M599.5 33.1354C599.5 34.1151 599.053 35.1301 598.083 36.1849C597.111 37.2422 595.64 38.3087 593.668 39.3733C589.724 41.5021 583.875 43.5708 576.298 45.5494C561.152 49.5045 539.213 53.0714 512.077 56.0687C457.811 62.0624 382.83 65.7708 300 65.7708C217.17 65.7708 142.189 62.0624 87.9229 56.0687C60.7866 53.0714 38.8477 49.5045 23.7018 45.5494C16.1249 43.5708 10.2763 41.5021 6.33243 39.3733C4.36 38.3087 2.88912 37.2422 1.91693 36.1849C0.947121 35.1301 0.5 34.1151 0.5 33.1354C0.5 32.1557 0.947121 31.1407 1.91693 30.0859C2.88912 29.0286 4.36 27.9621 6.33243 26.8975C10.2763 24.7687 16.1249 22.7 23.7018 20.7214C38.8477 16.7662 60.7866 13.1993 87.9229 10.2021C142.189 4.20836 217.17 0.5 300 0.5C382.83 0.5 457.811 4.20836 512.077 10.2021C539.213 13.1993 561.152 16.7662 576.298 20.7214C583.875 22.7 589.724 24.7687 593.668 26.8975C595.64 27.9621 597.111 29.0286 598.083 30.0859C599.053 31.1407 599.5 32.1557 599.5 33.1354Z"
                            transform="translate(50 350)"
                            fill="#F2F2F2"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            className={style.v3}
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 0.528853V248.529C49.8201 248.842 76.5326 247.174 110.5 223.529V248.529C314.678 271.748 324.638 -13.8972 110.5 0.528944V21.0334C85.2319 6.60956 48.2004 1.45439 0 0.528853ZM38 45.5289C83.5 45.5289 110.5 61.5291 110.5 109.029H150.5V45.5289C249 29.0301 251.5 215.529 150.5 210.029V129.029H110.5V181.529C84.7045 205.734 64.5 210.029 38 210.029V45.5289Z"
                            transform="translate(216 133)"
                            fill="white"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            className={style.v4}
                            d="M110.5 223.529C76.5326 247.174 49.8201 248.842 0 248.529V0.528853C48.2004 1.45439 85.2319 6.60956 110.5 21.0334M110.5 223.529V248.529C314.678 271.748 324.638 -13.8972 110.5 0.528944V21.0334M110.5 223.529V181.529M150.5 109.029C150.5 67.8671 136.94 36.1261 110.5 21.0334M150.5 109.029V45.5289C249 29.0301 251.5 215.529 150.5 210.029M150.5 109.029H110.5C110.5 61.5291 83.5 45.5289 38 45.5289V210.029C64.5 210.029 84.7045 205.734 110.5 181.529M110.5 129.029C110.5 118.029 110.5 181.529 110.5 181.529M110.5 129.029H150.5M110.5 129.029V181.529M150.5 129.029C150.5 154.804 150.5 210.029 150.5 210.029M150.5 129.029V210.029"
                            transform="translate(216 133)"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <circle
                            className={style.v5}
                            cx="350"
                            cy="350"
                            r="347.5"
                            stroke="white"
                            strokeWidth="5"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial"
                                cx="0.5"
                                cy="0.5"
                                r="0.5"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="matrix(-670 1 -10.9091 -7309.09 640.455 3681.55)">
                                <stop
                                    className={style.g1}
                                    offset="0.20452"
                                    stopColor="transparent"
                                />
                                <stop
                                    className={style.g2}
                                    offset="0.878453"
                                    stopColor="transparent"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </section>
            );
        } else {
            return (
                <section
                    className={fade}
                    onTransitionEnd={this.logoHasFadedOut}>
                    <svg
                        viewBox="0 0 700 700"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin meet">
                        <path
                            className={style.v1}
                            d="M0 15.0729V0H600V15.0729C576.874 29.0294 483.035 56.5403 292.683 54.9325C102.331 53.3247 18.2475 27.6896 0 15.0729Z"
                            transform="translate(50 383)"
                            fill="url(#paint0_radial)"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            className={style.v2}
                            d="M599.5 33.1354C599.5 34.1151 599.053 35.1301 598.083 36.1849C597.111 37.2422 595.64 38.3087 593.668 39.3733C589.724 41.5021 583.875 43.5708 576.298 45.5494C561.152 49.5045 539.213 53.0714 512.077 56.0687C457.811 62.0624 382.83 65.7708 300 65.7708C217.17 65.7708 142.189 62.0624 87.9229 56.0687C60.7866 53.0714 38.8477 49.5045 23.7018 45.5494C16.1249 43.5708 10.2763 41.5021 6.33243 39.3733C4.36 38.3087 2.88912 37.2422 1.91693 36.1849C0.947121 35.1301 0.5 34.1151 0.5 33.1354C0.5 32.1557 0.947121 31.1407 1.91693 30.0859C2.88912 29.0286 4.36 27.9621 6.33243 26.8975C10.2763 24.7687 16.1249 22.7 23.7018 20.7214C38.8477 16.7662 60.7866 13.1993 87.9229 10.2021C142.189 4.20836 217.17 0.5 300 0.5C382.83 0.5 457.811 4.20836 512.077 10.2021C539.213 13.1993 561.152 16.7662 576.298 20.7214C583.875 22.7 589.724 24.7687 593.668 26.8975C595.64 27.9621 597.111 29.0286 598.083 30.0859C599.053 31.1407 599.5 32.1557 599.5 33.1354Z"
                            transform="translate(50 350)"
                            fill="#F2F2F2"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            className={style.v3}
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 0.528853V248.529C49.8201 248.842 76.5326 247.174 110.5 223.529V248.529C314.678 271.748 324.638 -13.8972 110.5 0.528944V21.0334C85.2319 6.60956 48.2004 1.45439 0 0.528853ZM38 45.5289C83.5 45.5289 110.5 61.5291 110.5 109.029H150.5V45.5289C249 29.0301 251.5 215.529 150.5 210.029V129.029H110.5V181.529C84.7045 205.734 64.5 210.029 38 210.029V45.5289Z"
                            transform="translate(216 133)"
                            fill="white"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            className={style.v4}
                            d="M110.5 223.529C76.5326 247.174 49.8201 248.842 0 248.529V0.528853C48.2004 1.45439 85.2319 6.60956 110.5 21.0334M110.5 223.529V248.529C314.678 271.748 324.638 -13.8972 110.5 0.528944V21.0334M110.5 223.529V181.529M150.5 109.029C150.5 67.8671 136.94 36.1261 110.5 21.0334M150.5 109.029V45.5289C249 29.0301 251.5 215.529 150.5 210.029M150.5 109.029H110.5C110.5 61.5291 83.5 45.5289 38 45.5289V210.029C64.5 210.029 84.7045 205.734 110.5 181.529M110.5 129.029C110.5 118.029 110.5 181.529 110.5 181.529M110.5 129.029H150.5M110.5 129.029V181.529M150.5 129.029C150.5 154.804 150.5 210.029 150.5 210.029M150.5 129.029V210.029"
                            transform="translate(216 133)"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <circle
                            className={style.v5}
                            cx="350"
                            cy="350"
                            r="347.5"
                            stroke="white"
                            strokeWidth="5"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial"
                                cx="0.5"
                                cy="0.5"
                                r="0.5"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="matrix(-670 1 -10.9091 -7309.09 640.455 3681.55)">
                                <stop
                                    className={style.g1}
                                    onAnimationEnd={this.animationComplete}
                                    offset="0.20452"
                                    stopColor="transparent"
                                />
                                <stop
                                    className={style.g2}
                                    offset="0.878453"
                                    stopColor="transparent"
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                </section>
            );
        }
    }
}

Logo.propTypes = {
    isFinished: PropTypes.func,
};
