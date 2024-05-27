// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector } from 'react-redux';
import classNames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
    DEFAULT_SHORT_DATE_FORMAT_OPTIONS,
    LONG_TIME_FORMAT,
    SCHEME_TO_PROTOCOL_MAP,
} from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { captitalizeWords, formatDateTime, formatTime } from '../../../helpers/helpers';
import { getSourceData } from '../../../helpers/trackers/trackers';
// @ts-expect-error TS(6142): Module './IconTooltip' was resolved to '/Users/igo... Remove this comment to see the full error message
import IconTooltip from './IconTooltip';

const DomainCell = ({
    answer_dnssec,
    client_proto,
    domain,
    unicodeName,
    time,
    tracker,
    type,
    ecs,
}: any) => {
    const { t } = useTranslation();
    const dnssec_enabled = useSelector((state: any) => state.dnsConfig.dnssec_enabled);
    const isDetailed = useSelector((state: any) => state.queryLogs.isDetailed);

    const hasTracker = !!tracker;

    const lockIconClass = classNames('icons icon--24 d-none d-sm-block', {
        'icon--green': answer_dnssec,
        'icon--disabled': !answer_dnssec,
        'my-3': isDetailed,
    });

    const privacyIconClass = classNames('icons mx-2 icon--24 d-none d-sm-block logs__question', {
        'icon--green': hasTracker,
        'icon--disabled': !hasTracker,
        'my-3': isDetailed,
    });

    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const protocol = t(SCHEME_TO_PROTOCOL_MAP[client_proto]) || '';
    const ip = type ? `${t('type_table_header')}: ${type}` : '';

    let requestDetailsObj = {
        time_table_header: formatTime(time, LONG_TIME_FORMAT),
        // @ts-expect-error TS(2345): Argument of type '{ year: string; month: string; d... Remove this comment to see the full error message
        date: formatDateTime(time, DEFAULT_SHORT_DATE_FORMAT_OPTIONS),
        domain,
    };

    if (domain && unicodeName) {
        requestDetailsObj = {
            ...requestDetailsObj,
            domain: unicodeName,
            // @ts-expect-error TS(2322): Type '{ domain: any; punycode: any; time_table_hea... Remove this comment to see the full error message
            punycode: domain,
        };
    }

    if (ecs) {
        requestDetailsObj = {
            ...requestDetailsObj,
            // @ts-expect-error TS(2322): Type '{ ecs: any; time_table_header: string; date:... Remove this comment to see the full error message
            ecs,
        };
    }

    requestDetailsObj = {
        ...requestDetailsObj,
        // @ts-expect-error TS(2322): Type '{ type_table_header: any; protocol: string; ... Remove this comment to see the full error message
        type_table_header: type,
        protocol,
    };

    const sourceData = getSourceData(tracker);

    const knownTrackerDataObj = {
        name_table_header: tracker?.name,
        category_label: hasTracker && captitalizeWords(tracker.category),
        source_label: sourceData && (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <a
                href={sourceData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link--green"
            >
                {sourceData.name}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </a>
        ),
    };

    const renderGrid = (content: any, idx: any) => {
        const preparedContent = typeof content === 'string' ? t(content) : content;

        const className = classNames(
            'text-truncate o-hidden',
            { 'overflow-break': preparedContent?.length > 100 },
        );

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div key={idx} className={className}>
                {preparedContent}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    };

    const getGrid = (contentObj: any, title: any, className: any) => [
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div key={title} className={classNames('pb-2 grid--title', className)}>
            {t(title)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>,
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div key={`${title}-1`} className="grid grid--limited">
            {React.Children.map(Object.entries(contentObj), renderGrid)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>,
    ];

    // @ts-expect-error TS(2554): Expected 3 arguments, but got 2.
    const requestDetails = getGrid(requestDetailsObj, 'request_details');

    const renderContent = hasTracker ? requestDetails.concat(getGrid(knownTrackerDataObj, 'known_tracker', 'pt-4')) : requestDetails;

    const valueClass = classNames('w-100 text-truncate', {
        'px-2 d-flex justify-content-center flex-column': isDetailed,
    });

    const details = [ip, protocol].filter(Boolean).join(', ');

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div
            className="d-flex o-hidden logs__cell logs__cell logs__cell--domain"
            role="gridcell"
        >
            {dnssec_enabled && (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IconTooltip
                    className={lockIconClass}
                    tooltipClass="py-4 px-5 pb-45"
                    canShowTooltip={!!answer_dnssec}
                    xlinkHref="lock"
                    columnClass="w-100"
                    content="validated_with_dnssec"
                    placement="bottom"
                />
            )}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IconTooltip
                className={privacyIconClass}
                tooltipClass="pt-4 pb-5 px-5 mw-75"
                xlinkHref="privacy"
                contentItemClass="key-colon"
                renderContent={renderContent}
                place="bottom"
            />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className={valueClass}>
                {unicodeName ? (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="text-truncate overflow-break-mobile" title={unicodeName}>
                        {unicodeName}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                ) : (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="text-truncate overflow-break-mobile" title={domain}>
                        {domain}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                )}
                {details && isDetailed && (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div
                        className="detailed-info d-none d-sm-block text-truncate"
                        title={details}
                    >
                        {details}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                )}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

DomainCell.propTypes = {
    answer_dnssec: propTypes.bool.isRequired,
    client_proto: propTypes.string.isRequired,
    domain: propTypes.string.isRequired,
    unicodeName: propTypes.string,
    time: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    tracker: propTypes.object,
    ecs: propTypes.string,
};

export default DomainCell;
