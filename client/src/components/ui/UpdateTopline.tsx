// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Trans } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// @ts-expect-error TS(6142): Module './Topline' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Topline from './Topline';
// @ts-expect-error TS(6142): Module '../../actions' was resolved to '/Users/igo... Remove this comment to see the full error message
import { getUpdate } from '../../actions';
import { MANUAL_UPDATE_LINK } from '../../helpers/constants';

const UpdateTopline = () => {
    const {
        announcementUrl,
        newVersion,
        canAutoUpdate,
        processingUpdate,
    } = useSelector((state: any) => state.dashboard, shallowEqual);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(getUpdate());
    };

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Topline type="info">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans
                values={{ version: newVersion }}
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a href={announcementUrl} target="_blank" rel="noopener noreferrer" key="0">
                        Click here
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                update_announcement
            </Trans>
            &nbsp;
            {canAutoUpdate ? (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className="btn btn-sm btn-primary ml-3"
                    onClick={handleUpdate}
                    disabled={processingUpdate}
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>update_now</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
            ) : (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans components={{
                    a: (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <a href={MANUAL_UPDATE_LINK} target="_blank" rel="noopener noreferrer" key="0">
                            Link
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </a>
                    ),
                }}>
                    manual_update
                </Trans>
            )}
        </>
    </Topline>;
};

export default UpdateTopline;
