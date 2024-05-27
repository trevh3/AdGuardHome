// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
// @ts-expect-error TS(6142): Module '../../../ui/Card' was resolved to '/Users/... Remove this comment to see the full error message
import Card from '../../../ui/Card';
import { setAccessList } from '../../../../actions/access';

const Access = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        processing,
        processingSet,
        ...values
    } = useSelector((state: any) => state.access, shallowEqual);

    const handleFormSubmit = (values: any) => {
        dispatch(setAccessList(values));
    };

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
            title={t('access_title')}
            subtitle={t('access_desc')}
            bodyType="card-body box-body--settings"
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Form
                initialValues={values}
                onSubmit={handleFormSubmit}
                processingSet={processingSet}
            />
        </Card>
    );
};

export default Access;
