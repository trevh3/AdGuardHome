// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import {
    setRules,
    getFilteringStatus,
    addFilter,
    removeFilter,
    toggleFilterStatus,
    toggleFilteringModal,
    refreshFilters,
    handleRulesChange,
    editFilter,
} from '../actions/filtering';
// @ts-expect-error TS(6142): Module '../components/Filters/DnsAllowlist' was re... Remove this comment to see the full error message
import DnsAllowlist from '../components/Filters/DnsAllowlist';

const mapStateToProps = (state: any) => {
    const { filtering } = state;
    const props = { filtering };
    return props;
};

const mapDispatchToProps = {
    setRules,
    getFilteringStatus,
    addFilter,
    removeFilter,
    toggleFilterStatus,
    toggleFilteringModal,
    refreshFilters,
    handleRulesChange,
    editFilter,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DnsAllowlist);
