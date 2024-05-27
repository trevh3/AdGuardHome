import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { toggleDetailedLogs } from '../../../actions/queryLogs';
// @ts-expect-error TS(6142): Module './HeaderCell' was resolved to '/Users/igor... Remove this comment to see the full error message
import HeaderCell from './HeaderCell';

const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isDetailed = useSelector((state: any) => state.queryLogs.isDetailed);
    const disableDetailedMode = () => dispatch(toggleDetailedLogs(false));
    const enableDetailedMode = () => dispatch(toggleDetailedLogs(true));

    const HEADERS = [
        {
            className: 'logs__cell--date',
            content: 'time_table_header',
        },
        {
            className: 'logs__cell--domain',
            content: 'request_table_header',
        },
        {
            className: 'logs__cell--response',
            content: 'response_table_header',
        },
        {
            className: 'logs__cell--client',
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            content: <>
                {t('client_table_header')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                {<span>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <svg className={classNames('icons icon--24 icon--green cursor--pointer mr-2', { 'icon--selected': !isDetailed })}
                         onClick={disableDetailedMode}
                    >
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <title>{t('compact')}</title>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref='#list' /></svg>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg className={classNames('icons icon--24 icon--green cursor--pointer', { 'icon--selected': isDetailed })}
                     onClick={enableDetailedMode}
                >
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <title>{t('default')}</title>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref='#detailed_list' />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </svg>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </span>}
            </>,
        },
    ];

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className="logs__cell--header__container px-5" role="row">
        {HEADERS.map(HeaderCell)}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

export default Header;
