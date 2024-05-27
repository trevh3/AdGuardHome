// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error TS(6142): Module './helpers' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import { normalizeWhois } from './helpers';
import { WHOIS_ICONS } from './constants';

const getFormattedWhois = (whois: any) => {
    const whoisInfo = normalizeWhois(whois);
    return (
        Object.keys(whoisInfo)
            .map((key) => {
                // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                const icon = WHOIS_ICONS[key];
                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <span className="logs__whois text-muted" key={key} title={whoisInfo[key]}>
                    {icon && (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <svg className="logs__whois-icon icons icon--18">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <use xlinkHref={`#${icon}`} />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </svg>
                            &nbsp;
                        </>
                    )}{whoisInfo[key]}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </span>
                );
            })
    );
};

/**
 * @param {string} value
 * @param {object} info
 * @param {string} info.name
 * @param {object} info.whois_info
 * @param {boolean} [isDetailed]
 * @param {boolean} [isLogs]
 * @returns {JSXElement}
 */
export const renderFormattedClientCell = (value: any, info: any, isDetailed = false, isLogs = false) => {
    let whoisContainer = null;
    let nameContainer = value;

    if (info) {
        const { name, whois_info } = info;
        const whoisAvailable = whois_info && Object.keys(whois_info).length > 0;

        if (name) {
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            const nameValue = <div className="logs__text logs__text--link logs__text--nowrap logs__text--client" title={`${name} (${value})`}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                {name}&nbsp;<small>{`(${value})`}</small>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>;

            if (!isLogs) {
                nameContainer = nameValue;
            } else {
                nameContainer = !whoisAvailable && isDetailed
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    ? <small title={value}>{value}</small>
                    : nameValue;
            }
        }

        if (whoisAvailable && isDetailed) {
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            whoisContainer = <div className="logs__text logs__text--wrap logs__text--whois">
                    {getFormattedWhois(whois_info)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>;
        }
    }

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className="logs__text mw-100" title={value}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link to={`logs?search="${encodeURIComponent(value)}"`}>{nameContainer}</Link>
        {whoisContainer}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};
