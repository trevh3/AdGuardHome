// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import cn from 'classnames';

// @ts-expect-error TS(6142): Module './Modal' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import { Modal } from './Modal';
import { getFullDayName, getShortDayName } from './helpers';
import { LOCAL_TIMEZONE_VALUE } from '../../../../helpers/constants';
// @ts-expect-error TS(6142): Module './TimePeriod' was resolved to '/Users/igor... Remove this comment to see the full error message
import { TimePeriod } from './TimePeriod';
import './styles.css';

export const ScheduleForm = ({
    schedule,
    onScheduleSubmit,
    clientForm,
}: any) => {
    const [t] = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [currentDay, setCurrentDay] = useState();

    const onModalOpen = () => setModalOpen(true);
    const onModalClose = () => setModalOpen(false);

    const filteredScheduleKeys = schedule ? Object.keys(schedule).filter((v) => v !== 'time_zone') : [];
    const scheduleMap = new Map();
    filteredScheduleKeys.forEach((day) => scheduleMap.set(day, schedule[day]));

    const onSubmit = (values: any) => {
        onScheduleSubmit(values);
        onModalClose();
    };

    const onDelete = (day: any) => {
        scheduleMap.delete(day);

        // @ts-expect-error TS(2550): Property 'fromEntries' does not exist on type 'Obj... Remove this comment to see the full error message
        const scheduleWeek = Object.fromEntries(Array.from(scheduleMap.entries()));

        onScheduleSubmit({
            time_zone: schedule.time_zone,
            ...scheduleWeek,
        });
    };

    const onEdit = (day: any) => {
        setCurrentDay(day);
        onModalOpen();
    };

    const onAdd = () => {
        setCurrentDay(undefined);
        onModalOpen();
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="schedule__current-timezone">
                {t('schedule_current_timezone', { value: schedule?.time_zone || LOCAL_TIMEZONE_VALUE })}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>

            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="schedule__rows">
                {filteredScheduleKeys.map((day) => {
                    const data = schedule[day];

                    if (!data) {
                        return undefined;
                    }

                    return (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div key={day} className="schedule__row">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="schedule__day">
                                {getFullDayName(t, day)}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="schedule__day schedule__day--mobile">
                                {getShortDayName(t, day)}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <TimePeriod
                                startTimeMs={data.start}
                                endTimeMs={data.end}
                            />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="schedule__actions">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <button
                                    type="button"
                                    className="btn btn-icon btn-outline-primary btn-sm schedule__button"
                                    title={t('edit_table_action')}
                                    onClick={() => onEdit(day)}
                                >
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <svg className="icons icon12">
                                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                        <use xlinkHref="#edit" />
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </svg>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </button>

                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <button
                                    type="button"
                                    className="btn btn-icon btn-outline-secondary btn-sm schedule__button"
                                    title={t('delete_table_action')}
                                    onClick={() => onDelete(day)}
                                >
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <svg className="icons">
                                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                        <use xlinkHref="#delete" />
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </svg>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </button>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    );
                })}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>

            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                type="button"
                className={cn(
                    'btn',
                    { 'btn-outline-success btn-sm': clientForm },
                    { 'btn-success btn-standard': !clientForm },
                )}
                onClick={onAdd}
            >
                {t('schedule_new')}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>

            {modalOpen && (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Modal
                    isOpen={modalOpen}
                    onClose={onModalClose}
                    onSubmit={onSubmit}
                    schedule={schedule}
                    currentDay={currentDay}
                />
            )}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

ScheduleForm.propTypes = {
    schedule: PropTypes.object,
    onScheduleSubmit: PropTypes.func.isRequired,
    clientForm: PropTypes.bool,
};
