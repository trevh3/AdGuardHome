// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
import {
    captitalizeWords,
    checkFiltered,
    getRulesToFilterList,
    formatDateTime,
    formatElapsedMs,
    formatTime,
    getBlockingClientName,
    getServiceName,
    processContent,
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
} from '../../../helpers/helpers';
import {
    BLOCK_ACTIONS,
    DEFAULT_SHORT_DATE_FORMAT_OPTIONS,
    FILTERED_STATUS,
    FILTERED_STATUS_TO_META_MAP,
    LONG_TIME_FORMAT,
    QUERY_STATUS_COLORS,
    SCHEME_TO_PROTOCOL_MAP,
} from '../../../helpers/constants';
import { getSourceData } from '../../../helpers/trackers/trackers';
// @ts-expect-error TS(6142): Module '../../../actions' was resolved to '/Users/... Remove this comment to see the full error message
import { toggleBlocking, toggleBlockingForClient } from '../../../actions';
// @ts-expect-error TS(6142): Module './DateCell' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import DateCell from './DateCell';
// @ts-expect-error TS(6142): Module './DomainCell' was resolved to '/Users/igor... Remove this comment to see the full error message
import DomainCell from './DomainCell';
// @ts-expect-error TS(6142): Module './ResponseCell' was resolved to '/Users/ig... Remove this comment to see the full error message
import ResponseCell from './ResponseCell';
// @ts-expect-error TS(6142): Module './ClientCell' was resolved to '/Users/igor... Remove this comment to see the full error message
import ClientCell from './ClientCell';
import { toggleClientBlock } from '../../../actions/access';
import { getBlockClientInfo, BUTTON_PREFIX } from './helpers';
import { updateLogs } from '../../../actions/queryLogs';

import '../Logs.css';

const Row = memo(({
    style,
    rowProps,
    rowProps: { reason },
    isSmallScreen,
    setDetailedDataCurrent,
    setButtonType,
    setModalOpened,
}: any) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const dnssec_enabled = useSelector((state: any) => state.dnsConfig.dnssec_enabled);
    const filters = useSelector((state: any) => state.filtering.filters, shallowEqual);
    const whitelistFilters = useSelector((state: any) => state.filtering.whitelistFilters, shallowEqual);
    const autoClients = useSelector((state: any) => state.dashboard.autoClients, shallowEqual);
    const processingSet = useSelector((state: any) => state.access.processingSet);
    const allowedСlients = useSelector((state: any) => state.access.allowed_clients, shallowEqual);
    const services = useSelector((store: any) => store?.services);

    const clients = useSelector((state: any) => state.dashboard.clients);

    const onClick = () => {
        if (!isSmallScreen) {
            return;
        }
        const {
            answer_dnssec,
            client,
            domain,
            elapsedMs,
            client_info,
            response,
            time,
            tracker,
            upstream,
            type,
            client_proto,
            client_id,
            rules,
            originalResponse,
            status,
            service_name,
            cached,
        } = rowProps;

        const hasTracker = !!tracker;

        const autoClient = autoClients
            .find((autoClient: any) => autoClient.name === client);

        const source = autoClient?.source;

        const formattedElapsedMs = formatElapsedMs(elapsedMs, t);
        const isFiltered = checkFiltered(reason);

        const isBlocked = reason === FILTERED_STATUS.FILTERED_BLACK_LIST
                || reason === FILTERED_STATUS.FILTERED_BLOCKED_SERVICE;

        const buttonType = isFiltered ? BLOCK_ACTIONS.UNBLOCK : BLOCK_ACTIONS.BLOCK;
        const onToggleBlock = () => {
            // @ts-expect-error TS(2554): Expected 4 arguments, but got 2.
            dispatch(toggleBlocking(buttonType, domain));
        };

        const isBlockedByResponse = originalResponse.length > 0 && isBlocked;
        const requestStatus = t(isBlockedByResponse ? 'blocked_by_cname_or_ip' : FILTERED_STATUS_TO_META_MAP[reason]?.LABEL || reason);

        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        const protocol = t(SCHEME_TO_PROTOCOL_MAP[client_proto]) || '';

        const sourceData = getSourceData(tracker);

        const {
            confirmMessage,
            buttonKey: blockingClientKey,
            lastRuleInAllowlist,
        } = getBlockClientInfo(
            client,
            client_info?.disallowed || false,
            client_info?.disallowed_rule || '',
            allowedСlients,
        );

        const blockingForClientKey = isFiltered ? 'unblock_for_this_client_only' : 'block_for_this_client_only';
        const clientNameBlockingFor = getBlockingClientName(clients, client);

        const onBlockingForClientClick = () => {
            dispatch(toggleBlockingForClient(buttonType, domain, clientNameBlockingFor));
        };

        const onBlockingClientClick = async () => {
            if (window.confirm(confirmMessage)) {
                await dispatch(
                    toggleClientBlock(
                        client,
                        client_info?.disallowed || false,
                        client_info?.disallowed_rule || '',
                    ),
                );
                await dispatch(updateLogs());
                setModalOpened(false);
            }
        };

        const blockButton = (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="title--border" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className={
                        classNames(
                            'button-action--arrow-option mb-1',
                            { 'bg--danger': !isBlocked },
                            { 'bg--green': isFiltered },
                        )}
                    onClick={onToggleBlock}
                >
                    {t(buttonType)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
            </>
        );

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        const blockForClientButton = <button
                className='text-center font-weight-bold py-1 button-action--arrow-option'
                onClick={onBlockingForClientClick}>
            {t(blockingForClientKey)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </button>;

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        const blockClientButton = <button
                className='text-center font-weight-bold py-1 button-action--arrow-option'
                onClick={onBlockingClientClick}
                disabled={processingSet || lastRuleInAllowlist}>
            {t(blockingClientKey)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </button>;

        const detailedData = {
            time_table_header: formatTime(time, LONG_TIME_FORMAT),
            // @ts-expect-error TS(2345): Argument of type '{ year: string; month: string; d... Remove this comment to see the full error message
            date: formatDateTime(time, DEFAULT_SHORT_DATE_FORMAT_OPTIONS),
            encryption_status: isBlocked
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                ? <div className="bg--danger">{requestStatus}</div> : requestStatus,
            ...(FILTERED_STATUS.FILTERED_BLOCKED_SERVICE && service_name && services.allServices
                && { service_name: getServiceName(services.allServices, service_name) }),
            domain,
            type_table_header: type,
            protocol,
            known_tracker: hasTracker && 'title',
            table_name: tracker?.name,
            category_label: hasTracker && captitalizeWords(tracker.category),
            tracker_source: hasTracker && sourceData
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    && <a
                            href={sourceData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link--green">{sourceData.name}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
            response_details: 'title',
            install_settings_dns: upstream,
            ...(cached
                && {
                    served_from_cache_label: (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <svg className="icons icon--20 icon--green">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <use xlinkHref="#check" />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </svg>
                    ),
                }
            ),
            elapsed: formattedElapsedMs,
            ...(rules.length > 0
                    && { rule_label: getRulesToFilterList(rules, filters, whitelistFilters) }
            ),
            response_table_header: response?.join('\n'),
            response_code: status,
            client_details: 'title',
            ip_address: client,
            name: client_info?.name || client_id,
            country: client_info?.whois?.country,
            city: client_info?.whois?.city,
            network: client_info?.whois?.orgname,
            source_label: source,
            validated_with_dnssec: dnssec_enabled ? Boolean(answer_dnssec) : false,
            original_response: originalResponse?.join('\n'),
            [BUTTON_PREFIX + buttonType]: blockButton,
            [BUTTON_PREFIX + blockingForClientKey]: blockForClientButton,
            [BUTTON_PREFIX + blockingClientKey]: blockClientButton,
        };

        setDetailedDataCurrent(processContent(detailedData));
        setButtonType(buttonType);
        setModalOpened(true);
    };

    const isDetailed = useSelector((state: any) => state.queryLogs.isDetailed);

    const className = classNames(
        'd-flex px-5 logs__row',
        `logs__row--${FILTERED_STATUS_TO_META_MAP?.[reason]?.COLOR ?? QUERY_STATUS_COLORS.WHITE}`,
        {
            'logs__cell--detailed': isDetailed,
        },
    );

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div style={style} className={className} onClick={onClick} role="row">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DateCell {...rowProps} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DomainCell {...rowProps} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ResponseCell {...rowProps} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ClientCell {...rowProps} />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
});

Row.displayName = 'Row';

Row.propTypes = {
    style: propTypes.object,
    rowProps: propTypes.shape({
        reason: propTypes.string.isRequired,
        answer_dnssec: propTypes.bool.isRequired,
        client: propTypes.string.isRequired,
        domain: propTypes.string.isRequired,
        elapsedMs: propTypes.string.isRequired,
        response: propTypes.array.isRequired,
        time: propTypes.string.isRequired,
        tracker: propTypes.object,
        upstream: propTypes.string.isRequired,
        cached: propTypes.bool.isRequired,
        type: propTypes.string.isRequired,
        client_proto: propTypes.string.isRequired,
        client_id: propTypes.string,
        ecs: propTypes.string,
        client_info: propTypes.shape({
            name: propTypes.string.isRequired,
            whois: propTypes.shape({
                country: propTypes.string,
                city: propTypes.string,
                orgname: propTypes.string,
            }).isRequired,
            disallowed: propTypes.bool.isRequired,
            disallowed_rule: propTypes.string.isRequired,
        }),
        rules: propTypes.arrayOf(propTypes.shape({
            text: propTypes.string.isRequired,
            filter_list_id: propTypes.number.isRequired,
        })),
        originalResponse: propTypes.array,
        status: propTypes.string.isRequired,
        service_name: propTypes.string,
    }).isRequired,
    isSmallScreen: propTypes.bool.isRequired,
    setDetailedDataCurrent: propTypes.func.isRequired,
    setButtonType: propTypes.func.isRequired,
    setModalOpened: propTypes.func.isRequired,
};

export default Row;
