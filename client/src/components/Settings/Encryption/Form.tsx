// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';

import {
    renderInputField,
    CheckboxField,
    renderRadioField,
    toNumber,
// @ts-expect-error TS(6142): Module '../../../helpers/form' was resolved to '/U... Remove this comment to see the full error message
} from '../../../helpers/form';
import {
    validateServerName, validateIsSafePort, validatePort, validatePortQuic, validatePortTLS, validatePlainDns,
} from '../../../helpers/validators';
import i18n from '../../../i18n';
// @ts-expect-error TS(6142): Module './KeyStatus' was resolved to '/Users/igorl... Remove this comment to see the full error message
import KeyStatus from './KeyStatus';
// @ts-expect-error TS(6142): Module './CertificateStatus' was resolved to '/Use... Remove this comment to see the full error message
import CertificateStatus from './CertificateStatus';
import {
    DNS_OVER_QUIC_PORT, DNS_OVER_TLS_PORT, FORM_NAME, STANDARD_HTTPS_PORT, ENCRYPTION_SOURCE,
} from '../../../helpers/constants';

const validate = (values: any) => {
    const errors = {};

    if (values.port_dns_over_tls && values.port_https) {
        if (values.port_dns_over_tls === values.port_https) {
            // @ts-expect-error TS(2339): Property 'port_dns_over_tls' does not exist on typ... Remove this comment to see the full error message
            errors.port_dns_over_tls = i18n.t('form_error_equal');
            // @ts-expect-error TS(2339): Property 'port_https' does not exist on type '{}'.
            errors.port_https = i18n.t('form_error_equal');
        }
    }

    return errors;
};

const clearFields = (change: any, setTlsConfig: any, validateTlsConfig: any, t: any) => {
    const fields = {
        private_key: '',
        certificate_chain: '',
        private_key_path: '',
        certificate_path: '',
        port_https: STANDARD_HTTPS_PORT,
        port_dns_over_tls: DNS_OVER_TLS_PORT,
        port_dns_over_quic: DNS_OVER_QUIC_PORT,
        server_name: '',
        force_https: false,
        enabled: false,
        private_key_saved: false,
        serve_plain_dns: true,
    };
    // eslint-disable-next-line no-alert
    if (window.confirm(t('encryption_reset'))) {
        Object.keys(fields)
            // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            .forEach((field) => change(field, fields[field]));
        setTlsConfig(fields);
        validateTlsConfig(fields);
    }
};

const validationMessage = (warningValidation: any, isWarning: any) => {
    if (!warningValidation) {
        return null;
    }

    if (isWarning) {
        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col-12">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <p><Trans>encryption_warning</Trans>: {warningValidation}</p>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    }

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="col-12">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <p className="text-danger">{warningValidation}</p>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

let Form = (props: any) => {
    const {
        t,
        handleSubmit,
        handleChange,
        isEnabled,
        servePlainDns,
        certificateChain,
        privateKey,
        certificatePath,
        privateKeyPath,
        change,
        invalid,
        submitting,
        processingConfig,
        processingValidate,
        not_after,
        valid_chain,
        valid_key,
        valid_cert,
        valid_pair,
        dns_names,
        key_type,
        issuer,
        subject,
        warning_validation,
        setTlsConfig,
        validateTlsConfig,
        certificateSource,
        privateKeySource,
        privateKeySaved,
    } = props;

    const isSavingDisabled = () => {
        const processing = submitting || processingConfig || processingValidate;

        if (servePlainDns && !isEnabled) {
            return invalid || processing;
        }

        return invalid || processing || !valid_key || !valid_cert || !valid_pair;
    };

    const isDisabled = isSavingDisabled();
    const isWarning = valid_key && valid_cert && valid_pair;

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="row">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings mb-3">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name="enabled"
                            type="checkbox"
                            component={CheckboxField}
                            placeholder={t('encryption_enable')}
                            onChange={handleChange}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>encryption_enable_desc</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group mb-3 mt-5">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name="serve_plain_dns"
                            type="checkbox"
                            component={CheckboxField}
                            placeholder={t('encryption_plain_dns_enable')}
                            onChange={handleChange}
                            validate={validatePlainDns}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>encryption_plain_dns_desc</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <hr />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <label className="form__label" htmlFor="server_name">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>encryption_server</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </label>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-lg-6">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id="server_name"
                            name="server_name"
                            component={renderInputField}
                            type="text"
                            className="form-control"
                            placeholder={t('encryption_server_enter')}
                            onChange={handleChange}
                            disabled={!isEnabled}
                            validate={validateServerName}
                        />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_server_desc</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-lg-6">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name="force_https"
                            type="checkbox"
                            component={CheckboxField}
                            placeholder={t('encryption_redirect')}
                            onChange={handleChange}
                            disabled={!isEnabled}
                        />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_redirect_desc</Trans>
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
                <div className="col-lg-6">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <label className="form__label" htmlFor="port_https">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_https</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id="port_https"
                            name="port_https"
                            component={renderInputField}
                            type="number"
                            className="form-control"
                            placeholder={t('encryption_https')}
                            validate={[validatePort, validateIsSafePort]}
                            normalize={toNumber}
                            onChange={handleChange}
                            disabled={!isEnabled}
                        />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_https_desc</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-lg-6">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <label className="form__label" htmlFor="port_dns_over_tls">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_dot</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id="port_dns_over_tls"
                            name="port_dns_over_tls"
                            component={renderInputField}
                            type="number"
                            className="form-control"
                            placeholder={t('encryption_dot')}
                            validate={[validatePortTLS]}
                            normalize={toNumber}
                            onChange={handleChange}
                            disabled={!isEnabled}
                        />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_dot_desc</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-lg-6">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <label className="form__label" htmlFor="port_dns_over_quic">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_doq</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </label>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id="port_dns_over_quic"
                            name="port_dns_over_quic"
                            component={renderInputField}
                            type="number"
                            className="form-control"
                            placeholder={t('encryption_doq')}
                            validate={[validatePortQuic]}
                            normalize={toNumber}
                            onChange={handleChange}
                            disabled={!isEnabled}
                        />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_doq_desc</Trans>
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
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <label
                            className="form__label form__label--with-desc form__label--bold"
                            htmlFor="certificate_chain"
                        >
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_certificates</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </label>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc form__desc--top">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans
                                values={{ link: 'letsencrypt.org' }}
                                components={[
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <a target="_blank" rel="noopener noreferrer" href="https://letsencrypt.org/" key="0">
                                        link
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </a>,
                                ]}
                            >
                                encryption_certificates_desc
                            </Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__inline mb-2">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="custom-controls-stacked">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="certificate_source"
                                    component={renderRadioField}
                                    type="radio"
                                    className="form-control mr-2"
                                    value="path"
                                    placeholder={t('encryption_certificates_source_path')}
                                    disabled={!isEnabled}
                                />
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="certificate_source"
                                    component={renderRadioField}
                                    type="radio"
                                    className="form-control mr-2"
                                    value="content"
                                    placeholder={t('encryption_certificates_source_content')}
                                    disabled={!isEnabled}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>

                        {certificateSource === ENCRYPTION_SOURCE.CONTENT && (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                id="certificate_chain"
                                name="certificate_chain"
                                component="textarea"
                                type="text"
                                className="form-control form-control--textarea"
                                placeholder={t('encryption_certificates_input')}
                                onChange={handleChange}
                                disabled={!isEnabled}
                            />
                        )}
                        {certificateSource === ENCRYPTION_SOURCE.PATH && (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                id="certificate_path"
                                name="certificate_path"
                                component={renderInputField}
                                type="text"
                                className="form-control"
                                placeholder={t('encryption_certificate_path')}
                                onChange={handleChange}
                                disabled={!isEnabled}
                            />
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__status">
                        {(certificateChain || certificatePath) && (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <CertificateStatus
                                validChain={valid_chain}
                                validCert={valid_cert}
                                subject={subject}
                                issuer={issuer}
                                notAfter={not_after}
                                dnsNames={dns_names}
                            />
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="row">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group form__group--settings mt-3">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <label className="form__label form__label--bold" htmlFor="private_key">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>encryption_key</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </label>

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__inline mb-2">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="custom-controls-stacked">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="key_source"
                                    component={renderRadioField}
                                    type="radio"
                                    className="form-control mr-2"
                                    value={ENCRYPTION_SOURCE.PATH}
                                    placeholder={t('encryption_key_source_path')}
                                    disabled={!isEnabled}
                                />
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="key_source"
                                    component={renderRadioField}
                                    type="radio"
                                    className="form-control mr-2"
                                    value={ENCRYPTION_SOURCE.CONTENT}
                                    placeholder={t('encryption_key_source_content')}
                                    disabled={!isEnabled}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>

                        {privateKeySource === ENCRYPTION_SOURCE.PATH && (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                name="private_key_path"
                                component={renderInputField}
                                type="text"
                                className="form-control"
                                placeholder={t('encryption_private_key_path')}
                                onChange={handleChange}
                                disabled={!isEnabled}
                            />
                        )}
                        {privateKeySource === ENCRYPTION_SOURCE.CONTENT && [
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                key="private_key_saved"
                                name="private_key_saved"
                                type="checkbox"
                                className="form__group form__group--settings mb-2"
                                component={CheckboxField}
                                disabled={!isEnabled}
                                placeholder={t('use_saved_key')}
                                onChange={(event: any) => {
                                    if (event.target.checked) {
                                        change('private_key', '');
                                    }
                                    if (handleChange) {
                                        handleChange(event);
                                    }
                                }}
                            />,
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                id="private_key"
                                key="private_key"
                                name="private_key"
                                component="textarea"
                                type="text"
                                className="form-control form-control--textarea"
                                placeholder={t('encryption_key_input')}
                                onChange={handleChange}
                                disabled={!isEnabled || privateKeySaved}
                            />,
                        ]}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__status">
                        {(privateKey || privateKeyPath) && (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <KeyStatus validKey={valid_key} keyType={key_type} />
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                {validationMessage(warning_validation, isWarning)}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>

            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="btn-list mt-2">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="submit"
                    disabled={isDisabled}
                    className="btn btn-success btn-standart"
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>save_config</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className="btn btn-secondary btn-standart"
                    disabled={submitting || processingConfig}
                    onClick={() => clearFields(change, setTlsConfig, validateTlsConfig, t)}
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>reset_settings</Trans>
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
    handleChange: PropTypes.func,
    isEnabled: PropTypes.bool.isRequired,
    servePlainDns: PropTypes.bool.isRequired,
    certificateChain: PropTypes.string.isRequired,
    privateKey: PropTypes.string.isRequired,
    certificatePath: PropTypes.string.isRequired,
    privateKeyPath: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    initialValues: PropTypes.object.isRequired,
    processingConfig: PropTypes.bool.isRequired,
    processingValidate: PropTypes.bool.isRequired,
    status_key: PropTypes.string,
    not_after: PropTypes.string,
    warning_validation: PropTypes.string,
    valid_chain: PropTypes.bool,
    valid_key: PropTypes.bool,
    valid_cert: PropTypes.bool,
    valid_pair: PropTypes.bool,
    dns_names: PropTypes.arrayOf(PropTypes.string),
    key_type: PropTypes.string,
    issuer: PropTypes.string,
    subject: PropTypes.string,
    t: PropTypes.func.isRequired,
    setTlsConfig: PropTypes.func.isRequired,
    validateTlsConfig: PropTypes.func.isRequired,
    certificateSource: PropTypes.string,
    privateKeySource: PropTypes.string,
    privateKeySaved: PropTypes.bool,
};

const selector = formValueSelector(FORM_NAME.ENCRYPTION);

Form = connect((state: any) => {
    const isEnabled = selector(state, 'enabled');
    const servePlainDns = selector(state, 'serve_plain_dns');
    const certificateChain = selector(state, 'certificate_chain');
    const privateKey = selector(state, 'private_key');
    const certificatePath = selector(state, 'certificate_path');
    const privateKeyPath = selector(state, 'private_key_path');
    const certificateSource = selector(state, 'certificate_source');
    const privateKeySource = selector(state, 'key_source');
    const privateKeySaved = selector(state, 'private_key_saved');
    return {
        isEnabled,
        servePlainDns,
        certificateChain,
        privateKey,
        certificatePath,
        privateKeyPath,
        certificateSource,
        privateKeySource,
        privateKeySaved,
    };
})(Form);

export default flow([
    withTranslation(),
    reduxForm({
        form: FORM_NAME.ENCRYPTION,
        validate,
    }),
])(Form);
