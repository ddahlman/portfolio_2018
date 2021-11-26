import style from './Menu.scss';
import MyLink from './MyLink';

const Menu = () => {
    return (
        <div className={style.absoluteContainer}>
            <nav className={style.menuGrid}>
                <ul className={style.menu}>
                    <MyLink ie11Class="home" exact direction="/">
                        Home
                    </MyLink>
                    <MyLink ie11Class="about" direction="/about">
                        About
                    </MyLink>
                    <MyLink ie11Class="portfolio" direction="/portfolio">
                        Portfolio
                    </MyLink>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
