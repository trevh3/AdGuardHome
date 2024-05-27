// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState, useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactModal from 'react-modal';

// @ts-expect-error TS(6142): Module './Timezone' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import { Timezone } from './Timezone';
// @ts-expect-error TS(6142): Module './TimeSelect' was resolved to '/Users/igor... Remove this comment to see the full error message
import { TimeSelect } from './TimeSelect';
// @ts-expect-error TS(6142): Module './TimePeriod' was resolved to '/Users/igor... Remove this comment to see the full error message
import { TimePeriod } from './TimePeriod';
import { getFullDayName, getShortDayName } from './helpers';
import { LOCAL_TIMEZONE_VALUE } from '../../../../helpers/constants';

export const DAYS_OF_WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const INITIAL_START_TIME_MS = 0;
const INITIAL_END_TIME_MS = 86340000;

export const Modal = ({
    isOpen,
    currentDay,
    schedule,
    onClose,
    onSubmit,
}: any) => {
    const [t] = useTranslation();

    const intialTimezone = schedule.time_zone === LOCAL_TIMEZONE_VALUE
        ? Intl.DateTimeFormat().resolvedOptions().timeZone
        : schedule.time_zone;

    const [timezone, setTimezone] = useState(intialTimezone);
    const [days, setDays] = useState(new Set());

    const [startTime, setStartTime] = useState(INITIAL_START_TIME_MS);
    const [endTime, setEndTime] = useState(INITIAL_END_TIME_MS);

    const [wrongPeriod, setWrongPeriod] = useState(true);

    useEffect(() => {
        if (currentDay) {
            const newDays = new Set([currentDay]);
            setDays(newDays);

            setStartTime(schedule[currentDay].start);
            setEndTime(schedule[currentDay].end);
        }
    }, [currentDay]);

    useEffect(() => {
        if (startTime >= endTime) {
            setWrongPeriod(true);
        } else {
            setWrongPeriod(false);
        }
    }, [startTime, endTime]);

    const addDays = (day: any) => {
        const newDays = new Set(days);

        if (newDays.has(day)) {
            newDays.delete(day);
        } else {
            newDays.add(day);
        }

        setDays(newDays);
    };

    const activeDay = (day: any) => {
        return days.has(day);
    };

    const onFormSubmit = (e: any) => {
        e.preventDefault();

        const newSchedule = schedule;

        Array.from(days).forEach((day) => {
            // @ts-expect-error TS(2538): Type 'unknown' cannot be used as an index type.
            newSchedule[day] = {
                start: startTime,
                end: endTime,
            };
        });

        if (timezone !== intialTimezone) {
            newSchedule.time_zone = timezone;
        }

        onSubmit(newSchedule);
    };

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactModal
            className="Modal__Bootstrap modal-dialog modal-dialog-centered modal-dialog--schedule"
            closeTimeoutMS={0}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-content">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="modal-header">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <h4 className="modal-title">
                        {currentDay ? t('schedule_edit') : t('schedule_new')}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </h4>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button type="button" className="close" onClick={onClose}>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <span className="sr-only">Close</span>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <form onSubmit={onFormSubmit}>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="modal-body">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Timezone
                            timezone={timezone}
                            setTimezone={setTimezone}
                        />

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="schedule__days">
                            {DAYS_OF_WEEK.map((day) => (
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <button
                                    type="button"
                                    key={day}
                                    className="btn schedule__button-day"
                                    data-active={activeDay(day)}
                                    onClick={() => addDays(day)}
                                >
                                    {getShortDayName(t, day)}
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </button>
                            ))}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="schedule__time-wrap">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="schedule__time-row">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <TimeSelect
                                    value={startTime}
                                    onChange={(v: any) => setStartTime(v)}
                                />

                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <TimeSelect
                                    value={endTime}
                                    onChange={(v: any) => setEndTime(v)}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>

                            {wrongPeriod && (
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <div className="schedule__error">
                                    {t('schedule_invalid_select')}
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </div>
                            )}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="schedule__info">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="schedule__info-title">
                                {t('schedule_modal_time_off')}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="schedule__info-row">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <svg className="icons schedule__info-icon">
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <use xlinkHref="#calendar" />
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </svg>
                                {days.size ? (
                                    Array.from(days).map((day) => getFullDayName(t, day)).join(', ')
                                ) : (
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <span>
                                        —
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </span>
                                )}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="schedule__info-row">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <svg className="icons schedule__info-icon">
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <use xlinkHref="#watch" />
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </svg>
                                {wrongPeriod ? (
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <span>
                                        —
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </span>
                                ) : (
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <TimePeriod
                                        startTimeMs={startTime}
                                        endTimeMs={endTime}
                                    />
                                )}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="schedule__notice">
                            {t('schedule_modal_description')}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="modal-footer">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="btn-list">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <button
                                type="button"
                                className="btn btn-success btn-standard"
                                disabled={days.size === 0 || wrongPeriod}
                                onClick={onFormSubmit}
                            >
                                {currentDay ? t('schedule_save') : t('schedule_add')}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </button>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </form>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </ReactModal>
    );
};

Modal.propTypes = {
    schedule: PropTypes.object.isRequired,
    currentDay: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
