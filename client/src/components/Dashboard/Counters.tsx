// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import round from 'lodash/round';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Card from '../ui/Card';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { formatNumber, msToDays, msToHours } from '../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../ui/LogsSearchLink' was resolved to '/Us... Remove this comment to see the full error message
import LogsSearchLink from '../ui/LogsSearchLink';
import { RESPONSE_FILTER, TIME_UNITS } from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../ui/Tooltip' was resolved to '/Users/igo... Remove this comment to see the full error message
import Tooltip from '../ui/Tooltip';

const Row = ({
    label,
    count,
    response_status,
    tooltipTitle,
    translationComponents,
}: any) => {
    const content = response_status
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        ? <LogsSearchLink response_status={response_status}>{formatNumber(count)}</LogsSearchLink>
        : count;

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="counters__row" key={label}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="counters__column">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <span className="counters__title">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans components={translationComponents}>
                        {label}
                    </Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </span>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <span className="counters__tooltip">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Tooltip
                        content={tooltipTitle}
                        placement="top"
                        className="tooltip-container tooltip-custom--narrow text-center"
                    >
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <svg className="icons icon--20 icon--lightgray ml-2">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <use xlinkHref="#question" />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </svg>
                    </Tooltip>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </span>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="counters__column counters__column--value">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <strong>{content}</strong>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

const Counters = ({
    refreshButton,
    subtitle,
}: any) => {
    const {
        interval,
        numDnsQueries,
        numBlockedFiltering,
        numReplacedSafebrowsing,
        numReplacedParental,
        numReplacedSafesearch,
        avgProcessingTime,
        timeUnits,
    } = useSelector((state: any) => state.stats, shallowEqual);
    const { t } = useTranslation();

    const dnsQueryTooltip = timeUnits === TIME_UNITS.HOURS
        ? t('number_of_dns_query_hours', { count: msToHours(interval) })
        : t('number_of_dns_query_days', { count: msToDays(interval) });

    const rows = [
        {
            label: 'dns_query',
            count: numDnsQueries,
            tooltipTitle: dnsQueryTooltip,
            response_status: RESPONSE_FILTER.ALL.QUERY,
        },
        {
            label: 'blocked_by',
            count: numBlockedFiltering,
            tooltipTitle: 'number_of_dns_query_blocked_24_hours',
            response_status: RESPONSE_FILTER.BLOCKED.QUERY,
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            translationComponents: [<a href="#filters" key="0">link</a>],
        },
        {
            label: 'stats_malware_phishing',
            count: numReplacedSafebrowsing,
            tooltipTitle: 'number_of_dns_query_blocked_24_hours_by_sec',
            response_status: RESPONSE_FILTER.BLOCKED_THREATS.QUERY,
        },
        {
            label: 'stats_adult',
            count: numReplacedParental,
            tooltipTitle: 'number_of_dns_query_blocked_24_hours_adult',
            response_status: RESPONSE_FILTER.BLOCKED_ADULT_WEBSITES.QUERY,
        },
        {
            label: 'enforced_save_search',
            count: numReplacedSafesearch,
            tooltipTitle: 'number_of_dns_query_to_safe_search',
            response_status: RESPONSE_FILTER.SAFE_SEARCH.QUERY,
        },
        {
            label: 'average_processing_time',
            count: avgProcessingTime ? `${round(avgProcessingTime)} ms` : 0,
            tooltipTitle: 'average_processing_time_hint',
        },
    ];

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
            title={t('general_statistics')}
            subtitle={subtitle}
            bodyType="card-table"
            refresh={refreshButton}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="counters">
                {rows.map(Row)}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </Card>
    );
};

Row.propTypes = {
    label: propTypes.string.isRequired,
    count: propTypes.string.isRequired,
    response_status: propTypes.string,
    tooltipTitle: propTypes.string.isRequired,
    translationComponents: propTypes.arrayOf(propTypes.element),
};

Counters.propTypes = {
    refreshButton: propTypes.node.isRequired,
    subtitle: propTypes.string.isRequired,
};

export default Counters;
