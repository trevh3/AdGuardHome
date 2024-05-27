// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { handleActions } from 'redux-actions';

import * as actions from '../actions/queryLogs';
import {
    DEFAULT_LOGS_FILTER, DAY, QUERY_LOG_INTERVALS_DAYS, HOUR,
} from '../helpers/constants';

const queryLogs = handleActions(
    {
        [actions.setFilteredLogsRequest]: (state: any) => ({
            ...state,
            processingGetLogs: true,
        }),
        [actions.setFilteredLogsFailure]: (state: any) => ({
            ...state,
            processingGetLogs: false,
        }),
        [actions.toggleDetailedLogs]: (
            // @ts-expect-error TS(7006): Parameter 'state' implicitly has an 'any' type.
            state,
            {
                payload,
            }: any,
        ) => ({
            ...state,
            isDetailed: payload,
        }),

        [actions.setFilteredLogsSuccess]: (state: any, {
            payload,
        }: any) => {
            const { logs, oldest, filter } = payload;

            const isFiltered = filter && Object.keys(filter).some((key) => filter[key]);

            return {
                ...state,
                oldest,
                filter,
                isFiltered,
                logs,
                isEntireLog: logs.length < 1,
                processingGetLogs: false,
            };
        },

        [actions.setLogsFilterRequest]: (
            // @ts-expect-error TS(7006): Parameter 'state' implicitly has an 'any' type.
            state,
            {
                payload,
            }: any,
        ) => ({
            ...state,
            filter: payload,
        }),

        [actions.getLogsRequest]: (state: any) => ({
            ...state,
            processingGetLogs: true,
        }),
        [actions.getLogsFailure]: (state: any) => ({
            ...state,
            processingGetLogs: false,
        }),
        [actions.getLogsSuccess]: (state: any, {
            payload,
        }: any) => {
            const {
                logs, oldest, older_than,
            } = payload;

            return {
                ...state,
                oldest,
                logs: older_than ? [...state.logs, ...logs] : logs,
                isEntireLog: logs.length < 1,
                processingGetLogs: false,
            };
        },

        [actions.clearLogsRequest]: (state: any) => ({
            ...state,
            processingClear: true,
        }),
        [actions.clearLogsFailure]: (state: any) => ({
            ...state,
            processingClear: false,
        }),
        [actions.clearLogsSuccess]: (state: any) => ({
            ...state,
            logs: [],
            processingClear: false,
        }),

        [actions.getLogsConfigRequest]: (state: any) => ({
            ...state,
            processingGetConfig: true,
        }),
        [actions.getLogsConfigFailure]: (state: any) => ({
            ...state,
            processingGetConfig: false,
        }),
        [actions.getLogsConfigSuccess]: (
            // @ts-expect-error TS(7006): Parameter 'state' implicitly has an 'any' type.
            state,
            {
                payload,
            }: any,
        ) => ({
            ...state,
            ...payload,

            customInterval: !QUERY_LOG_INTERVALS_DAYS.includes(payload.interval)
                ? payload.interval / HOUR
                : null,

            processingGetConfig: false,
        }),

        [actions.setLogsConfigRequest]: (state: any) => ({
            ...state,
            processingSetConfig: true,
        }),
        [actions.setLogsConfigFailure]: (state: any) => ({
            ...state,
            processingSetConfig: false,
        }),
        [actions.setLogsConfigSuccess]: (
            // @ts-expect-error TS(7006): Parameter 'state' implicitly has an 'any' type.
            state,
            {
                payload,
            }: any,
        ) => ({
            ...state,
            ...payload,
            processingSetConfig: false,
        }),

        [actions.getAdditionalLogsRequest]: (state: any) => ({
            ...state,
            processingAdditionalLogs: true,
            processingGetLogs: true,
        }),
        [actions.getAdditionalLogsFailure]: (state: any) => ({
            ...state,
            processingAdditionalLogs: false,
            processingGetLogs: false,
        }),
        [actions.getAdditionalLogsSuccess]: (state: any) => ({
            ...state,
            processingAdditionalLogs: false,
            processingGetLogs: false,
            isEntireLog: true,
        }),
    },
    {
        processingGetLogs: true,
        processingClear: false,
        processingGetConfig: false,
        processingSetConfig: false,
        processingAdditionalLogs: false,
        interval: DAY,
        logs: [],
        enabled: true,
        oldest: '',
        filter: DEFAULT_LOGS_FILTER,
        isFiltered: false,
        anonymize_client_ip: false,
        isDetailed: true,
        isEntireLog: false,
        customInterval: null,
    },
);

export default queryLogs;
