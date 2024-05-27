import { combineReducers } from 'redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { handleActions } from 'redux-actions';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { reducer as formReducer } from 'redux-form';

import * as actions from '../actions/login';
import toasts from './toasts';

const login = handleActions({
    [actions.processLoginRequest]: (state: any) => ({
        ...state,
        processingLogin: true,
    }),
    [actions.processLoginFailure]: (state: any) => ({
        ...state,
        processingLogin: false,
    }),
    [actions.processLoginSuccess]: (
        // @ts-expect-error TS(7006): Parameter 'state' implicitly has an 'any' type.
        state,
        {
            payload,
        }: any,
    ) => ({
        ...state,
        ...payload,
        processingLogin: false,
    }),
}, {
    processingLogin: false,
    email: '',
    password: '',
});

export default combineReducers({
    login,
    toasts,
    form: formReducer,
});
