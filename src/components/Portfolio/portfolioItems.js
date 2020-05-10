import homePage from '../../assets/codepen logo.svg';
import dashboard from '../../assets/danieldahlman.svg';
import hangman from '../../assets/dashboardimg.svg';
import snake from '../../assets/git.svg';
import todolist from '../../assets/hangman.svg';
import git from '../../assets/snakegame.svg';
import codepen from '../../assets/todolist.svg';
import wordpress from '../../assets/wordpressSite.svg';

const portfolioItems = [
	{ id: 1, enlarged: false, alt: 'homepage', header: 'Homepage', text: 'This was my first portfoliopage which was created for getting internships' },
	{ id: 2, enlarged: false, alt: 'dashboard', header: 'Dashboard', text: 'I created a dashboard for one of the companies I did my internship at and this was the result' },
	{ id: 3, enlarged: false, alt: 'wordpress', header: 'Wordpress', text: 'My first wordpress theme, nothing to fancy, just to show that I can do it' },
	{ id: 4, enlarged: false, alt: 'todolist', header: 'Todolist', text: 'A simple todolist made out of JS and Bootstrap' },
	{ id: 5, enlarged: false, alt: 'hangman', header: 'Hangman', text: 'A hangman-game that is actually an easter egg in my first portfolio page. Created out of JS' },
	{ id: 6, enlarged: false, alt: 'snake', header: 'Snake game', text: 'This is a snake-game made in a html5 canvas element' },
	{ id: 7, enlarged: false, alt: 'git', header: 'Version control', text: 'Check out some of my repos' },
	{ id: 8, enlarged: false, alt: 'codepen', header: 'Codepen', text: 'Here is a collection of my tests and "work in progress", love to test new things here' },
	{ id: 9, enlarged: false, src: null },
	{ id: 10, enlarged: false, src: null },
	{ id: 11, enlarged: false, src: null },
	{ id: 12, enlarged: false, src: null }
];

const images = [
	{ src: codepen, unloadedSrc: '' },
	{ src: homePage, unloadedSrc: '' },
	{ src: dashboard, unloadedSrc: '' },
	{ src: git, unloadedSrc: '' },
	{ src: hangman, unloadedSrc: '' },
	{ src: snake, unloadedSrc: '' },
	{ src: todolist, unloadedSrc: '' },
	{ src: wordpress, unloadedSrc: '' }
];

export { portfolioItems, images };

