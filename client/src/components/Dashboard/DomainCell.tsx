// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { Trans } from 'react-i18next';
import { getSourceData, getTrackerData } from '../../helpers/trackers/trackers';
// @ts-expect-error TS(6142): Module '../ui/Tooltip' was resolved to '/Users/igo... Remove this comment to see the full error message
import Tooltip from '../ui/Tooltip';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { captitalizeWords } from '../../helpers/helpers';

// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const renderLabel = (value: any) => <strong><Trans>{value}</Trans></strong>;

const renderLink = ({
    url,
    name,
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
}: any) => <a
    className="tooltip-custom__content-link"
    target="_blank"
    rel="noopener noreferrer"
    href={url}
>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <strong>{name}</strong>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</a>;

const getTrackerInfo = (trackerData: any) => [{
    key: 'name_table_header',
    value: trackerData,
    render: renderLink,
},
{
    key: 'category_label',
    value: captitalizeWords(trackerData.category),
    render: renderLabel,
},
{
    key: 'source_label',
    value: getSourceData(trackerData),
    render: renderLink,
}];

const DomainCell = ({
    value,
}: any) => {
    const trackerData = getTrackerData(value);

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const content = trackerData && <div className="popover__list">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="tooltip-custom__content-title mb-1">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>found_in_known_domain_db</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        {getTrackerInfo(trackerData)
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            .map(({ key, value, render }) => <div
                key={key}
                className="tooltip-custom__content-item"
            >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>{key}</Trans>: {render(value)}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>)}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__row">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="logs__text" title={value}>
                {value}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            {trackerData
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            && <Tooltip content={content} placement="top"
                        className="tooltip-container tooltip-custom--wide">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg className="icons icon--24 icon--green ml-1">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref="#privacy" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </svg>
            </Tooltip>}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

DomainCell.propTypes = {
    value: PropTypes.string.isRequired,
};

renderLink.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default DomainCell;
