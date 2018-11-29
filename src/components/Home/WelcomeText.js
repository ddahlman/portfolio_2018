import React, { Component } from 'react';
import FLIP from '../FLIP';
import style from './Home.scss';

export default class WelcomeText extends Component {
    constructor() {
        super();
        this.state = {
            hasFadedUp: false
        }
    }
    render() {
        const { hasFadedUp } = this.state;
        const fadeUp = hasFadedUp ? `${style.welcomeContainer} ${style.fadeUp}` : `${style.welcomeContainer} ${style.fadeDown}`;
        return (
            <FLIP
                animate={hasFadedUp}
                duration={{ transform: '.5s', opacity: '2s', delay: '0s' }}
                styleDeclaration={'transformAndOpacity'}
            >
                <section className={fadeUp}>
                    <h1 className={style.header}>Daniel Dahlman</h1>
                </section>
            </FLIP>
        );
    }
}