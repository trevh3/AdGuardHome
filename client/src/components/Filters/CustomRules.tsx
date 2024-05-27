// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Card from '../ui/Card';
// @ts-expect-error TS(6142): Module '../ui/PageTitle' was resolved to '/Users/i... Remove this comment to see the full error message
import PageTitle from '../ui/PageTitle';
// @ts-expect-error TS(6142): Module './Examples' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Examples from './Examples';
// @ts-expect-error TS(6142): Module './Check' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Check from './Check';
// @ts-expect-error TS(6142): Module '../../helpers/highlightTextareaComments' w... Remove this comment to see the full error message
import { getTextareaCommentsHighlight, syncScroll } from '../../helpers/highlightTextareaComments';
import { COMMENT_LINE_DEFAULT_TOKEN } from '../../helpers/constants';
import '../ui/texareaCommentsHighlight.css';

class CustomRules extends Component {
    props: any;

    ref = React.createRef();

    componentDidMount() {
        this.props.getFilteringStatus();
    }

    handleChange = (e: any) => {
        const { value } = e.currentTarget;
        this.handleRulesChange(value);
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.handleRulesSubmit();
    };

    handleRulesChange = (value: any) => {
        this.props.handleRulesChange({ userRules: value });
    };

    handleRulesSubmit = () => {
        this.props.setRules(this.props.filtering.userRules);
    };

    handleCheck = (values: any) => {
        this.props.checkHost(values);
    };

    onScroll = (e: any) => syncScroll(e, this.ref)

    render() {
        const {
            t,
            filtering: {
                userRules,
            },
        } = this.props;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PageTitle title={t('custom_filtering_rules')} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Card subtitle={t('custom_filter_rules_hint')}>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <form onSubmit={this.handleSubmit}>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="text-edit-container mb-4">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <textarea
                                className="form-control font-monospace text-input"
                                value={userRules}
                                onChange={this.handleChange}
                                onScroll={this.onScroll}
                            />
                            {getTextareaCommentsHighlight(
                                this.ref,
                                userRules,
                                undefined,
                                [COMMENT_LINE_DEFAULT_TOKEN, '!'],
                            )}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="card-actions">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <button
                                className="btn btn-success btn-standard btn-large"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>apply_btn</Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </button>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </form>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <hr />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Examples />
                </Card>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Check onSubmit={this.handleCheck} />
            </>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
CustomRules.propTypes = {
    filtering: PropTypes.object.isRequired,
    setRules: PropTypes.func.isRequired,
    checkHost: PropTypes.func.isRequired,
    getFilteringStatus: PropTypes.func.isRequired,
    handleRulesChange: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(CustomRules);
