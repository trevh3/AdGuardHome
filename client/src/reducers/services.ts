import { handleActions } from 'redux-actions';

import * as actions from '../actions/services';

const services = handleActions(
    {
        [actions.getBlockedServicesRequest]: (state: any) => ({
            ...state,
            processing: true,
        }),
        [actions.getBlockedServicesFailure]: (state: any) => ({
            ...state,
            processing: false,
        }),
        [actions.getBlockedServicesSuccess]: (state, { payload }: any) => ({
            ...state,
            list: payload,
            processing: false,
        }),

        [actions.getAllBlockedServicesRequest]: (state: any) => ({
            ...state,
            processingAll: true,
        }),
        [actions.getAllBlockedServicesFailure]: (state: any) => ({
            ...state,
            processingAll: false,
        }),
        [actions.getAllBlockedServicesSuccess]: (state, { payload }: any) => ({
            ...state,
            allServices: payload.blocked_services,
            processingAll: false,
        }),

        [actions.updateBlockedServicesRequest]: (state: any) => ({
            ...state,
            processingSet: true,
        }),
        [actions.updateBlockedServicesFailure]: (state: any) => ({
            ...state,
            processingSet: false,
        }),
        [actions.updateBlockedServicesSuccess]: (state: any) => ({
            ...state,
            processingSet: false,
        }),
    },
    {
        processing: true,
        processingAll: true,
        processingSet: false,
        list: {},
        allServices: [],
    },
);

export default services;
