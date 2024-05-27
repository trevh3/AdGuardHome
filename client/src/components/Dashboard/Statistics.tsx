// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { withTranslation, Trans } from 'react-i18next';

// @ts-expect-error TS(6142): Module './StatsCard' was resolved to '/Users/igorl... Remove this comment to see the full error message
import StatsCard from './StatsCard';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getPercent, normalizeHistory } from '../../helpers/helpers';
import { RESPONSE_FILTER } from '../../helpers/constants';

const getNormalizedHistory = (data: any, interval: any, id: any) => [
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
    { data: normalizeHistory(data, interval), id },
];

const Statistics = ({
    interval,
    dnsQueries,
    blockedFiltering,
    replacedSafebrowsing,
    replacedParental,
    numDnsQueries,
    numBlockedFiltering,
    numReplacedSafebrowsing,
    numReplacedParental,
}: any) => (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="row">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="col-sm-6 col-lg-3">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <StatsCard
                total={numDnsQueries}
                lineData={getNormalizedHistory(dnsQueries, interval, 'dnsQuery')}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                title={<Link to="logs"><Trans>dns_query</Trans></Link>}
                color="blue"
            />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="col-sm-6 col-lg-3">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <StatsCard
                total={numBlockedFiltering}
                lineData={getNormalizedHistory(blockedFiltering, interval, 'blockedFiltering')}
                percent={getPercent(numDnsQueries, numBlockedFiltering)}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                title={<Trans components={[<Link to={`logs?response_status=${RESPONSE_FILTER.BLOCKED.QUERY}`} key="0">link</Link>]}>blocked_by</Trans>}
                color="red"
            />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="col-sm-6 col-lg-3">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <StatsCard
                total={numReplacedSafebrowsing}
                lineData={getNormalizedHistory(
                    replacedSafebrowsing,
                    interval,
                    'replacedSafebrowsing',
                )}
                percent={getPercent(numDnsQueries, numReplacedSafebrowsing)}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                title={<Link to={`logs?response_status=${RESPONSE_FILTER.BLOCKED_THREATS.QUERY}`}><Trans>stats_malware_phishing</Trans></Link>}
                color="green"
            />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="col-sm-6 col-lg-3">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <StatsCard
                total={numReplacedParental}
                lineData={getNormalizedHistory(replacedParental, interval, 'replacedParental')}
                percent={getPercent(numDnsQueries, numReplacedParental)}
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                title={<Link to={`logs?response_status=${RESPONSE_FILTER.BLOCKED_ADULT_WEBSITES.QUERY}`}><Trans>stats_adult</Trans></Link>}
                color="yellow"
            />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
);

Statistics.propTypes = {
    interval: PropTypes.number.isRequired,
    dnsQueries: PropTypes.array.isRequired,
    blockedFiltering: PropTypes.array.isRequired,
    replacedSafebrowsing: PropTypes.array.isRequired,
    replacedParental: PropTypes.array.isRequired,
    numDnsQueries: PropTypes.number.isRequired,
    numBlockedFiltering: PropTypes.number.isRequired,
    numReplacedSafebrowsing: PropTypes.number.isRequired,
    numReplacedParental: PropTypes.number.isRequired,
    refreshButton: PropTypes.node.isRequired,
};

export default withTranslation()(Statistics);
