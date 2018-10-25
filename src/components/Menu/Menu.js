import React from 'react';
import style from './Menu.scss';
import MyLink from './MyLink';

const Menu = () => {
	return (
		<div className={style.absoluteContainer}>
			<div className={style.menuGrid}>
				<ul className={style.menu}>
					<MyLink exact direction="/">Home</MyLink>
					<MyLink direction="/about">About</MyLink>
					<MyLink direction="/portfolio">Portfolio</MyLink>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
