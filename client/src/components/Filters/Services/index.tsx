// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
// @ts-expect-error TS(6142): Module '../../ui/Card' was resolved to '/Users/igo... Remove this comment to see the full error message
import Card from '../../ui/Card';
import { getBlockedServices, getAllBlockedServices, updateBlockedServices } from '../../../actions/services';
// @ts-expect-error TS(6142): Module '../../ui/PageTitle' was resolved to '/User... Remove this comment to see the full error message
import PageTitle from '../../ui/PageTitle';

// @ts-expect-error TS(6142): Module './ScheduleForm' was resolved to '/Users/ig... Remove this comment to see the full error message
import { ScheduleForm } from './ScheduleForm';

const getInitialDataForServices = (initial: any) => (initial ? initial.reduce((acc: any, service: any) => {
    acc.blocked_services[service] = true;
    return acc;
}, { blocked_services: {} }) : initial);

const Services = () => {
    const [t] = useTranslation();
    const dispatch = useDispatch();
    const services = useSelector((store: any) => store?.services);

    useEffect(() => {
        dispatch(getBlockedServices());
        dispatch(getAllBlockedServices());
    }, []);

    const handleSubmit = (values: any) => {
        if (!values || !values.blocked_services) {
            return;
        }

        const blocked_services = Object
            .keys(values.blocked_services)
            .filter((service) => values.blocked_services[service]);

        dispatch(updateBlockedServices({
            ids: blocked_services,
            schedule: services.list.schedule,
        }));
    };

    const handleScheduleSubmit = (values: any) => {
        dispatch(updateBlockedServices({
            ids: services.list.ids,
            schedule: values,
        }));
    };

    const initialValues = getInitialDataForServices(services.list.ids);

    if (!initialValues) {
        return null;
    }

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PageTitle
                title={t('blocked_services')}
                subtitle={t('blocked_services_desc')}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                bodyType="card-body box-body--settings"
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form
                        initialValues={initialValues}
                        blockedServices={services.allServices}
                        processing={services.processing}
                        processingSet={services.processingSet}
                        onSubmit={handleSubmit}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </Card>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                title={t('schedule_services')}
                subtitle={t('schedule_services_desc')}
                bodyType="card-body box-body--settings"
            >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ScheduleForm
                    schedule={services.list.schedule}
                    onScheduleSubmit={handleScheduleSubmit}
                />
            </Card>
        </>
    );
};

export default Services;
