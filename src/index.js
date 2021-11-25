import './react-refresh-fix';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'typeface-work-sans';

if (
    'Symbol' in window &&
    'Map' in window &&
    'startsWith' in String.prototype &&
    'endsWith' in String.prototype &&
    'includes' in String.prototype &&
    'includes' in Array.prototype &&
    'assign' in Object &&
    'entries' in Object &&
    'keys' in Object
) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('index')
    );
} else {
    const NoOldBrowsersDisclaimer = React.lazy(() =>
        import(
            /* webpackChunkName: "NoOldBrowsersDisclaimer" */ './NoOldBrowsersDisclaimer/NoOldBrowsersDisclaimer'
        )
    );
    ReactDOM.render(
        <Suspense fallback={<div>Loading...</div>}>
            <NoOldBrowsersDisclaimer />
        </Suspense>,
        document.getElementById('index')
    );
}
