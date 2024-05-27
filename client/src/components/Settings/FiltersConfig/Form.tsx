// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';

// @ts-expect-error TS(6142): Module '../../../helpers/form' was resolved to '/U... Remove this comment to see the full error message
import { CheckboxField, toNumber } from '../../../helpers/form';
import {
    FILTERS_INTERVALS_HOURS,
    FILTERS_RELATIVE_LINK,
    FORM_NAME,
} from '../../../helpers/constants';

const getTitleForInterval = (interval: any, t: any) => {
    if (interval === 0) {
        return t('disabled');
    }
    if (interval === 72 || interval === 168) {
        return t('interval_days', { count: interval / 24 });
    }

    return t('interval_hours', { count: interval });
};

const getIntervalSelect = (processing: any, t: any, handleChange: any, toNumber: any) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Field
        name="interval"
        className="custom-select"
        component="select"
        onChange={handleChange}
        normalize={toNumber}
        disabled={processing}
    >
        {FILTERS_INTERVALS_HOURS.map((interval) => (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <option value={interval} key={interval}>
                {getTitleForInterval(interval, t)}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </option>
        ))}
    </Field>
);

const Form = (props: any) => {
    const {
        handleSubmit, handleChange, processing, t,
    } = props;

    const components = {
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        a: <a href={FILTERS_RELATIVE_LINK} rel="noopener noreferrer" />,
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="row">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name="enabled"
                            type="checkbox"
                            modifier="checkbox--settings"
                            component={CheckboxField}
                            placeholder={t('block_domain_use_filters_and_hosts')}
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            subtitle={<Trans components={components}>
                                filters_block_toggle_hint
                            </Trans>}
                            onChange={handleChange}
                            disabled={processing}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12 col-md-5">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--inner mb-5">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <label className="form__label">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>filters_interval</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </label>
                        {getIntervalSelect(processing, t, handleChange, toNumber)}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </form>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func,
    change: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    processing: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
};

export default flow([
    withTranslation(),
    reduxForm({ form: FORM_NAME.FILTER_CONFIG }),
])(Form);
