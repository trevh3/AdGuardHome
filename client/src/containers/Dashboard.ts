// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(6142): Module '../actions' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import { toggleProtection, getClients } from '../actions';
import { getStats, getStatsConfig, setStatsConfig } from '../actions/stats';
import { getAccessList } from '../actions/access';
// @ts-expect-error TS(6142): Module '../components/Dashboard' was resolved to '... Remove this comment to see the full error message
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state: any) => {
    const { dashboard, stats, access } = state;
    const props = { dashboard, stats, access };
    return props;
};

const mapDispatchToProps = {
    toggleProtection,
    getClients,
    getStats,
    getStatsConfig,
    setStatsConfig,
    getAccessList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
