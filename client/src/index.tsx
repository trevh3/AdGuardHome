// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactDOM from 'react-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import reducers from './reducers';
// @ts-expect-error TS(6142): Module './components/App' was resolved to '/Users/... Remove this comment to see the full error message
import App from './components/App';
import './components/App/index.css';
import './i18n';

const store = configureStore(reducers, {}); // set initial state

ReactDOM.render(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Provider store={store}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <App />
    </Provider>,
    document.getElementById('root'),
);
