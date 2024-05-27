// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { handleActions } from 'redux-actions';
// @ts-expect-error TS(6142): Module '../actions' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import * as actions from '../actions';

const settings = handleActions(
    {
        [actions.initSettingsRequest]: (state: any) => ({
            ...state,
            processing: true,
        }),
        [actions.initSettingsFailure]: (state: any) => ({
            ...state,
            processing: false,
        }),
        [actions.initSettingsSuccess]: (state: any, {
            payload,
        }: any) => {
            const { settingsList } = payload;
            const newState = {
                ...state,
                settingsList,
                processing: false,
            };
            return newState;
        },
        [actions.toggleSettingStatus]: (state: any, {
            payload,
        }: any) => {
            const { settingsList } = state;
            const { settingKey, value } = payload;

            const setting = settingsList[settingKey];

            const newSetting = value || {
                ...setting,
                enabled: !setting.enabled,
            };
            const newSettingsList = {
                ...settingsList,
                [settingKey]: newSetting,
            };
            return {
                ...state,
                settingsList: newSettingsList,
            };
        },
        [actions.testUpstreamRequest]: (state: any) => ({
            ...state,
            processingTestUpstream: true,
        }),
        [actions.testUpstreamFailure]: (state: any) => ({
            ...state,
            processingTestUpstream: false,
        }),
        [actions.testUpstreamSuccess]: (state: any) => ({
            ...state,
            processingTestUpstream: false,
        }),
    },
    {
        processing: true,
        processingTestUpstream: false,
        processingDhcpStatus: false,
        settingsList: {},
    },
);

export default settings;
