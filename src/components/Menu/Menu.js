import React from 'react';
import style from './Menu.scss';
import MyLink from './MyLink';

const Menu = () => {
	return (
		<div className={style.absoluteContainer}>
			<nav className={style.menuGrid}>
				<ul className={style.menu}>
					<MyLink exact direction="/">Home</MyLink>
					<MyLink direction="/about">About</MyLink>
					<MyLink direction="/portfolio">Portfolio</MyLink>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
