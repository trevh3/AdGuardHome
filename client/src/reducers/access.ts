import { handleActions } from 'redux-actions';

import * as actions from '../actions/access';

const access = handleActions(
    {
        [actions.getAccessListRequest]: (state: any) => ({
            ...state,
            processing: true,
        }),
        [actions.getAccessListFailure]: (state: any) => ({
            ...state,
            processing: false,
        }),
        [actions.getAccessListSuccess]: (state: any, { payload }: any) => {
            const { allowed_clients, disallowed_clients, blocked_hosts } = payload;
            const newState = {
                ...state,
                allowed_clients: allowed_clients?.join('\n') || '',
                disallowed_clients: disallowed_clients?.join('\n') || '',
                blocked_hosts: blocked_hosts?.join('\n') || '',
                processing: false,
            };
            return newState;
        },

        [actions.setAccessListRequest]: (state: any) => ({
            ...state,
            processingSet: true,
        }),
        [actions.setAccessListFailure]: (state: any) => ({
            ...state,
            processingSet: false,
        }),
        [actions.setAccessListSuccess]: (state: any) => ({
            ...state,
            processingSet: false,
        }),

        [actions.toggleClientBlockRequest]: (state: any) => ({
            ...state,
            processingSet: true,
        }),
        [actions.toggleClientBlockFailure]: (state: any) => ({
            ...state,
            processingSet: false,
        }),
        [actions.toggleClientBlockSuccess]: (state: any, { payload }: any) => {
            const { allowed_clients, disallowed_clients, blocked_hosts } = payload;
            const newState = {
                ...state,
                allowed_clients: allowed_clients?.join('\n') || '',
                disallowed_clients: disallowed_clients?.join('\n') || '',
                blocked_hosts: blocked_hosts?.join('\n') || '',
                processingSet: false,
            };
            return newState;
        },
    },
    {
        processing: true,
        processingSet: false,
        allowed_clients: '',
        disallowed_clients: '',
        blocked_hosts: '',
    },
);

export default access;
