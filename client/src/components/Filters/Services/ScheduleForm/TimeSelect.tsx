// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { getTimeFromMs, convertTimeToMs } from './helpers';

export const TimeSelect = ({
    value,
    onChange,
}: any) => {
    const { hours: initialHours, minutes: initialMinutes } = getTimeFromMs(value);

    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);

    const hourOptions = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    const onHourChange = (event: any) => {
        setHours(event.target.value);
        onChange(convertTimeToMs(event.target.value, minutes));
    };

    const onMinuteChange = (event: any) => {
        setMinutes(event.target.value);
        onChange(convertTimeToMs(hours, event.target.value));
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="schedule__time-select">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <select
                value={hours}
                onChange={onHourChange}
                className="form-control custom-select"
            >
                {hourOptions.map((hour) => (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <option key={hour} value={hour}>
                        {hour}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </option>
                ))}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </select>
            &nbsp;:&nbsp;
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <select
                value={minutes}
                onChange={onMinuteChange}
                className="form-control custom-select"
            >
                {minuteOptions.map((minute) => (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <option key={minute} value={minute}>
                        {minute}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </option>
                ))}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </select>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

TimeSelect.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};
