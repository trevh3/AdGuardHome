// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';

import { INSTALL_TOTAL_STEPS } from '../../helpers/constants';

const getProgressPercent = (step: any) => (step / INSTALL_TOTAL_STEPS) * 100;

// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const Progress = (props: any) => <div className="setup__progress">
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Trans>install_step</Trans> {props.step}/{INSTALL_TOTAL_STEPS}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="setup__progress-wrap">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div
            className="setup__progress-inner"
            style={{ width: `${getProgressPercent(props.step)}%` }}
        />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</div>;

Progress.propTypes = {
    step: PropTypes.number.isRequired,
};

export default withTranslation()(Progress);
