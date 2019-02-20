import React from 'react';
import styles from './About.scss';

const AboutText = () => {
	return (
		<article className={styles.aboutText}>
			<h1>Who am I?</h1>
			<p>
                I&apos;m Daniel Dahlman and I&apos;m a junior front-end developer who recently
                graduated from an education called front-end developer at KYH in
                Stokholm. I have a passion for creating beautiful and user-friendly
                websites and webapplications (with a hint of cool animations) which
                works perfectly for any device. The user interface is very important,
                and to me it&apos;s the number one factor that will make users want to
                revisit your website over and over again.
			</p>
			<p>
                Allthough I have experince through the full stack my preference is
                front-end. I really enjoy coding in JavaSript(es6 and beyond) and Sass/Scss to
                display cool and easy-to-understand websites.
			</p>
			<p>
                This site has been designed and developed by me from the ground up. It&apos;s
                handled through React.js and Webpack.
			</p>
		</article>
	);
};

export default AboutText;
