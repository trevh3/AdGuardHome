import { handleActions } from 'redux-actions';

import * as actions from '../actions/rewrites';

const rewrites = handleActions(
    {
        [actions.getRewritesListRequest]: (state: any) => ({
            ...state,
            processing: true,
        }),
        [actions.getRewritesListFailure]: (state: any) => ({
            ...state,
            processing: false,
        }),
        [actions.getRewritesListSuccess]: (state: any, { payload }: any) => {
            const newState = {
                ...state,
                list: payload,
                processing: false,
            };
            return newState;
        },

        [actions.addRewriteRequest]: (state: any) => ({
            ...state,
            processingAdd: true,
        }),
        [actions.addRewriteFailure]: (state: any) => ({
            ...state,
            processingAdd: false,
        }),
        [actions.addRewriteSuccess]: (state: any, { payload }: any) => {
            const newState = {
                ...state,
                list: [...state.list, payload],
                processingAdd: false,
            };
            return newState;
        },

        [actions.deleteRewriteRequest]: (state: any) => ({
            ...state,
            processingDelete: true,
        }),
        [actions.deleteRewriteFailure]: (state: any) => ({
            ...state,
            processingDelete: false,
        }),
        [actions.deleteRewriteSuccess]: (state: any) => ({
            ...state,
            processingDelete: false,
        }),

        [actions.updateRewriteRequest]: (state: any) => ({
            ...state,
            processingUpdate: true,
        }),
        [actions.updateRewriteFailure]: (state: any) => ({
            ...state,
            processingUpdate: false,
        }),
        [actions.updateRewriteSuccess]: (state: any) => {
            const newState = {
                ...state,
                processingUpdate: false,
            };
            return newState;
        },

        [actions.toggleRewritesModal]: (state: any, { payload }: any) => {
            if (payload) {
                const newState = {
                    ...state,
                    modalType: payload.type || '',
                    isModalOpen: !state.isModalOpen,
                    currentRewrite: payload.currentRewrite,
                };
                return newState;
            }

            const newState = {
                ...state,
                isModalOpen: !state.isModalOpen,
            };
            return newState;
        },
    },
    {
        processing: true,
        processingAdd: false,
        processingDelete: false,
        processingUpdate: false,
        isModalOpen: false,
        modalType: '',
        currentRewrite: {},
        list: [],
    },
);

export default rewrites;
