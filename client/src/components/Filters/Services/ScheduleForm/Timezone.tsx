// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import ct from 'countries-and-timezones';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { LOCAL_TIMEZONE_VALUE } from '../../../../helpers/constants';

export const Timezone = ({
    timezone,
    setTimezone,
}: any) => {
    const [t] = useTranslation();

    const onTimeZoneChange = (event: any) => {
        setTimezone(event.target.value);
    };

    const timezones = ct.getAllTimezones();

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="schedule__timezone">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <label className="form__label form__label--with-desc mb-2">
                {t('schedule_timezone')}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </label>

            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <select
                className="form-control custom-select"
                value={timezone}
                onChange={onTimeZoneChange}
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <option value={LOCAL_TIMEZONE_VALUE}>
                    {t('schedule_timezone')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </option>
                {/* TODO: get timezones from backend method when the method is ready */}
                {Object.keys(timezones).map((zone) => (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <option key={zone} value={zone}>
                        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        {zone} (GMT{timezones[zone].utcOffsetStr})
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </option>
                ))}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </select>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

Timezone.propTypes = {
    timezone: PropTypes.string.isRequired,
    setTimezone: PropTypes.func.isRequired,
};
