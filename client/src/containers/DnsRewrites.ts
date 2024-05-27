// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import {
    getRewritesList,
    addRewrite,
    deleteRewrite,
    updateRewrite,
    toggleRewritesModal,
} from '../actions/rewrites';
// @ts-expect-error TS(6142): Module '../components/Filters/Rewrites' was resolv... Remove this comment to see the full error message
import Rewrites from '../components/Filters/Rewrites';

const mapStateToProps = (state: any) => {
    const { rewrites } = state;
    const props = { rewrites };
    return props;
};

const mapDispatchToProps = {
    getRewritesList,
    addRewrite,
    deleteRewrite,
    updateRewrite,
    toggleRewritesModal,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Rewrites);
