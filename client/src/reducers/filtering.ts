import { handleActions } from 'redux-actions';

import * as actions from '../actions/filtering';

const filtering = handleActions(
    {
        [actions.setRulesRequest]: (state: any) => ({
            ...state,
            processingRules: true,
        }),
        [actions.setRulesFailure]: (state: any) => ({
            ...state,
            processingRules: false,
        }),
        [actions.setRulesSuccess]: (state: any) => ({
            ...state,
            processingRules: false,
        }),

        [actions.handleRulesChange]: (state: any, {
            payload,
        }: any) => {
            const { userRules } = payload;
            return { ...state, userRules };
        },

        [actions.getFilteringStatusRequest]: (state: any) => ({
            ...state,
            processingFilters: true,
            check: {},
        }),
        [actions.getFilteringStatusFailure]: (state: any) => ({
            ...state,
            processingFilters: false,
        }),
        [actions.getFilteringStatusSuccess]: (

            state,
            {
                payload,
            }: any,
        ) => ({
            ...state,
            ...payload,
            processingFilters: false,
        }),

        [actions.addFilterRequest]: (state: any) => ({
            ...state,
            processingAddFilter: true,
            isFilterAdded: false,
        }),
        [actions.addFilterFailure]: (state: any) => ({
            ...state,
            processingAddFilter: false,
            isFilterAdded: false,
        }),
        [actions.addFilterSuccess]: (state: any) => ({
            ...state,
            processingAddFilter: false,
            isFilterAdded: true,
        }),

        [actions.toggleFilteringModal]: (state: any, {
            payload,
        }: any) => {
            if (payload) {
                const newState = {
                    ...state,
                    isModalOpen: !state.isModalOpen,
                    isFilterAdded: false,
                    modalType: payload.type || '',
                    modalFilterUrl: payload.url || '',
                };
                return newState;
            }
            const newState = {
                ...state,
                isModalOpen: !state.isModalOpen,
                isFilterAdded: false,
                modalType: '',
            };
            return newState;
        },

        [actions.toggleFilterRequest]: (state: any) => ({
            ...state,
            processingConfigFilter: true,
        }),
        [actions.toggleFilterFailure]: (state: any) => ({
            ...state,
            processingConfigFilter: false,
        }),
        [actions.toggleFilterSuccess]: (state: any) => ({
            ...state,
            processingConfigFilter: false,
        }),

        [actions.editFilterRequest]: (state: any) => ({
            ...state,
            processingConfigFilter: true,
        }),
        [actions.editFilterFailure]: (state: any) => ({
            ...state,
            processingConfigFilter: false,
        }),
        [actions.editFilterSuccess]: (state: any) => ({
            ...state,
            processingConfigFilter: false,
        }),

        [actions.refreshFiltersRequest]: (state: any) => ({
            ...state,
            processingRefreshFilters: true,
        }),
        [actions.refreshFiltersFailure]: (state: any) => ({
            ...state,
            processingRefreshFilters: false,
        }),
        [actions.refreshFiltersSuccess]: (state: any) => ({
            ...state,
            processingRefreshFilters: false,
        }),

        [actions.removeFilterRequest]: (state: any) => ({
            ...state,
            processingRemoveFilter: true,
        }),
        [actions.removeFilterFailure]: (state: any) => ({
            ...state,
            processingRemoveFilter: false,
        }),
        [actions.removeFilterSuccess]: (state: any) => ({
            ...state,
            processingRemoveFilter: false,
        }),

        [actions.setFiltersConfigRequest]: (state: any) => ({
            ...state,
            processingSetConfig: true,
        }),
        [actions.setFiltersConfigFailure]: (state: any) => ({
            ...state,
            processingSetConfig: false,
        }),
        [actions.setFiltersConfigSuccess]: (

            state,
            {
                payload,
            }: any,
        ) => ({
            ...state,
            ...payload,
            processingSetConfig: false,
        }),

        [actions.checkHostRequest]: (state: any) => ({
            ...state,
            processingCheck: true,
        }),
        [actions.checkHostFailure]: (state: any) => ({
            ...state,
            processingCheck: false,
        }),
        [actions.checkHostSuccess]: (

            state,
            {
                payload,
            }: any,
        ) => ({
            ...state,
            check: payload,
            processingCheck: false,
        }),
    },
    {
        isModalOpen: false,
        processingFilters: false,
        processingRules: false,
        processingAddFilter: false,
        processingRefreshFilters: false,
        processingConfigFilter: false,
        processingRemoveFilter: false,
        processingSetConfig: false,
        processingCheck: false,
        isFilterAdded: false,
        filters: [],
        whitelistFilters: [],
        userRules: '',
        interval: 24,
        enabled: true,
        modalType: '',
        modalFilterUrl: '',
        check: {},
    },
);

export default filtering;
