// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(6142): Module '../actions' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import { initSettings, toggleSetting } from '../actions';
import { getBlockedServices, updateBlockedServices } from '../actions/services';
import { getStatsConfig, setStatsConfig, resetStats } from '../actions/stats';
import { clearLogs, getLogsConfig, setLogsConfig } from '../actions/queryLogs';
import { getFilteringStatus, setFiltersConfig } from '../actions/filtering';
// @ts-expect-error TS(6142): Module '../components/Settings' was resolved to '/... Remove this comment to see the full error message
import Settings from '../components/Settings';

const mapStateToProps = (state: any) => {
    const {
        settings, services, stats, queryLogs, filtering,
    } = state;
    const props = {
        settings,
        services,
        stats,
        queryLogs,
        filtering,
    };
    return props;
};

const mapDispatchToProps = {
    initSettings,
    toggleSetting,
    getBlockedServices,
    updateBlockedServices,
    getStatsConfig,
    setStatsConfig,
    resetStats,
    clearLogs,
    getLogsConfig,
    setLogsConfig,
    getFilteringStatus,
    setFiltersConfig,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Settings);
