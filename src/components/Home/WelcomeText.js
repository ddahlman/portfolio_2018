import { AppConsumer } from '../../ContextComponent';
import FLIP from '../FLIP';
import WelcomeSkills from './WelcomeSkills';
import style from './Home.scss';

const WelcomeText = () => {
    return (
        <AppConsumer>
            {(transitionComplete) => {
                return (
                    <FLIP
                        animate={transitionComplete}
                        duration={{
                            transform: '.5s',
                            opacity: '1s',
                            delay: '0s',
                        }}
                        styleDeclaration={'transformAndOpacity'}>
                        <section
                            className={
                                transitionComplete
                                    ? `${style.textContainer} ${style.fadeUp}`
                                    : `${style.textContainer} ${style.fadeDown}`
                            }>
                            <h1 className={style.header}>Daniel Dahlman</h1>
                            <p className={style.text1}>Front-end developer</p>
                            <p className={style.text2}>
                                Welcome to my personal website
                            </p>
                            <WelcomeSkills animate={transitionComplete} />
                        </section>
                    </FLIP>
                );
            }}
        </AppConsumer>
    );
};

export default WelcomeText;
