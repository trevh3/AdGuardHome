// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module '../../actions' was resolved to '/Users/igo... Remove this comment to see the full error message
import { getVersion } from '../../actions';
import './Version.css';

const Version = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        dnsVersion,
        processingVersion,
        checkUpdateFlag,
    } = useSelector((state: any) => state?.dashboard ?? {}, shallowEqual);

    const {
        dnsVersion: installDnsVersion,
    } = useSelector((state: any) => state?.install ?? {}, shallowEqual);

    const version = dnsVersion || installDnsVersion;

    const onClick = () => {
        dispatch(getVersion(true));
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="version">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="version__text">
                {version && (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>version</Trans>:&nbsp;
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <span className="version__value" title={version}>{version}</span>
                    </>
                )}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                {checkUpdateFlag && <button
                    type="button"
                    className="btn btn-icon btn-icon-sm btn-outline-primary btn-sm ml-2"
                    onClick={onClick}
                    disabled={processingVersion}
                    title={t('check_updates_now')}
                >
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <svg className="icons icon12">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <use xlinkHref="#refresh" />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </svg>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

export default Version;
