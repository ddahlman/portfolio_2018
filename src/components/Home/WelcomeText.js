import React from 'react';
import { AppConsumer } from '../../ContextComponent'
import FLIP from '../FLIP';
import style from './Home.scss';

const WelcomeText = () => {

    return (
        <AppConsumer>
            {transitionComplete => {
                console.log(transitionComplete);
                return (<FLIP
                    animate={transitionComplete}
                    duration={{ transform: '.5s', opacity: '1s', delay: '0s' }}
                    styleDeclaration={'transformAndOpacity'}
                >
                    <section className={transitionComplete ? `${style.textContainer} ${style.fadeUp}` : `${style.textContainer} ${style.fadeDown}`}>
                        <div className={style.welcome}><h1 className={style.header}>Daniel Dahlman</h1></div>
                    </section>
                </FLIP>)
            }}
        </AppConsumer>
    );

}

export default WelcomeText;