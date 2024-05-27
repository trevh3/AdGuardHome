// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import i18next from 'i18next';
import cn from 'classnames';

// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { getPathWithQueryString } from '../../../helpers/helpers';
import {
    CLIENT_ID_LINK,
    FORM_NAME,
    MOBILE_CONFIG_LINKS,
    STANDARD_HTTPS_PORT,
} from '../../../helpers/constants';
import {
    renderInputField,
    renderSelectField,
    toNumber,
// @ts-expect-error TS(6142): Module '../../../helpers/form' was resolved to '/U... Remove this comment to see the full error message
} from '../../../helpers/form';
import {
    validateConfigClientId,
    validateServerName,
    validatePort,
    validateIsSafePort,
} from '../../../helpers/validators';

const getDownloadLink = (host: any, clientId: any, protocol: any, invalid: any) => {
    if (!host || invalid) {
        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                type="button"
                className="btn btn-success btn-standard btn-large disabled"
            >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>download_mobileconfig</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>
        );
    }

    const linkParams = { host };

    if (clientId) {
        // @ts-expect-error TS(2339): Property 'client_id' does not exist on type '{ hos... Remove this comment to see the full error message
        linkParams.client_id = clientId;
    }

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <a
            href={getPathWithQueryString(protocol, linkParams)}
            className={cn('btn btn-success btn-standard btn-large')}
            download
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>download_mobileconfig</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </a>
    );
};

const MobileConfigForm = ({
    invalid,
}: any) => {
    const formValues = useSelector((state: any) => state.form[FORM_NAME.MOBILE_CONFIG]?.values);

    if (!formValues) {
        return null;
    }

    const {
        host, clientId, protocol, port,
    } = formValues;

    const githubLink = (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <a
            href={CLIENT_ID_LINK}
            target="_blank"
            rel="noopener noreferrer"
        >
            text
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </a>
    );

    const getHostName = () => {
        if (port
            && port !== STANDARD_HTTPS_PORT
            && protocol === MOBILE_CONFIG_LINKS.DOH
        ) {
            return `${host}:${port}`;
        }

        return host;
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={(e: any) => e.preventDefault()}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group form__group--settings">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="row">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <label htmlFor="host" className="form__label">
                                {i18next.t('dhcp_table_hostname')}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </label>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                name="host"
                                type="text"
                                component={renderInputField}
                                className="form-control"
                                placeholder={i18next.t('form_enter_hostname')}
                                validate={validateServerName}
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        {protocol === MOBILE_CONFIG_LINKS.DOH && (
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="col">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <label htmlFor="port" className="form__label">
                                    {i18next.t('encryption_https')}
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </label>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="port"
                                    type="number"
                                    component={renderInputField}
                                    className="form-control"
                                    placeholder={i18next.t('encryption_https')}
                                    validate={[validatePort, validateIsSafePort]}
                                    normalize={toNumber}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group form__group--settings">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <label htmlFor="clientId" className="form__label form__label--with-desc">
                        {i18next.t('client_id')}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </label>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc form__desc--top">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans components={{ a: githubLink }}>
                            client_id_desc
                        </Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="clientId"
                        type="text"
                        component={renderInputField}
                        className="form-control"
                        placeholder={i18next.t('client_id_placeholder')}
                        validate={validateConfigClientId}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group form__group--settings">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <label htmlFor="protocol" className="form__label">
                        {i18next.t('protocol')}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="protocol"
                        type="text"
                        component={renderSelectField}
                        className="form-control"
                    >
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <option value={MOBILE_CONFIG_LINKS.DOT}>
                            {i18next.t('dns_over_tls')}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </option>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <option value={MOBILE_CONFIG_LINKS.DOH}>
                            {i18next.t('dns_over_https')}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </option>
                    </Field>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>

            {getDownloadLink(getHostName(), clientId, protocol, invalid)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </form>
    );
};

MobileConfigForm.propTypes = {
    invalid: PropTypes.bool.isRequired,
};

export default reduxForm({ form: FORM_NAME.MOBILE_CONFIG })(MobileConfigForm);
