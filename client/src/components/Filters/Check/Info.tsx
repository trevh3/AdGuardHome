// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import i18next from 'i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    checkFiltered,
    checkRewrite,
    checkRewriteHosts,
    checkWhiteList,
    checkSafeSearch,
    checkSafeBrowsing,
    checkParental,
    getRulesToFilterList,
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
} from '../../../helpers/helpers';
import { BLOCK_ACTIONS, FILTERED, FILTERED_STATUS } from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../actions' was resolved to '/Users/... Remove this comment to see the full error message
import { toggleBlocking } from '../../../actions';

const renderBlockingButton = (isFiltered: any, domain: any) => {
    const processingRules = useSelector((state: any) => state.filtering.processingRules);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const buttonType = isFiltered ? BLOCK_ACTIONS.UNBLOCK : BLOCK_ACTIONS.BLOCK;

    const onClick = async () => {
        // @ts-expect-error TS(2554): Expected 4 arguments, but got 2.
        await dispatch(toggleBlocking(buttonType, domain));
    };

    const buttonClass = classNames('mt-3 button-action button-action--main button-action--active button-action--small', {
        'button-action--unblock': isFiltered,
    });

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <button type="button"
                className={buttonClass}
                onClick={onClick}
                disabled={processingRules}
        >
            {t(buttonType)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </button>;
};

const getTitle = () => {
    const { t } = useTranslation();

    const filters = useSelector((state: any) => state.filtering.filters, shallowEqual);
    const whitelistFilters = useSelector((state: any) => state.filtering.whitelistFilters, shallowEqual);
    const rules = useSelector((state: any) => state.filtering.check.rules, shallowEqual);
    const reason = useSelector((state: any) => state.filtering.check.reason);

    const getReasonFiltered = (reason: any) => {
        const filterKey = reason.replace(FILTERED, '');
        return i18next.t('query_log_filtered', { filter: filterKey });
    };

    const ruleAndFilterNames = getRulesToFilterList(rules, filters, whitelistFilters);

    const REASON_TO_TITLE_MAP = {
        [FILTERED_STATUS.NOT_FILTERED_NOT_FOUND]: t('check_not_found'),
        [FILTERED_STATUS.REWRITE]: t('rewrite_applied'),
        [FILTERED_STATUS.REWRITE_HOSTS]: t('rewrite_hosts_applied'),
        [FILTERED_STATUS.FILTERED_BLACK_LIST]: ruleAndFilterNames,
        [FILTERED_STATUS.NOT_FILTERED_WHITE_LIST]: ruleAndFilterNames,
        [FILTERED_STATUS.FILTERED_SAFE_SEARCH]: getReasonFiltered(reason),
        [FILTERED_STATUS.FILTERED_SAFE_BROWSING]: getReasonFiltered(reason),
        [FILTERED_STATUS.FILTERED_PARENTAL]: getReasonFiltered(reason),
    };

    if (Object.prototype.hasOwnProperty.call(REASON_TO_TITLE_MAP, reason)) {
        return REASON_TO_TITLE_MAP[reason];
    }

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>{t('check_reason', { reason })}</div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
            {t('rule_label')}:
            &nbsp;
            {ruleAndFilterNames}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    </>;
};

const Info = () => {
    const {
        hostname,
        reason,
        service_name,
        cname,
        ip_addrs,
    } = useSelector((state: any) => state.filtering.check, shallowEqual);
    const { t } = useTranslation();

    const title = getTitle();

    const className = classNames('card mb-0 p-3', {
        'logs__row--red': checkFiltered(reason),
        'logs__row--blue': checkRewrite(reason) || checkRewriteHosts(reason),
        'logs__row--green': checkWhiteList(reason),
    });

    const onlyFiltered = checkSafeSearch(reason)
        || checkSafeBrowsing(reason)
        || checkParental(reason);

    const isFiltered = checkFiltered(reason);

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className={className}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div><strong>{hostname}</strong></div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>{title}</div>
        {!onlyFiltered
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        && <>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            {service_name && <div>{t('check_service', { service: service_name })}</div>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            {cname && <div>{t('check_cname', { cname })}</div>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            {ip_addrs && <div>{t('check_ip', { ip: ip_addrs.join(', ') })}</div>}
            {renderBlockingButton(isFiltered, hostname)}
        </>}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

export default Info;
