// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { reduxForm, formValueSelector } from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';

// @ts-expect-error TS(6142): Module './Controls' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Controls from './Controls';
import { FORM_NAME } from '../../helpers/constants';

// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
let Submit = (props: any) => <div className="setup__step">
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="setup__group">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <h1 className="setup__title">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>install_submit_title</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </h1>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <p className="setup__desc">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>install_submit_desc</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </p>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Controls
        openDashboard={props.openDashboard}
        ip={props.webIp}
        port={props.webPort}
    />
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</div>;

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '(prop... Remove this comment to see the full error message
Submit.propTypes = {
    webIp: PropTypes.string.isRequired,
    webPort: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    openDashboard: PropTypes.func.isRequired,
};

const selector = formValueSelector('install');

Submit = connect((state: any) => {
    const webIp = selector(state, 'web.ip');
    const webPort = selector(state, 'web.port');

    return {
        webIp,
        webPort,
    };
})(Submit);

export default flow([
    withTranslation(),
    reduxForm({
        form: FORM_NAME.INSTALL,
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
    }),
])(Submit);
