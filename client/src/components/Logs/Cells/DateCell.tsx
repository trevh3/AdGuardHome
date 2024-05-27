// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { formatDateTime, formatTime } from '../../../helpers/helpers';
import { DEFAULT_SHORT_DATE_FORMAT_OPTIONS, DEFAULT_TIME_FORMAT } from '../../../helpers/constants';

const DateCell = ({
    time,
}: any) => {
    const isDetailed = useSelector((state: any) => state.queryLogs.isDetailed);

    if (!time) {
        return '–';
    }

    const formattedTime = formatTime(time, DEFAULT_TIME_FORMAT);
    // @ts-expect-error TS(2345): Argument of type '{ year: string; month: string; d... Remove this comment to see the full error message
    const formattedDate = formatDateTime(time, DEFAULT_SHORT_DATE_FORMAT_OPTIONS);

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className="logs__cell logs__cell logs__cell--date text-truncate" role="gridcell">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__time" title={formattedTime}>{formattedTime}</div>
        {isDetailed
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        && <div className="detailed-info d-none d-sm-block text-truncate"
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                title={formattedDate}>{formattedDate}</div>}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

DateCell.propTypes = {
    time: propTypes.string.isRequired,
};

export default DateCell;
