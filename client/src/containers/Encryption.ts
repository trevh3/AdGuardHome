// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { getTlsStatus, setTlsConfig, validateTlsConfig } from '../actions/encryption';
// @ts-expect-error TS(6142): Module '../components/Settings/Encryption' was res... Remove this comment to see the full error message
import Encryption from '../components/Settings/Encryption';

const mapStateToProps = (state: any) => {
    const { encryption } = state;
    const props = {
        encryption,
    };
    return props;
};

const mapDispatchToProps = {
    getTlsStatus,
    setTlsConfig,
    validateTlsConfig,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Encryption);
