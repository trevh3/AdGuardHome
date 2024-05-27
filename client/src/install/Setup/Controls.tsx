// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

import * as actionCreators from '../../actions/install';

class Controls extends Component {
    props: any;

    renderPrevButton(step: any) {
        switch (step) {
            case 2:
            case 3:
                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                            type="button"
                            className="btn btn-secondary btn-lg setup__button"
                            onClick={this.props.prevStep}
                        >
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>back</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>
                );
            default:
                return false;
        }
    }

    renderNextButton(step: any) {
        const {
            nextStep,
            invalid,
            pristine,
            install,
            ip,
            port,
        } = this.props;

        switch (step) {
            case 1:
                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="button"
                        className="btn btn-success btn-lg setup__button"
                        onClick={nextStep}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>get_started</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                );
            case 2:
            case 3:
                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="submit"
                        className="btn btn-success btn-lg setup__button"
                        disabled={
                            invalid
                            || pristine
                            || install.processingSubmit
                            || install.dns.status
                            || install.web.status
                        }
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>next</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                );
            case 4:
                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="button"
                        className="btn btn-success btn-lg setup__button"
                        onClick={nextStep}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>next</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                );
            case 5:
                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="button"
                        className="btn btn-success btn-lg setup__button"
                        onClick={() => this.props.openDashboard(ip, port)}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>open_dashboard</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                );
            default:
                return false;
        }
    }

    render() {
        const { install } = this.props;

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="setup__nav">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="btn-list">
                    {this.renderPrevButton(install.step)}
                    {this.renderNextButton(install.step)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Controls.propTypes = {
    install: PropTypes.object.isRequired,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    openDashboard: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    ip: PropTypes.string,
    port: PropTypes.number,
};

const mapStateToProps = (state: any) => {
    const { install } = state;
    const props = { install };
    return props;
};

export default connect(
    mapStateToProps,
    actionCreators,
)(Controls);
