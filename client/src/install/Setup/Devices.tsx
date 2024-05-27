// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { reduxForm, formValueSelector } from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';

import Guide from '../../components/ui/Guide';
// @ts-expect-error TS(6142): Module './Controls' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Controls from './Controls';
// @ts-expect-error TS(6142): Module './AddressList' was resolved to '/Users/igo... Remove this comment to see the full error message
import AddressList from './AddressList';
import { FORM_NAME } from '../../helpers/constants';

// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
let Devices = (props: any) => <div className="setup__step">
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="setup__group">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="setup__subtitle">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>install_devices_title</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="setup__desc">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>install_devices_desc</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="mt-1">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>install_devices_address</Trans>:
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="mt-1">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AddressList
                    interfaces={props.interfaces}
                    address={props.dnsIp}
                    port={props.dnsPort}
                    isDns
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Guide />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Controls />
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</div>;

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '(prop... Remove this comment to see the full error message
Devices.propTypes = {
    interfaces: PropTypes.object.isRequired,
    dnsIp: PropTypes.string.isRequired,
    dnsPort: PropTypes.number.isRequired,
};

const selector = formValueSelector('install');

Devices = connect((state: any) => {
    const dnsIp = selector(state, 'dns.ip');
    const dnsPort = selector(state, 'dns.port');

    return {
        dnsIp,
        dnsPort,
    };
})(Devices);

export default flow([
    withTranslation(),
    reduxForm({
        form: FORM_NAME.INSTALL,
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
    }),
])(Devices);
