// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';
import i18n from 'i18next';

// @ts-expect-error TS(6142): Module './Controls' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Controls from './Controls';
// @ts-expect-error TS(6142): Module './AddressList' was resolved to '/Users/igo... Remove this comment to see the full error message
import AddressList from './AddressList';

// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getInterfaceIp } from '../../helpers/helpers';
import {
    ALL_INTERFACES_IP,
    FORM_NAME,
    ADDRESS_IN_USE_TEXT,
    PORT_53_FAQ_LINK,
    STATUS_RESPONSE,
    STANDARD_DNS_PORT,
    STANDARD_WEB_PORT,
} from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../helpers/form' was resolved to '/User... Remove this comment to see the full error message
import { renderInputField, toNumber } from '../../helpers/form';
import { validateRequiredValue, validateInstallPort } from '../../helpers/validators';

const renderInterfaces = (interfaces: any) => Object.values(interfaces)
    .map((option) => {
        const {
            // @ts-expect-error TS(2339): Property 'name' does not exist on type 'unknown'.
            name,
            // @ts-expect-error TS(2339): Property 'ip_addresses' does not exist on type 'un... Remove this comment to see the full error message
            ip_addresses,
            // @ts-expect-error TS(2339): Property 'flags' does not exist on type 'unknown'.
            flags,
        } = option;

        if (option && ip_addresses?.length > 0) {
            const ip = getInterfaceIp(option);
            const isUp = flags?.includes('up');

            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            return <option value={ip} key={name} disabled={!isUp}>
                {name} - {ip} {!isUp && `(${i18n.t('down')})`}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </option>;
        }

        return null;
    });

class Settings extends Component {
    props: any;

    componentDidMount() {
        const {
            webIp, webPort, dnsIp, dnsPort,
        } = this.props;

        this.props.validateForm({
            web: {
                ip: webIp,
                port: webPort,
            },
            dns: {
                ip: dnsIp,
                port: dnsPort,
            },
        });
    }

    getStaticIpMessage = (staticIp: any) => {
        const { static: status, ip } = staticIp;

        switch (status) {
            case STATUS_RESPONSE.NO: {
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="mb-2">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans values={{ ip }} components={[<strong key="0">text</strong>]}>
                            install_static_configure
                        </Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => this.handleStaticIp(ip)}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>set_static_ip</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                </>;
            }
            case STATUS_RESPONSE.ERROR: {
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                return <div className="text-danger">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>install_static_error</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>;
            }
            case STATUS_RESPONSE.YES: {
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                return <div className="text-success">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>install_static_ok</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>;
            }
            default:
                return null;
        }
    };

    handleAutofix = (type: any) => {
        const {
            webIp,
            webPort,
            dnsIp,
            dnsPort,
            handleFix,
        } = this.props;

        const web = {
            ip: webIp,
            port: webPort,
            autofix: false,
        };
        const dns = {
            ip: dnsIp,
            port: dnsPort,
            autofix: false,
        };
        const set_static_ip = false;

        if (type === 'web') {
            web.autofix = true;
        } else {
            dns.autofix = true;
        }

        handleFix(web, dns, set_static_ip);
    };

    handleStaticIp = (ip: any) => {
        const {
            webIp,
            webPort,
            dnsIp,
            dnsPort,
            handleFix,
        } = this.props;

        const web = {
            ip: webIp,
            port: webPort,
            autofix: false,
        };
        const dns = {
            ip: dnsIp,
            port: dnsPort,
            autofix: false,
        };
        const set_static_ip = true;

        if (window.confirm(this.props.t('confirm_static_ip', { ip }))) {
            handleFix(web, dns, set_static_ip);
        }
    };

    render() {
        const {
            handleSubmit,
            handleChange,
            webIp,
            webPort,
            dnsIp,
            dnsPort,
            interfaces,
            invalid,
            config,
            t,
        } = this.props;
        const {
            status: webStatus,
            can_autofix: isWebFixAvailable,
        } = config.web;
        const {
            status: dnsStatus,
            can_autofix: isDnsFixAvailable,
        } = config.dns;
        const { staticIp } = config;

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <form className="setup__step" onSubmit={handleSubmit}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="setup__group">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="setup__subtitle">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>install_settings_title</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="row">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-8">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="form-group">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <label>
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <Trans>install_settings_listen</Trans>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </label>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="web.ip"
                                    component="select"
                                    className="form-control custom-select"
                                    onChange={handleChange}
                                >
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <option value={ALL_INTERFACES_IP}>
                                        {t('install_settings_all_interfaces')}
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </option>
                                    {renderInterfaces(interfaces)}
                                </Field>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-4">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="form-group">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <label>
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <Trans>install_settings_port</Trans>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </label>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="web.port"
                                    component={renderInputField}
                                    type="number"
                                    className="form-control"
                                    placeholder={STANDARD_WEB_PORT.toString()}
                                    validate={[validateInstallPort, validateRequiredValue]}
                                    normalize={toNumber}
                                    onChange={handleChange}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-12">
                            {webStatus
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            && <div className="setup__error text-danger">
                                {webStatus}
                                {isWebFixAvailable
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                && <button
                                    type="button"
                                    className="btn btn-secondary btn-sm ml-2"
                                    onClick={() => this.handleAutofix('web')}
                                >
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <Trans>fix</Trans>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </button>}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <hr className="divider--small" />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="setup__desc">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>install_settings_interface_link</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="mt-1">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <AddressList
                                interfaces={interfaces}
                                address={webIp}
                                port={webPort}
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>

                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="setup__group">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="setup__subtitle">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>install_settings_dns</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="row">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-8">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="form-group">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <label>
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <Trans>install_settings_listen</Trans>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </label>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="dns.ip"
                                    component="select"
                                    className="form-control custom-select"
                                    onChange={handleChange}
                                >
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <option value={ALL_INTERFACES_IP}>
                                        {t('install_settings_all_interfaces')}
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </option>
                                    {renderInterfaces(interfaces)}
                                </Field>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-4">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="form-group">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <label>
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <Trans>install_settings_port</Trans>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </label>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Field
                                    name="dns.port"
                                    component={renderInputField}
                                    type="number"
                                    className="form-control"
                                    placeholder={STANDARD_WEB_PORT.toString()}
                                    validate={[validateInstallPort, validateRequiredValue]}
                                    normalize={toNumber}
                                    onChange={handleChange}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-12">
                            {dnsStatus
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            && <>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <div className="setup__error text-danger">
                                    {dnsStatus}
                                    {isDnsFixAvailable
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    && <button
                                        type="button"
                                        className="btn btn-secondary btn-sm ml-2"
                                        onClick={() => this.handleAutofix('dns')}
                                    >
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <Trans>fix</Trans>
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </button>
                                    }
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </div>
                                {isDnsFixAvailable
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                && <div className="text-muted mb-2">
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <p className="mb-1">
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <Trans>autofix_warning_text</Trans>
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </p>
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <Trans components={[<li key="0">text</li>]}>
                                        autofix_warning_list
                                    </Trans>
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <p className="mb-1">
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <Trans>autofix_warning_result</Trans>
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </p>
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </div>}
                            </>}
                            {dnsPort === STANDARD_DNS_PORT && !isDnsFixAvailable
                            && dnsStatus.includes(ADDRESS_IN_USE_TEXT)
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            && <Trans
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                components={[<a href={PORT_53_FAQ_LINK} key="0" target="_blank"
                                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                                rel="noopener noreferrer">link</a>]}>
                                port_53_faq_link
                            </Trans>}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <hr className="divider--small" />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="setup__desc">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>install_settings_dns_desc</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="mt-1">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <AddressList
                                interfaces={interfaces}
                                address={dnsIp}
                                port={dnsPort}
                                isDns={true}
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>

                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="setup__group">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="setup__subtitle">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>static_ip</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>

                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="mb-2">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>static_ip_desc</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>

                    {this.getStaticIpMessage(staticIp)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Controls invalid={invalid} />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </form>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Settings.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func,
    handleFix: PropTypes.func.isRequired,
    validateForm: PropTypes.func,
    webIp: PropTypes.string.isRequired,
    dnsIp: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
    webPort: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    dnsPort: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    interfaces: PropTypes.object.isRequired,
    invalid: PropTypes.bool.isRequired,
    initialValues: PropTypes.object,
    t: PropTypes.func.isRequired,
};

const selector = formValueSelector(FORM_NAME.INSTALL);

const SettingsForm = connect((state: any) => {
    const webIp = selector(state, 'web.ip');
    const webPort = selector(state, 'web.port');
    const dnsIp = selector(state, 'dns.ip');
    const dnsPort = selector(state, 'dns.port');

    return {
        webIp,
        webPort,
        dnsIp,
        dnsPort,
    };
})(Settings);

export default flow([
    withTranslation(),
    reduxForm({
        form: FORM_NAME.INSTALL,
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
    }),
])(SettingsForm);
