import { handleActions } from 'redux-actions';

import * as actions from '../actions';

import { enrichWithConcatenatedIpAddresses } from '../helpers/helpers';

const dhcp = handleActions(
    {
        [actions.getDhcpStatusRequest]: (state: any) => ({
            ...state,
            processing: true,
        }),
        [actions.getDhcpStatusFailure]: (state: any) => ({
            ...state,
            processing: false,
        }),
        [actions.getDhcpStatusSuccess]: (state: any, { payload }: any) => {
            const { static_leases: staticLeases, ...values } = payload;

            const newState = {
                ...state,
                staticLeases,
                processing: false,
                ...values,
            };

            return newState;
        },

        [actions.getDhcpInterfacesRequest]: (state: any) => ({
            ...state,
            processingInterfaces: true,
        }),
        [actions.getDhcpInterfacesFailure]: (state: any) => ({
            ...state,
            processingInterfaces: false,
        }),
        [actions.getDhcpInterfacesSuccess]: (state: any, { payload }: any) => {
            const newState = {
                ...state,
                interfaces: enrichWithConcatenatedIpAddresses(payload),
                processingInterfaces: false,
            };
            return newState;
        },

        [actions.findActiveDhcpRequest]: (state: any) => ({
            ...state,
            processingStatus: true,
        }),
        [actions.findActiveDhcpFailure]: (state: any) => ({
            ...state,
            processingStatus: false,
        }),
        [actions.findActiveDhcpSuccess]: (state: any, { payload }: any) => {
            const newState = {
                ...state,
                check: payload,
                processingStatus: false,
            };
            return newState;
        },

        [actions.toggleDhcpRequest]: (state: any) => ({
            ...state,
            processingDhcp: true,
        }),
        [actions.toggleDhcpFailure]: (state: any) => ({
            ...state,
            processingDhcp: false,
        }),
        [actions.toggleDhcpSuccess]: (state: any) => {
            const { enabled } = state;
            const newState = {
                ...state,
                enabled: !enabled,
                check: null,
                processingDhcp: false,
            };
            return newState;
        },

        [actions.setDhcpConfigRequest]: (state: any) => ({
            ...state,
            processingConfig: true,
        }),
        [actions.setDhcpConfigFailure]: (state: any) => ({
            ...state,
            processingConfig: false,
        }),
        [actions.setDhcpConfigSuccess]: (state: any, { payload }: any) => {
            const { v4, v6 } = state;
            const newConfigV4 = { ...v4, ...payload.v4 };
            const newConfigV6 = { ...v6, ...payload.v6 };

            const newState = {
                ...state,
                v4: newConfigV4,
                v6: newConfigV6,
                interface_name: payload.interface_name,
                processingConfig: false,
            };

            return newState;
        },

        [actions.resetDhcpRequest]: (state: any) => ({
            ...state,
            processingReset: true,
        }),
        [actions.resetDhcpFailure]: (state: any) => ({
            ...state,
            processingReset: false,
        }),
        [actions.resetDhcpSuccess]: (state: any) => ({
            ...state,
            processingReset: false,
            enabled: false,
            v4: {},
            v6: {},
            interface_name: '',
        }),
        [actions.resetDhcpLeasesSuccess]: (state: any) => ({
            ...state,
            leases: [],
            staticLeases: [],
        }),

        [actions.toggleLeaseModal]: (state: any, { payload }: any) => {
            const newState = {
                ...state,
                isModalOpen: !state.isModalOpen,
                modalType: payload?.type || '',
                leaseModalConfig: payload?.config,
            };
            return newState;
        },

        [actions.addStaticLeaseRequest]: (state: any) => ({
            ...state,
            processingAdding: true,
        }),
        [actions.addStaticLeaseFailure]: (state: any) => ({
            ...state,
            processingAdding: false,
        }),
        [actions.addStaticLeaseSuccess]: (state: any, { payload }: any) => {
            const { ip, mac, hostname } = payload;
            const newLease = {
                ip,
                mac,
                hostname: hostname || '',
            };
            const leases = [...state.staticLeases, newLease];
            const newState = {
                ...state,
                staticLeases: leases,
                processingAdding: false,
            };
            return newState;
        },

        [actions.removeStaticLeaseRequest]: (state: any) => ({
            ...state,
            processingDeleting: true,
        }),
        [actions.removeStaticLeaseFailure]: (state: any) => ({
            ...state,
            processingDeleting: false,
        }),
        [actions.removeStaticLeaseSuccess]: (state: any, { payload }: any) => {
            const leaseToRemove = payload.ip;
            const leases = state.staticLeases.filter((item: any) => item.ip !== leaseToRemove);
            const newState = {
                ...state,
                staticLeases: leases,
                processingDeleting: false,
            };
            return newState;
        },

        [actions.updateStaticLeaseRequest]: (state: any) => ({
            ...state,
            processingUpdating: true,
        }),
        [actions.updateStaticLeaseFailure]: (state: any) => ({
            ...state,
            processingUpdating: false,
        }),
        [actions.updateStaticLeaseSuccess]: (state: any) => {
            const newState = {
                ...state,
                processingUpdating: false,
            };
            return newState;
        },
    },
    {
        processing: true,
        processingStatus: false,
        processingInterfaces: false,
        processingDhcp: false,
        processingConfig: false,
        processingAdding: false,
        processingDeleting: false,
        processingUpdating: false,
        enabled: false,
        interface_name: '',
        check: null,
        v4: {
            gateway_ip: '',
            subnet_mask: '',
            range_start: '',
            range_end: '',
            lease_duration: 0,
        },
        v6: {
            range_start: '',
            lease_duration: 0,
        },
        leases: [],
        staticLeases: [],
        isModalOpen: false,
        leaseModalConfig: undefined,
        modalType: '',
        dhcp_available: false,
    },
);

export default dhcp;
