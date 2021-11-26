import style from './NoOldBrowsersDisclaimer.scss';

const NoOldBrowsersDisclaimer = () => {
    return (
        <section className={style.container}>
            <article className={style.content}>
                <h1 className={style.header}>Old Browser sorry</h1>
                <p className={style.paragraph}>
                    I can tell that you are using an older browser that we do
                    not support
                </p>
                <p className={style.paragraph}>Try one of these</p>
                <a className={style.link} href="https://www.google.se/chrome">
                    Google chrome
                </a>
                <a
                    className={style.link}
                    href="https://www.mozilla.org/sv-SE/firefox/new/">
                    Firefox
                </a>
                <a
                    className={style.link}
                    href="https://www.microsoft.com/sv-se/edge">
                    Microsoft Edge
                </a>
            </article>
        </section>
    );
};

export default NoOldBrowsersDisclaimer;
