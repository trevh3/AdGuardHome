// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import {
    toggleDhcp,
    getDhcpStatus,
    getDhcpInterfaces,
    setDhcpConfig,
    findActiveDhcp,
    toggleLeaseModal,
    addStaticLease,
    removeStaticLease,
    resetDhcp,
// @ts-expect-error TS(6142): Module '../actions' was resolved to '/Users/igorlo... Remove this comment to see the full error message
} from '../actions';
// @ts-expect-error TS(6142): Module '../components/Settings/Dhcp' was resolved ... Remove this comment to see the full error message
import Dhcp from '../components/Settings/Dhcp';

const mapStateToProps = (state: any) => {
    const { dhcp } = state;
    const props = {
        dhcp,
    };
    return props;
};

const mapDispatchToProps = {
    toggleDhcp,
    getDhcpStatus,
    getDhcpInterfaces,
    setDhcpConfig,
    findActiveDhcp,
    toggleLeaseModal,
    addStaticLease,
    removeStaticLease,
    resetDhcp,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dhcp);
