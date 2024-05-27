// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactDOM from 'react-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import '../components/App/index.css';
import '../components/ui/ReactTable.css';
import configureStore from '../configureStore';
import reducers from '../reducers/install';
import '../i18n';
// @ts-expect-error TS(6142): Module './Setup' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Setup from './Setup';

const store = configureStore(reducers, {}); // set initial state
ReactDOM.render(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Provider store={store}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Setup />
    </Provider>,
    document.getElementById('root'),
);
