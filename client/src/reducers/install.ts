import { combineReducers } from 'redux';

import { handleActions } from 'redux-actions';

import { reducer as formReducer } from 'redux-form';

import * as actions from '../actions/install';
import toasts from './toasts';
import {
    ALL_INTERFACES_IP, INSTALL_FIRST_STEP, STANDARD_DNS_PORT, STANDARD_WEB_PORT,
} from '../helpers/constants';

const install = handleActions({
    [actions.getDefaultAddressesRequest]: (state: any) => ({
        ...state,
        processingDefault: true,
    }),
    [actions.getDefaultAddressesFailure]: (state: any) => ({
        ...state,
        processingDefault: false,
    }),
    [actions.getDefaultAddressesSuccess]: (state: any, {
        payload,
    }: any) => {
        const { interfaces, version } = payload;
        const web = { ...state.web, port: payload.web_port };
        const dns = { ...state.dns, port: payload.dns_port };

        const newState = {
            ...state,
            web,
            dns,
            interfaces,
            processingDefault: false,
            dnsVersion: version,
        };

        return newState;
    },

    [actions.nextStep]: (state: any) => ({
        ...state,
        step: state.step + 1,
    }),
    [actions.prevStep]: (state: any) => ({
        ...state,
        step: state.step - 1,
    }),

    [actions.setAllSettingsRequest]: (state: any) => ({
        ...state,
        processingSubmit: true,
    }),
    [actions.setAllSettingsFailure]: (state: any) => ({
        ...state,
        processingSubmit: false,
    }),
    [actions.setAllSettingsSuccess]: (state: any) => ({
        ...state,
        processingSubmit: false,
    }),

    [actions.checkConfigRequest]: (state: any) => ({
        ...state,
        processingCheck: true,
    }),
    [actions.checkConfigFailure]: (state: any) => ({
        ...state,
        processingCheck: false,
    }),
    [actions.checkConfigSuccess]: (state: any, {
        payload,
    }: any) => {
        const web = { ...state.web, ...payload.web };
        const dns = { ...state.dns, ...payload.dns };
        const staticIp = { ...state.staticIp, ...payload.static_ip };

        const newState = {
            ...state, web, dns, staticIp, processingCheck: false,
        };
        return newState;
    },
}, {
    step: INSTALL_FIRST_STEP,
    processingDefault: true,
    processingSubmit: false,
    processingCheck: false,
    web: {
        ip: ALL_INTERFACES_IP,
        port: STANDARD_WEB_PORT,
        status: '',
        can_autofix: false,
    },
    dns: {
        ip: ALL_INTERFACES_IP,
        port: STANDARD_DNS_PORT,
        status: '',
        can_autofix: false,
    },
    staticIp: {
        static: '',
        ip: '',
        error: '',
    },
    interfaces: {},
    dnsVersion: '',
});

export default combineReducers({
    install,
    toasts,
    form: formReducer,
});