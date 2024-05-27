// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';
import { withTranslation, Trans } from 'react-i18next';

import * as actionCreators from '../../actions/login';
// @ts-expect-error TS(2307): Cannot find module '../../components/ui/svg/logo.s... Remove this comment to see the full error message
import logo from '../../components/ui/svg/logo.svg';
// @ts-expect-error TS(6142): Module '../../components/Toasts' was resolved to '... Remove this comment to see the full error message
import Toasts from '../../components/Toasts';
// @ts-expect-error TS(6142): Module '../../components/ui/Footer' was resolved t... Remove this comment to see the full error message
import Footer from '../../components/ui/Footer';
// @ts-expect-error TS(6142): Module '../../components/ui/Icons' was resolved to... Remove this comment to see the full error message
import Icons from '../../components/ui/Icons';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';

import './Login.css';
import '../../components/ui/Tabler.css';

class Login extends Component {
    props: any;

    setState: any;

    state = {
        isForgotPasswordVisible: false,
    };

    handleSubmit = ({
        username: name,
        password,
    }: any) => {
        this.props.processLogin({ name, password });
    };

    toggleText = () => {
        this.setState((prevState: any) => ({
            isForgotPasswordVisible: !prevState.isForgotPasswordVisible,
        }));
    };

    render() {
        const { processingLogin } = this.props.login;
        const { isForgotPasswordVisible } = this.state;

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="login">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="login__form">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="text-center mb-6">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <img src={logo} className="h-6 login__logo" alt="logo" />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form onSubmit={this.handleSubmit} processing={processingLogin} />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="login__info">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            type="button"
                            className="btn btn-link login__link"
                            onClick={this.toggleText}
                        >
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>forgot_password</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>
                        {isForgotPasswordVisible && (
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="login__message">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans
                                    components={[
                                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                        <a
                                            href="https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration#password-reset"
                                            key="0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            link
                                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                        </a>,
                                    ]}
                                >
                                    forgot_password_desc
                                </Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        )}
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
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Login.propTypes = {
    login: PropTypes.object.isRequired,
    processLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({
    login,
    toasts,
}: any) => ({ login, toasts });

export default flow([
    withTranslation(),
    connect(
        mapStateToProps,
        actionCreators,
    ),
])(Login);
