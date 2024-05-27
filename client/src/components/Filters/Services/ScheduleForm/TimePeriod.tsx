// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { getTimeFromMs } from './helpers';

export const TimePeriod = ({
    startTimeMs,
    endTimeMs,
}: any) => {
    const startTime = getTimeFromMs(startTimeMs);
    const endTime = getTimeFromMs(endTimeMs);

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="schedule__time">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <time>{startTime.hours}:{startTime.minutes}</time>
            &nbsp;–&nbsp;
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <time>{endTime.hours}:{endTime.minutes}</time>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

TimePeriod.propTypes = {
    startTimeMs: PropTypes.number.isRequired,
    endTimeMs: PropTypes.number.isRequired,
};
