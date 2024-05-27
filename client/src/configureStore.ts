import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [
    thunk,
];

export default function configureStore(reducer: any, initialState: any) {
    /* eslint-disable no-underscore-dangle */
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(...middlewares),
        // @ts-expect-error TS(2339): Property '__REDUX_DEVTOOLS_EXTENSION__' does not e... Remove this comment to see the full error message
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f,
    ));
    /* eslint-enable */
    return store;
}
