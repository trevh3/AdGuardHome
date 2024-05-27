// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { HashLink as Link } from 'react-router-hash-link';
import { Trans, useTranslation } from 'react-i18next';
import classNames from 'classnames';

// @ts-expect-error TS(6142): Module './Statistics' was resolved to '/Users/igor... Remove this comment to see the full error message
import Statistics from './Statistics';
// @ts-expect-error TS(6142): Module './Counters' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Counters from './Counters';
// @ts-expect-error TS(6142): Module './Clients' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Clients from './Clients';
// @ts-expect-error TS(6142): Module './QueriedDomains' was resolved to '/Users/... Remove this comment to see the full error message
import QueriedDomains from './QueriedDomains';
// @ts-expect-error TS(6142): Module './BlockedDomains' was resolved to '/Users/... Remove this comment to see the full error message
import BlockedDomains from './BlockedDomains';
import {
    DISABLE_PROTECTION_TIMINGS,
    ONE_SECOND_IN_MS,
    SETTINGS_URLS,
    TIME_UNITS,
} from '../../helpers/constants';
import {
    msToSeconds,
    msToMinutes,
    msToHours,
    msToDays,
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
} from '../../helpers/helpers';

// @ts-expect-error TS(6142): Module '../ui/PageTitle' was resolved to '/Users/i... Remove this comment to see the full error message
import PageTitle from '../ui/PageTitle';
// @ts-expect-error TS(6142): Module '../ui/Loading' was resolved to '/Users/igo... Remove this comment to see the full error message
import Loading from '../ui/Loading';
import './Dashboard.css';
// @ts-expect-error TS(6142): Module '../ui/Dropdown' was resolved to '/Users/ig... Remove this comment to see the full error message
import Dropdown from '../ui/Dropdown';
// @ts-expect-error TS(6142): Module './UpstreamResponses' was resolved to '/Use... Remove this comment to see the full error message
import UpstreamResponses from './UpstreamResponses';
// @ts-expect-error TS(6142): Module './UpstreamAvgTime' was resolved to '/Users... Remove this comment to see the full error message
import UpstreamAvgTime from './UpstreamAvgTime';

const Dashboard = ({
    getAccessList,
    getStats,
    getStatsConfig,
    dashboard,
    dashboard: { protectionEnabled, processingProtection, protectionDisabledDuration },
    toggleProtection,
    stats,
    access,
}: any) => {
    const { t } = useTranslation();

    const getAllStats = () => {
        getAccessList();
        getStats();
        getStatsConfig();
    };

    useEffect(() => {
        getAllStats();
    }, []);
    const getSubtitle = () => {
        if (!stats.enabled) {
            return t('stats_disabled_short');
        }

        const msIn7Days = 604800000;

        if (stats.timeUnits === TIME_UNITS.HOURS && stats.interval === msIn7Days) {
            return t('for_last_days', { count: msToDays(stats.interval) });
        }

        return stats.timeUnits === TIME_UNITS.HOURS
            ? t('for_last_hours', { count: msToHours(stats.interval) })
            : t('for_last_days', { count: msToDays(stats.interval) });
    };

    const buttonClass = classNames('btn btn-sm dashboard-protection-button', {
        'btn-gray': protectionEnabled,
        'btn-success': !protectionEnabled,
    });

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const refreshButton = <button
            type="button"
            className="btn btn-icon btn-outline-primary btn-sm"
            title={t('refresh_btn')}
            onClick={() => getAllStats()}
    >
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <svg className="icons icon12">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <use xlinkHref="#refresh" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </svg>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </button>;

    const statsProcessing = stats.processingStats
            || stats.processingGetConfig
            || access.processing;

    const subtitle = getSubtitle();

    const DISABLE_PROTECTION_ITEMS = [
        {
            text: t('disable_for_seconds', { count: msToSeconds(DISABLE_PROTECTION_TIMINGS.HALF_MINUTE) }),
            disableTime: DISABLE_PROTECTION_TIMINGS.HALF_MINUTE,
        },
        {
            text: t('disable_for_minutes', { count: msToMinutes(DISABLE_PROTECTION_TIMINGS.MINUTE) }),
            disableTime: DISABLE_PROTECTION_TIMINGS.MINUTE,
        },
        {
            text: t('disable_for_minutes', { count: msToMinutes(DISABLE_PROTECTION_TIMINGS.TEN_MINUTES) }),
            disableTime: DISABLE_PROTECTION_TIMINGS.TEN_MINUTES,
        },
        {
            text: t('disable_for_hours', { count: msToHours(DISABLE_PROTECTION_TIMINGS.HOUR) }),
            disableTime: DISABLE_PROTECTION_TIMINGS.HOUR,
        },
        {
            text: t('disable_until_tomorrow'),
            disableTime: DISABLE_PROTECTION_TIMINGS.TOMORROW,
        },
    ];

    const getDisableProtectionItems = () => (
        Object.values(DISABLE_PROTECTION_ITEMS)
            .map((item, index) => (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div
                    key={`disable_timings_${index}`}
                    className="dropdown-item"
                    onClick={() => {
                        toggleProtection(protectionEnabled, item.disableTime - ONE_SECOND_IN_MS);
                    }}
                >
                    {item.text}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            ))
    );

    const getRemaningTimeText = (milliseconds: any) => {
        if (!milliseconds) {
            return '';
        }

        const date = new Date(milliseconds);
        const hh = date.getUTCHours();
        const mm = `0${date.getUTCMinutes()}`.slice(-2);
        const ss = `0${date.getUTCSeconds()}`.slice(-2);
        const formattedHH = `0${hh}`.slice(-2);

        return hh ? `${formattedHH}:${mm}:${ss}` : `${mm}:${ss}`;
    };

    const getProtectionBtnText = (status: any) => (status ? t('disable_protection') : t('enable_protection'));

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PageTitle title={t('dashboard')} containerClass="page-title--dashboard">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="page-title__protection">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className={buttonClass}
                    onClick={() => {
                        toggleProtection(protectionEnabled);
                    }}
                    disabled={processingProtection}
                >
                    {protectionDisabledDuration
                        ? `${t('enable_protection_timer')} ${getRemaningTimeText(protectionDisabledDuration)}`
                        : getProtectionBtnText(protectionEnabled)
                    }
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {protectionEnabled && <Dropdown
                    label=""
                    baseClassName="dropdown-protection"
                    icon="arrow-down"
                    controlClassName="dropdown-protection__toggle"
                    menuClassName="dropdown-menu dropdown-menu-arrow dropdown-menu--protection"
                >
                    {getDisableProtectionItems()}
                </Dropdown>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={getAllStats}
            >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>refresh_statics</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>
        </PageTitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {statsProcessing && <Loading />}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        {!statsProcessing && <div className="row row-cards dashboard">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-12">
                {stats.interval === 0 && (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="alert alert-warning" role="alert">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans components={[
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Link
                                to={`${SETTINGS_URLS.settings}#stats-config`}
                                key="0"
                            >
                                link
                            </Link>,
                        ]}>
                            stats_disabled
                        </Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                )}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Statistics
                    interval={msToDays(stats.interval)}
                    dnsQueries={stats.dnsQueries}
                    blockedFiltering={stats.blockedFiltering}
                    replacedSafebrowsing={stats.replacedSafebrowsing}
                    replacedParental={stats.replacedParental}
                    numDnsQueries={stats.numDnsQueries}
                    numBlockedFiltering={stats.numBlockedFiltering}
                    numReplacedSafebrowsing={stats.numReplacedSafebrowsing}
                    numReplacedParental={stats.numReplacedParental}
                    refreshButton={refreshButton}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Counters
                    subtitle={subtitle}
                    refreshButton={refreshButton}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Clients
                    subtitle={subtitle}
                    dnsQueries={stats.numDnsQueries}
                    topClients={stats.topClients}
                    clients={dashboard.clients}
                    autoClients={dashboard.autoClients}
                    refreshButton={refreshButton}
                    processingAccessSet={access.processingSet}
                    disallowedClients={access.disallowed_clients}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <QueriedDomains
                    subtitle={subtitle}
                    dnsQueries={stats.numDnsQueries}
                    topQueriedDomains={stats.topQueriedDomains}
                    refreshButton={refreshButton}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <BlockedDomains
                    subtitle={subtitle}
                    topBlockedDomains={stats.topBlockedDomains}
                    blockedFiltering={stats.numBlockedFiltering}
                    replacedSafebrowsing={stats.numReplacedSafebrowsing}
                    replacedSafesearch={stats.numReplacedSafesearch}
                    replacedParental={stats.numReplacedParental}
                    refreshButton={refreshButton}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <UpstreamResponses
                    subtitle={subtitle}
                    topUpstreamsResponses={stats.topUpstreamsResponses}
                    refreshButton={refreshButton}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <UpstreamAvgTime
                    subtitle={subtitle}
                    topUpstreamsAvgTime={stats.topUpstreamsAvgTime}
                    refreshButton={refreshButton}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>}
    </>;
};

Dashboard.propTypes = {
    dashboard: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired,
    access: PropTypes.object.isRequired,
    getStats: PropTypes.func.isRequired,
    getStatsConfig: PropTypes.func.isRequired,
    toggleProtection: PropTypes.func.isRequired,
    getClients: PropTypes.func.isRequired,
    getAccessList: PropTypes.func.isRequired,
};

export default Dashboard;
