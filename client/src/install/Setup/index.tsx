// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component, Fragment } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import debounce from 'lodash/debounce';

import * as actionCreators from '../../actions/install';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getWebAddress } from '../../helpers/helpers';
import {
    INSTALL_FIRST_STEP,
    INSTALL_TOTAL_STEPS,
    ALL_INTERFACES_IP,
    DEBOUNCE_TIMEOUT,
} from '../../helpers/constants';

// @ts-expect-error TS(6142): Module '../../components/ui/Loading' was resolved ... Remove this comment to see the full error message
import Loading from '../../components/ui/Loading';
// @ts-expect-error TS(6142): Module './Greeting' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Greeting from './Greeting';
// @ts-expect-error TS(6142): Module './Settings' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Settings from './Settings';
// @ts-expect-error TS(6142): Module './Auth' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Auth from './Auth';
// @ts-expect-error TS(6142): Module './Devices' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Devices from './Devices';
// @ts-expect-error TS(6142): Module './Submit' was resolved to '/Users/igorloba... Remove this comment to see the full error message
import Submit from './Submit';
// @ts-expect-error TS(6142): Module './Progress' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Progress from './Progress';

// @ts-expect-error TS(6142): Module '../../components/Toasts' was resolved to '... Remove this comment to see the full error message
import Toasts from '../../components/Toasts';
// @ts-expect-error TS(6142): Module '../../components/ui/Footer' was resolved t... Remove this comment to see the full error message
import Footer from '../../components/ui/Footer';
// @ts-expect-error TS(6142): Module '../../components/ui/Icons' was resolved to... Remove this comment to see the full error message
import Icons from '../../components/ui/Icons';
// @ts-expect-error TS(2307): Cannot find module '../../components/ui/svg/logo.s... Remove this comment to see the full error message
import logo from '../../components/ui/svg/logo.svg';

import './Setup.css';
import '../../components/ui/Tabler.css';

class Setup extends Component {
    props: any;

    componentDidMount() {
        this.props.getDefaultAddresses();
    }

    handleFormSubmit = (values: any) => {
        const { staticIp, ...config } = values;
        this.props.setAllSettings(config);
    };

    handleFormChange = debounce((values: any) => {
        const { web, dns } = values;
        if (values && web.port && dns.port) {
            this.props.checkConfig({ web, dns, set_static_ip: false });
        }
    }, DEBOUNCE_TIMEOUT);

    handleFix = (web: any, dns: any, set_static_ip: any) => {
        this.props.checkConfig({ web, dns, set_static_ip });
    };

    openDashboard = (ip: any, port: any) => {
        let address = getWebAddress(ip, port);

        if (ip === ALL_INTERFACES_IP) {
            address = getWebAddress(window.location.hostname, port);
        }

        window.location.replace(address);
    }

    nextStep = () => {
        if (this.props.install.step < INSTALL_TOTAL_STEPS) {
            this.props.nextStep();
        }
    }

    prevStep = () => {
        if (this.props.install.step > INSTALL_FIRST_STEP) {
            this.props.prevStep();
        }
    }

    renderPage(step: any, config: any, interfaces: any) {
        switch (step) {
            case 1:
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <Greeting />;
            case 2:
                return (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Settings
                        config={config}
                        initialValues={config}
                        interfaces={interfaces}
                        onSubmit={this.nextStep}
                        onChange={this.handleFormChange}
                        validateForm={this.handleFormChange}
                        handleFix={this.handleFix}
                    />
                );
            case 3:
                return (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Auth onSubmit={this.handleFormSubmit} />
                );
            case 4:
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <Devices interfaces={interfaces} />;
            case 5:
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <Submit openDashboard={this.openDashboard} />;
            default:
                return false;
        }
    }

    render() {
        const {
            processingDefault,
            step,
            web,
            dns,
            staticIp,
            interfaces,
        } = this.props.install;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Fragment>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {processingDefault && <Loading />}
                {!processingDefault
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    && <Fragment>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="setup">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="setup__container">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <img src={logo} className="setup__logo" alt="logo" />
                                {this.renderPage(step, { web, dns, staticIp }, interfaces)}
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Progress step={step} />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Footer />
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Toasts />
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Icons />
                    </Fragment>
                }
            </Fragment>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Setup.propTypes = {
    getDefaultAddresses: PropTypes.func.isRequired,
    setAllSettings: PropTypes.func.isRequired,
    checkConfig: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    install: PropTypes.object.isRequired,
    step: PropTypes.number,
    web: PropTypes.object,
    dns: PropTypes.object,
};

const mapStateToProps = (state: any) => {
    const { install, toasts } = state;
    const props = { install, toasts };
    return props;
};

export default connect(
    mapStateToProps,
    actionCreators,
)(Setup);
