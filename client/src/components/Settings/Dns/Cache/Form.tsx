// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { Trans, useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// @ts-expect-error TS(6142): Module '../../../../helpers/form' was resolved to ... Remove this comment to see the full error message
import { renderInputField, toNumber, CheckboxField } from '../../../../helpers/form';
import { CACHE_CONFIG_FIELDS, FORM_NAME, UINT32_RANGE } from '../../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../../helpers/helpers' was resolved ... Remove this comment to see the full error message
import { replaceZeroWithEmptyString } from '../../../../helpers/helpers';
import { clearDnsCache } from '../../../../actions/dnsConfig';

const INPUTS_FIELDS = [
    {
        name: CACHE_CONFIG_FIELDS.cache_size,
        title: 'cache_size',
        description: 'cache_size_desc',
        placeholder: 'enter_cache_size',
    },
    {
        name: CACHE_CONFIG_FIELDS.cache_ttl_min,
        title: 'cache_ttl_min_override',
        description: 'cache_ttl_min_override_desc',
        placeholder: 'enter_cache_ttl_min_override',
    },
    {
        name: CACHE_CONFIG_FIELDS.cache_ttl_max,
        title: 'cache_ttl_max_override',
        description: 'cache_ttl_max_override_desc',
        placeholder: 'enter_cache_ttl_max_override',
    },
];

const Form = ({
    handleSubmit,
    submitting,
    invalid,
}: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { processingSetConfig } = useSelector((state: any) => state.dnsConfig, shallowEqual);
    const {
        cache_ttl_max, cache_ttl_min,
    } = useSelector((state: any) => state.form[FORM_NAME.CACHE].values, shallowEqual);

    const minExceedsMax = cache_ttl_min > 0 && cache_ttl_max > 0 && cache_ttl_min > cache_ttl_max;

    const handleClearCache = () => {
        if (window.confirm(t('confirm_dns_cache_clear'))) {
            dispatch(clearDnsCache());
        }
    };

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <form onSubmit={handleSubmit}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="row">
            {INPUTS_FIELDS.map(({
                // @ts-expect-error TS(2339): Property 'validate' does not exist on type '{ name... Remove this comment to see the full error message
                name, title, description, placeholder, validate, min = 0, max = UINT32_RANGE.MAX,
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            }) => <div className="col-12" key={name}>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="col-12 col-md-7 p-0">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__group form__group--settings">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <label
                                htmlFor={name}
                                className="form__label form__label--with-desc"
                            >
                                {t(title)}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </label>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="form__desc form__desc--top">{t(description)}</div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                name={name}
                                type="number"
                                component={renderInputField}
                                placeholder={t(placeholder)}
                                disabled={processingSetConfig}
                                className="form-control"
                                validate={validate}
                                normalizeOnBlur={replaceZeroWithEmptyString}
                                normalize={toNumber}
                                min={min}
                                max={max}
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>)}
            {minExceedsMax && (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <span className="text-danger pl-3 pb-3">
                    {t('ttl_cache_validation')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </span>
            )}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="row">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-12 col-md-7">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group form__group--settings">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="cache_optimistic"
                        type="checkbox"
                        component={CheckboxField}
                        placeholder={t('cache_optimistic')}
                        disabled={processingSetConfig}
                        subtitle={t('cache_optimistic_desc')}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <button
            type="submit"
            className="btn btn-success btn-standard btn-large"
            disabled={submitting || invalid || processingSetConfig || minExceedsMax}
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>save_btn</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </button>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <button
            type="button"
            className="btn btn-outline-secondary btn-standard form__button"
            onClick={handleClearCache}
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>clear_cache</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </button>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </form>;
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
};

export default reduxForm({ form: FORM_NAME.CACHE })(Form);
