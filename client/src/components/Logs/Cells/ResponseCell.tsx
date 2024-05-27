import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useSelector } from 'react-redux';
import classNames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
import {
    getRulesToFilterList,
    formatElapsedMs,
    getFilterNames,
    getServiceName,
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
} from '../../../helpers/helpers';
import { FILTERED_STATUS, FILTERED_STATUS_TO_META_MAP } from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module './IconTooltip' was resolved to '/Users/igo... Remove this comment to see the full error message
import IconTooltip from './IconTooltip';

const ResponseCell = ({
    elapsedMs,
    originalResponse,
    reason,
    response,
    status,
    upstream,
    rules,
    service_name,
    cached,
}: any) => {
    const { t } = useTranslation();
    const filters = useSelector((state: any) => state.filtering.filters, shallowEqual);
    const whitelistFilters = useSelector((state: any) => state.filtering.whitelistFilters, shallowEqual);
    const isDetailed = useSelector((state: any) => state.queryLogs.isDetailed);
    const services = useSelector((store: any) => store?.services);

    const formattedElapsedMs = formatElapsedMs(elapsedMs, t);

    const isBlocked = reason === FILTERED_STATUS.FILTERED_BLACK_LIST
            || reason === FILTERED_STATUS.FILTERED_BLOCKED_SERVICE;

    const isBlockedByResponse = originalResponse.length > 0 && isBlocked;

    const statusLabel = t(isBlockedByResponse ? 'blocked_by_cname_or_ip' : FILTERED_STATUS_TO_META_MAP[reason]?.LABEL || reason);
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const boldStatusLabel = <span className="font-weight-bold">{statusLabel}</span>;

    const renderResponses = (responseArr: any) => {
        if (!responseArr || responseArr.length === 0) {
            return '';
        }

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div>{responseArr.map((response: any) => {
                const className = classNames('white-space--nowrap', {
                    'overflow-break': response.length > 100,
                });

                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                return <div key={response} className={className}>{`${response}\n`}</div>;
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            })}</div>
        );
    };

    const COMMON_CONTENT = {
        encryption_status: boldStatusLabel,
        install_settings_dns: upstream,
        ...(cached
            && {
                served_from_cache_label: (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <svg className="icons icon--20 icon--green mb-1">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <use xlinkHref="#check" />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </svg>
                ),
            }
        ),
        elapsed: formattedElapsedMs,
        response_code: status,
        ...(service_name && services.allServices
                && { service_name: getServiceName(services.allServices, service_name) }
        ),
        ...(rules.length > 0
                && { rule_label: getRulesToFilterList(rules, filters, whitelistFilters) }
        ),
        response_table_header: renderResponses(response),
        original_response: renderResponses(originalResponse),
    };

    const content = rules.length > 0
        ? Object.entries(COMMON_CONTENT)
        : Object.entries({
            ...COMMON_CONTENT,
            filter: '',
        });

    const getDetailedInfo = (reason: any) => {
        switch (reason) {
            case FILTERED_STATUS.FILTERED_BLOCKED_SERVICE:
                if (!service_name || !services.allServices) {
                    return formattedElapsedMs;
                }
                return getServiceName(services.allServices, service_name);
            case FILTERED_STATUS.FILTERED_BLACK_LIST:
            case FILTERED_STATUS.NOT_FILTERED_WHITE_LIST:
                return getFilterNames(rules, filters, whitelistFilters).join(', ');
            default:
                return formattedElapsedMs;
        }
    };

    const detailedInfo = getDetailedInfo(reason);

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__cell logs__cell--response" role="gridcell">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IconTooltip
                className={classNames('icons mr-4 icon--24 icon--lightgray logs__question', { 'my-3': isDetailed })}
                columnClass='grid grid--limited'
                tooltipClass='px-5 pb-5 pt-4 mw-75 custom-tooltip__response-details'
                contentItemClass='text-truncate key-colon o-hidden'
                xlinkHref='question'
                title='response_details'
                content={content}
                placement='bottom'
            />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="text-truncate">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="text-truncate" title={statusLabel}>{statusLabel}</div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                {isDetailed && <div
                        className="detailed-info d-none d-sm-block pt-1 text-truncate"
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        title={detailedInfo}>{detailedInfo}</div>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

ResponseCell.propTypes = {
    elapsedMs: propTypes.string.isRequired,
    originalResponse: propTypes.array.isRequired,
    reason: propTypes.string.isRequired,
    response: propTypes.array.isRequired,
    status: propTypes.string.isRequired,
    upstream: propTypes.string.isRequired,
    cached: propTypes.bool.isRequired,
    rules: propTypes.arrayOf(propTypes.shape({
        text: propTypes.string.isRequired,
        filter_list_id: propTypes.number.isRequired,
    })),
    service_name: propTypes.string,
};

export default ResponseCell;
