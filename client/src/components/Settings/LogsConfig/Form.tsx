// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import {
    change,
    Field,
    formValueSelector,
    reduxForm,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
} from 'redux-form';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';

import {
    CheckboxField,
    toFloatNumber,
    renderTextareaField,
    renderInputField,
    renderRadioField,
// @ts-expect-error TS(6142): Module '../../../helpers/form' was resolved to '/U... Remove this comment to see the full error message
} from '../../../helpers/form';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { trimLinesAndRemoveEmpty } from '../../../helpers/helpers';
import {
    FORM_NAME,
    QUERY_LOG_INTERVALS_DAYS,
    HOUR,
    DAY,
    RETENTION_CUSTOM,
    RETENTION_CUSTOM_INPUT,
    RETENTION_RANGE,
    CUSTOM_INTERVAL,
} from '../../../helpers/constants';
import '../FormButton.css';

const getIntervalTitle = (interval: any, t: any) => {
    switch (interval) {
        case RETENTION_CUSTOM:
            return t('settings_custom');
        case 6 * HOUR:
            return t('interval_6_hour');
        case DAY:
            return t('interval_24_hour');
        default:
            return t('interval_days', { count: interval / DAY });
    }
};

const getIntervalFields = (processing: any, t: any, toNumber: any) => QUERY_LOG_INTERVALS_DAYS.map((interval) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Field
        key={interval}
        name="interval"
        type="radio"
        component={renderRadioField}
        value={interval}
        placeholder={getIntervalTitle(interval, t)}
        normalize={toNumber}
        disabled={processing}
    />
));

let Form = (props: any) => {
    const {
        handleSubmit,
        submitting,
        invalid,
        processing,
        processingClear,
        handleClear,
        t,
        interval,
        customInterval,
        dispatch,
    } = props;

    useEffect(() => {
        if (QUERY_LOG_INTERVALS_DAYS.includes(interval)) {
            dispatch(change(FORM_NAME.LOG_CONFIG, CUSTOM_INTERVAL, null));
        }
    }, [interval]);

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="form__group form__group--settings">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                    name="enabled"
                    type="checkbox"
                    component={CheckboxField}
                    placeholder={t('query_log_enable')}
                    disabled={processing}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="form__group form__group--settings">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                    name="anonymize_client_ip"
                    type="checkbox"
                    component={CheckboxField}
                    placeholder={t('anonymize_client_ip')}
                    subtitle={t('anonymize_client_ip_desc')}
                    disabled={processing}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <label className="form__label">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>query_log_retention</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </label>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="form__group form__group--settings">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="custom-controls-stacked">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        key={RETENTION_CUSTOM}
                        name="interval"
                        type="radio"
                        component={renderRadioField}
                        value={QUERY_LOG_INTERVALS_DAYS.includes(interval)
                            ? RETENTION_CUSTOM
                            : interval
                        }
                        placeholder={getIntervalTitle(RETENTION_CUSTOM, t)}
                        normalize={toFloatNumber}
                        disabled={processing}
                    />
                    {!QUERY_LOG_INTERVALS_DAYS.includes(interval) && (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__group--input">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="form__desc form__desc--top">
                                {t('custom_rotation_input')}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                key={RETENTION_CUSTOM_INPUT}
                                name={CUSTOM_INTERVAL}
                                type="number"
                                className="form-control"
                                component={renderInputField}
                                disabled={processing}
                                normalize={toFloatNumber}
                                min={RETENTION_RANGE.MIN}
                                max={RETENTION_RANGE.MAX}
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    )}
                    {getIntervalFields(processing, t, toFloatNumber)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <label className="form__label form__label--with-desc">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>ignore_domains_title</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </label>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="form__desc form__desc--top">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>ignore_domains_desc_query</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="form__group form__group--settings">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                    name="ignored"
                    type="textarea"
                    className="form-control form-control--textarea font-monospace text-input"
                    component={renderTextareaField}
                    placeholder={t('ignore_domains')}
                    disabled={processing}
                    normalizeOnBlur={trimLinesAndRemoveEmpty}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="mt-5">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="submit"
                    className="btn btn-success btn-standard btn-large"
                    disabled={
                        submitting
                        || invalid
                        || processing
                        || (!QUERY_LOG_INTERVALS_DAYS.includes(interval) && !customInterval)
                    }
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>save_btn</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className="btn btn-outline-secondary btn-standard form__button"
                    onClick={() => handleClear()}
                    disabled={processingClear}
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>query_log_clear</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </form>
    );
};

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '(prop... Remove this comment to see the full error message
Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    processing: PropTypes.bool.isRequired,
    processingClear: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
    interval: PropTypes.number,
    customInterval: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
};

const selector = formValueSelector(FORM_NAME.LOG_CONFIG);

Form = connect((state: any) => {
    const interval = selector(state, 'interval');
    const customInterval = selector(state, CUSTOM_INTERVAL);
    return {
        interval,
        customInterval,
    };
})(Form);

export default flow([
    withTranslation(),
    reduxForm({ form: FORM_NAME.LOG_CONFIG }),
])(Form);
