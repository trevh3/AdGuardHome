// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Fragment } from 'react';

// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { normalizeWhois } from '../../../helpers/helpers';
import { WHOIS_ICONS } from '../../../helpers/constants';

const getFormattedWhois = (value: any, t: any) => {
    const whoisInfo = normalizeWhois(value);
    const whoisKeys = Object.keys(whoisInfo);

    if (whoisKeys.length > 0) {
        return whoisKeys.map((key) => {
            // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            const icon = WHOIS_ICONS[key];
            return (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div key={key} title={t(key)}>
                    {icon && (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Fragment>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <svg className="logs__whois-icon text-muted-dark icons icon--24">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <use xlinkHref={`#${icon}`} />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </svg>
                            &nbsp;
                        </Fragment>
                    )}
                    {whoisInfo[key]}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            );
        });
    }

    return '–';
};

const whoisCell = (t: any) => function cell(row: any) {
    const { value } = row;

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className="logs__row o-hidden">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__text logs__text--wrap">{getFormattedWhois(value, t)}</div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

export default whoisCell;
