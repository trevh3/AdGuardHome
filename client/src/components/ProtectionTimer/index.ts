// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { ONE_SECOND_IN_MS } from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../actions' was resolved to '/Users/igo... Remove this comment to see the full error message
import { setProtectionTimerTime, toggleProtectionSuccess } from '../../actions';

let interval: any = null;

const ProtectionTimer = ({
    protectionDisabledDuration,
    toggleProtectionSuccess,
    setProtectionTimerTime,
}: any) => {
    useEffect(() => {
        if (protectionDisabledDuration !== null && protectionDisabledDuration < ONE_SECOND_IN_MS) {
            toggleProtectionSuccess({ disabledDuration: null });
        }

        if (protectionDisabledDuration) {
            interval = setInterval(() => {
                setProtectionTimerTime(protectionDisabledDuration - ONE_SECOND_IN_MS);
            }, ONE_SECOND_IN_MS);
        }

        return () => {
            clearInterval(interval);
        };
    }, [protectionDisabledDuration]);

    return null;
};

ProtectionTimer.propTypes = {
    protectionDisabledDuration: PropTypes.number,
    toggleProtectionSuccess: PropTypes.func.isRequired,
    setProtectionTimerTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => {
    const { dashboard } = state;
    const { protectionEnabled, protectionDisabledDuration } = dashboard;
    return { protectionEnabled, protectionDisabledDuration };
};

const mapDispatchToProps = {
    toggleProtectionSuccess,
    setProtectionTimerTime,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProtectionTimer);
