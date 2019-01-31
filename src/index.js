import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'typeface-work-sans';


const render = () => {
	ReactDOM.render(<Router><App /></Router>, document.getElementById('index'));
};

if (
	'Map' in window &&
    'startsWith' in String.prototype &&
    'endsWith' in String.prototype &&
    'includes' in String.prototype &&
    'includes' in Array.prototype &&
    'assign' in Object &&
    'entries' in Object &&
    'keys' in Object
) {
	render();
} else {
    import(/* webpackChunkName: "polyfills" */'./polyfills').then(() => { console.log('I am imported async'); render(); });
}


