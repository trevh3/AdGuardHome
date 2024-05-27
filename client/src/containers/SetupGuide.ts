// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(6142): Module '../actions' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import * as actionCreators from '../actions';
// @ts-expect-error TS(6142): Module '../components/SetupGuide' was resolved to ... Remove this comment to see the full error message
import SetupGuide from '../components/SetupGuide';

const mapStateToProps = (state: any) => {
    const { dashboard } = state;
    const props = { dashboard };
    return props;
};

export default connect(
    mapStateToProps,
    actionCreators,
)(SetupGuide);
