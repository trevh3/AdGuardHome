// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';

const Actions = ({
    handleAdd,
    handleRefresh,
    processingRefreshFilters,
    whitelist,
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
}: any) => <div className="card-actions">
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <button
            className="btn btn-success btn-standard mr-2 btn-large mb-2"
            type="submit"
            onClick={handleAdd}
    >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {whitelist ? <Trans>add_allowlist</Trans> : <Trans>add_blocklist</Trans>}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </button>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <button
            className="btn btn-primary btn-standard mb-2"
            type="submit"
            onClick={handleRefresh}
            disabled={processingRefreshFilters}
    >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Trans>check_updates_btn</Trans>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </button>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</div>;

Actions.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    handleRefresh: PropTypes.func.isRequired,
    processingRefreshFilters: PropTypes.bool.isRequired,
    whitelist: PropTypes.bool,
};

export default withTranslation()(Actions);
