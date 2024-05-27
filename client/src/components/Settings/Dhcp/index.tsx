// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { destroy } from 'redux-form';
import {
    DHCP_DESCRIPTION_PLACEHOLDERS,
    DHCP_FORM_NAMES,
    STATUS_RESPONSE,
    FORM_NAME,
} from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module './Leases' was resolved to '/Users/igorloba... Remove this comment to see the full error message
import Leases from './Leases';
// @ts-expect-error TS(6142): Module './StaticLeases/index' was resolved to '/Us... Remove this comment to see the full error message
import StaticLeases from './StaticLeases/index';
// @ts-expect-error TS(6142): Module '../../ui/Card' was resolved to '/Users/igo... Remove this comment to see the full error message
import Card from '../../ui/Card';
// @ts-expect-error TS(6142): Module '../../ui/PageTitle' was resolved to '/User... Remove this comment to see the full error message
import PageTitle from '../../ui/PageTitle';
// @ts-expect-error TS(6142): Module '../../ui/Loading' was resolved to '/Users/... Remove this comment to see the full error message
import Loading from '../../ui/Loading';
import {
    findActiveDhcp,
    getDhcpInterfaces,
    getDhcpStatus,
    resetDhcp,
    setDhcpConfig,
    resetDhcpLeases,
    toggleDhcp,
    toggleLeaseModal,
// @ts-expect-error TS(6142): Module '../../../actions' was resolved to '/Users/... Remove this comment to see the full error message
} from '../../../actions';
// @ts-expect-error TS(6142): Module './FormDHCPv4' was resolved to '/Users/igor... Remove this comment to see the full error message
import FormDHCPv4 from './FormDHCPv4';
// @ts-expect-error TS(6142): Module './FormDHCPv6' was resolved to '/Users/igor... Remove this comment to see the full error message
import FormDHCPv6 from './FormDHCPv6';
// @ts-expect-error TS(6142): Module './Interfaces' was resolved to '/Users/igor... Remove this comment to see the full error message
import Interfaces from './Interfaces';
import {
    calculateDhcpPlaceholdersIpv4,
    calculateDhcpPlaceholdersIpv6,
    subnetMaskToBitMask,
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
} from '../../../helpers/helpers';
import './index.css';

const Dhcp = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        processingStatus,
        processingConfig,
        processing,
        processingInterfaces,
        check,
        leases,
        staticLeases,
        isModalOpen,
        processingAdding,
        processingDeleting,
        processingUpdating,
        processingDhcp,
        v4,
        v6,
        interface_name: interfaceName,
        enabled,
        dhcp_available,
        interfaces,
        modalType,
    } = useSelector((state: any) => state.dhcp, shallowEqual);

    const interface_name = useSelector(
        (state: any) => state.form[FORM_NAME.DHCP_INTERFACES]?.values?.interface_name,
    );
    const isInterfaceIncludesIpv4 = useSelector(
        (state: any) => !!state.dhcp?.interfaces?.[interface_name]?.ipv4_addresses,
    );
    const dhcp = useSelector((state: any) => state.form[FORM_NAME.DHCPv4], shallowEqual);

    const [ipv4placeholders, setIpv4Placeholders] = useState(DHCP_DESCRIPTION_PLACEHOLDERS.ipv4);
    const [ipv6placeholders, setIpv6Placeholders] = useState(DHCP_DESCRIPTION_PLACEHOLDERS.ipv6);

    useEffect(() => {
        dispatch(getDhcpStatus());
    }, []);

    useEffect(() => {
        if (dhcp_available) {
            dispatch(getDhcpInterfaces());
        }
    }, [dhcp_available]);

    useEffect(() => {
        const [ipv4] = interfaces?.[interface_name]?.ipv4_addresses ?? [];
        const [ipv6] = interfaces?.[interface_name]?.ipv6_addresses ?? [];
        const gateway_ip = interfaces?.[interface_name]?.gateway_ip;

        const v4placeholders = ipv4
            ? calculateDhcpPlaceholdersIpv4(ipv4, gateway_ip)
            : DHCP_DESCRIPTION_PLACEHOLDERS.ipv4;

        const v6placeholders = ipv6
            ? calculateDhcpPlaceholdersIpv6()
            : DHCP_DESCRIPTION_PLACEHOLDERS.ipv6;

        setIpv4Placeholders(v4placeholders);
        setIpv6Placeholders(v6placeholders);
    }, [interface_name]);

    const clear = () => {
        // eslint-disable-next-line no-alert
        if (window.confirm(t('dhcp_reset'))) {
            Object.values(DHCP_FORM_NAMES)
                .forEach((formName) => dispatch(destroy(formName)));
            dispatch(resetDhcp());
            dispatch(getDhcpStatus());
        }
    };

    const handleSubmit = (values: any) => {
        dispatch(setDhcpConfig({
            interface_name,
            ...values,
        }));
    };

    const handleReset = () => {
        if (window.confirm(t('dhcp_reset_leases_confirm'))) {
            dispatch(resetDhcpLeases());
        }
    };

    const enteredSomeV4Value = Object.values(v4)
        .some(Boolean);
    const enteredSomeV6Value = Object.values(v6)
        .some(Boolean);
    const enteredSomeValue = enteredSomeV4Value || enteredSomeV6Value || interfaceName;

    const getToggleDhcpButton = () => {
        const filledConfig = interface_name && (Object.values(v4)
            .every(Boolean) || Object.values(v6)
            .every(Boolean));

        const className = classNames('btn btn-sm', {
            'btn-gray': enabled,
            'btn-outline-success': !enabled,
        });

        const onClickDisable = () => dispatch(toggleDhcp({ enabled }));
        const onClickEnable = () => {
            const values = {
                enabled,
                interface_name,
                v4: enteredSomeV4Value ? v4 : {},
                v6: enteredSomeV6Value ? v6 : {},
            };
            dispatch(toggleDhcp(values));
        };

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        return <button
            type="button"
            className={className}
            onClick={enabled ? onClickDisable : onClickEnable}
            disabled={processingDhcp || processingConfig
            || (!enabled && (!filledConfig || !check))}
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>{enabled ? 'dhcp_disable' : 'dhcp_enable'}</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </button>;
    };

    const statusButtonClass = classNames('btn btn-sm dhcp-form__button', {
        'btn-loading btn-primary': processingStatus,
        'btn-outline-primary': !processingStatus,
    });

    const onClick = () => dispatch(findActiveDhcp(interface_name));

    const toggleModal = () => dispatch(toggleLeaseModal());

    const initialV4 = enteredSomeV4Value ? v4 : {};
    const initialV6 = enteredSomeV6Value ? v6 : {};

    if (processing || processingInterfaces) {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Loading />;
    }

    if (!processing && !dhcp_available) {
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        return <div className="text-center pt-5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <h2>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>unavailable_dhcp</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </h2>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <h4>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>unavailable_dhcp_desc</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </h4>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>;
    }

    const toggleDhcpButton = getToggleDhcpButton();

    const inputtedIPv4values = dhcp?.values?.v4?.gateway_ip && dhcp?.values?.v4?.subnet_mask;
    const isEmptyConfig = !Object.values(dhcp?.values?.v4 ?? {}).some(Boolean);
    const disabledLeasesButton = Boolean(dhcp?.syncErrors || interfaces?.syncErrors
        || !isInterfaceIncludesIpv4 || isEmptyConfig || processingConfig || !inputtedIPv4values);
    const cidr = inputtedIPv4values ? `${dhcp?.values?.v4?.gateway_ip}/${subnetMaskToBitMask(dhcp?.values?.v4?.subnet_mask)}` : '';

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PageTitle title={t('dhcp_settings')} subtitle={t('dhcp_description')} containerClass="page-title--dhcp">
            {toggleDhcpButton}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                type="button"
                className={statusButtonClass}
                onClick={onClick}
                disabled={enabled || !interface_name || processingConfig}
            >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>check_dhcp_servers</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                type="button"
                className='btn btn-sm btn-outline-secondary'
                disabled={!enteredSomeValue || processingConfig}
                onClick={clear}
            >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>reset_settings</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>
        </PageTitle>
        {!processing && !processingInterfaces
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        && <>
            {!enabled
            && check
            && (check.v4.other_server.found !== STATUS_RESPONSE.NO
                    || check.v6.other_server.found !== STATUS_RESPONSE.NO)
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            && <div className="mb-5">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <hr />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="text-danger">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>dhcp_warning</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Interfaces
                initialValues={{ interface_name: interfaceName }}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                title={t('dhcp_ipv4_settings')}
                bodyType="card-body box-body--settings"
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormDHCPv4
                        onSubmit={handleSubmit}
                        initialValues={{ v4: initialV4 }}
                        processingConfig={processingConfig}
                        ipv4placeholders={ipv4placeholders}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </Card>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                title={t('dhcp_ipv6_settings')}
                bodyType="card-body box-body--settings"
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormDHCPv6
                        onSubmit={handleSubmit}
                        initialValues={{ v6: initialV6 }}
                        processingConfig={processingConfig}
                        ipv6placeholders={ipv6placeholders}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </Card>
            {enabled
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            && <Card
                title={t('dhcp_leases')}
                bodyType="card-body box-body--settings"
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="row">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="col">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Leases leases={leases} disabledLeasesButton={disabledLeasesButton}/>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </Card>}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                title={t('dhcp_static_leases')}
                bodyType="card-body box-body--settings"
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="row">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="col-12">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <StaticLeases
                            staticLeases={staticLeases}
                            isModalOpen={isModalOpen}
                            toggleModal={toggleModal}
                            modalType={modalType}
                            processingAdding={processingAdding}
                            processingDeleting={processingDeleting}
                            processingUpdating={processingUpdating}
                            cidr={cidr}
                            rangeStart={dhcp?.values?.v4?.range_start}
                            rangeEnd={dhcp?.values?.v4?.range_end}
                            gatewayIp={dhcp?.values?.v4?.gateway_ip}
                        />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="btn-list mt-2">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <button
                                type="button"
                                className="btn btn-success btn-standard mt-3"
                                onClick={toggleModal}
                                disabled={disabledLeasesButton}
                            >
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>dhcp_add_static_lease</Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </button>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <button
                                type="button"
                                className="btn btn-secondary btn-standard mt-3"
                                onClick={handleReset}
                            >
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>dhcp_reset_leases</Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </button>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </Card>
        </>}
    </>;
};

export default Dhcp;
