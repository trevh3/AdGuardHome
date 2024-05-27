// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import {
    setRules,
    getFilteringStatus,
    handleRulesChange,
    checkHost,
} from '../actions/filtering';
// @ts-expect-error TS(6142): Module '../components/Filters/CustomRules' was res... Remove this comment to see the full error message
import CustomRules from '../components/Filters/CustomRules';

const mapStateToProps = (state: any) => {
    const { filtering } = state;
    const props = { filtering };
    return props;
};

const mapDispatchToProps = {
    setRules,
    getFilteringStatus,
    handleRulesChange,
    checkHost,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomRules);
