// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useCallback } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import {
    renderInputField,
    toNumber,
// @ts-expect-error TS(6142): Module '../../../helpers/form' was resolved to '/U... Remove this comment to see the full error message
} from '../../../helpers/form';
import { FORM_NAME, UINT32_RANGE } from '../../../helpers/constants';
import { validateIpv6, validateRequiredValue } from '../../../helpers/validators';

const FormDHCPv6 = ({
    handleSubmit,
    submitting,
    processingConfig,
    ipv6placeholders,
}: any) => {
    const { t } = useTranslation();
    const dhcp = useSelector((state: any) => state.form[FORM_NAME.DHCPv6], shallowEqual);
    const interfaces = useSelector((state: any) => state.form[FORM_NAME.DHCP_INTERFACES], shallowEqual);
    const interface_name = interfaces?.values?.interface_name;

    const isInterfaceIncludesIpv6 = useSelector(
        (state: any) => !!state.dhcp?.interfaces?.[interface_name]?.ipv6_addresses,
    );

    const isEmptyConfig = !Object.values(dhcp?.values?.v6 ?? {})
        .some(Boolean);

    const invalid = dhcp?.syncErrors || interfaces?.syncErrors || !isInterfaceIncludesIpv6
        || isEmptyConfig || submitting || processingConfig;

    const validateRequired = useCallback((value: any) => {
        if (isEmptyConfig) {
            return undefined;
        }
        return validateRequiredValue(value);
    }, [isEmptyConfig]);

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <form onSubmit={handleSubmit}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="row">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group form__group--settings">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="row">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-12">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <label>{t('dhcp_form_range_title')}</label>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                name="v6.range_start"
                                component={renderInputField}
                                type="text"
                                className="form-control"
                                placeholder={t(ipv6placeholders.range_start)}
                                validate={[validateIpv6, validateRequired]}
                                disabled={!isInterfaceIncludesIpv6}
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                name="v6.range_end"
                                component="input"
                                type="text"
                                className="form-control disabled cursor--not-allowed"
                                placeholder={t(ipv6placeholders.range_end)}
                                value={t(ipv6placeholders.range_end)}
                                disabled
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="row">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-lg-6 form__group form__group--settings">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <label>{t('dhcp_form_lease_title')}</label>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                    name="v6.lease_duration"
                    component={renderInputField}
                    type="number"
                    className="form-control"
                    placeholder={t(ipv6placeholders.lease_duration)}
                    validate={validateRequired}
                    normalizeOnBlur={toNumber}
                    min={1}
                    max={UINT32_RANGE.MAX}
                    disabled={!isInterfaceIncludesIpv6}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="btn-list">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                type="submit"
                className="btn btn-success btn-standard"
                disabled={invalid}
            >
                {t('save_config')}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </form>;
};

FormDHCPv6.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    initialValues: PropTypes.object.isRequired,
    processingConfig: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    ipv6placeholders: PropTypes.object.isRequired,
};

export default reduxForm({
    form: FORM_NAME.DHCPv6,
})(FormDHCPv6);
