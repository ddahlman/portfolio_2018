import homePage from './img/danieldahlman.svg';
import dashboard from './img/dashboardimg.svg';
import hangman from './img/hangman.svg';
import snake from './img/snakegame.svg';
import todolist from './img/todolist.svg';
import git from './img/git.svg';
import codepen from './img/codepen logo.svg';
import wordpress from './img/wordpressSite.svg';

const portfolioItems = [
	{ id: 1, enlarged: false, src: homePage, alt: 'homepage', header: 'Homepage', text: 'This was my first portfoliopage which was created for getting internships' },
	{ id: 2, enlarged: false, src: dashboard, alt: 'dashboard', header: 'Dashboard', text: 'I created a dashboard for one of the companies I did my internship at and this was the result' },
	{ id: 3, enlarged: false, src: wordpress, alt: 'wordpress', header: 'Wordpress', text: 'My first wordpress theme, nothing to fancy, just to show that I can do it' },
	{ id: 4, enlarged: false, src: todolist, alt: 'todolist', header: 'Todolist', text: 'A simple todolist made out of JS and Bootstrap' },
	{ id: 5, enlarged: false, src: hangman, alt: 'hangman', header: 'Hangman', text: 'A hangman-game that is actually an easter egg in my first portfolio page. Created out of JS' },
	{ id: 6, enlarged: false, src: snake, alt: 'snake', header: 'Snake game', text: 'This is a snake-game made in a html5 canvas element' },
	{ id: 7, enlarged: false, src: git, alt: 'git', header: 'Version control', text: 'Check out some of my repos' },
	{ id: 8, enlarged: false, src: codepen, alt: 'codepen', header: 'Codepen', text: 'Here is a collection of my tests and "work in progress", love to test new things here' },
	{ id: 9, enlarged: false, src: null },
	{ id: 10, enlarged: false, src: null },
	{ id: 11, enlarged: false, src: null },
	{ id: 12, enlarged: false, src: null }
];

export default portfolioItems;

