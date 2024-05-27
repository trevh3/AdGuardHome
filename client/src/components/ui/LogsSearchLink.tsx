// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getLogsUrlParams } from '../../helpers/helpers';
import { MENU_URLS } from '../../helpers/constants';

const LogsSearchLink = ({
    search = '',
    response_status = '',
    children,
    link = MENU_URLS.logs,
}: any) => {
    const { t } = useTranslation();

    const to = link === MENU_URLS.logs ? `${MENU_URLS.logs}${getLogsUrlParams(search && `"${search}"`, response_status)}` : link;

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link
            to={to}
            tabIndex={0}
            title={t('click_to_view_queries')}
            aria-label={t('click_to_view_queries')}
        >
            {children}
        </Link>
    );
};

LogsSearchLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element]).isRequired,
    search: PropTypes.string,
    response_status: PropTypes.string,
    link: PropTypes.string,
};

export default LogsSearchLink;
