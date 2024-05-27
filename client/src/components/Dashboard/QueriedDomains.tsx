// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';

// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Card from '../ui/Card';
// @ts-expect-error TS(6142): Module '../ui/Cell' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Cell from '../ui/Cell';
// @ts-expect-error TS(6142): Module './DomainCell' was resolved to '/Users/igor... Remove this comment to see the full error message
import DomainCell from './DomainCell';

import { DASHBOARD_TABLES_DEFAULT_PAGE_SIZE, STATUS_COLORS, TABLES_MIN_ROWS } from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getPercent } from '../../helpers/helpers';

const getQueriedPercentColor = (percent: any) => {
    if (percent > 10) {
        return STATUS_COLORS.red;
    }
    if (percent > 5) {
        return STATUS_COLORS.yellow;
    }
    return STATUS_COLORS.green;
};

const countCell = (dnsQueries: any) => function cell(row: any) {
    const { value } = row;
    const percent = getPercent(dnsQueries, value);
    const percentColor = getQueriedPercentColor(percent);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Cell value={value} percent={percent} color={percentColor}
                 search={row.original.domain} />;
};

const QueriedDomains = ({
    t,
    refreshButton,
    topQueriedDomains,
    subtitle,
    dnsQueries,
}: any) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card
        title={t('stats_query_domain')}
        subtitle={subtitle}
        bodyType="card-table"
        refresh={refreshButton}
    >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactTable
            data={topQueriedDomains.map(({
                name: domain,
                count,
            }: any) => ({
                domain,
                count,
            }))}
            columns={[
                {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    Header: <Trans>domain</Trans>,
                    accessor: 'domain',
                    Cell: DomainCell,
                },
                {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    Header: <Trans>requests_count</Trans>,
                    accessor: 'count',
                    maxWidth: 190,
                    Cell: countCell(dnsQueries),
                },
            ]}
            showPagination={false}
            noDataText={t('no_domains_found')}
            minRows={TABLES_MIN_ROWS}
            defaultPageSize={DASHBOARD_TABLES_DEFAULT_PAGE_SIZE}
            className="-highlight card-table-overflow--limited stats__table"
        />
    </Card>
);

QueriedDomains.propTypes = {
    topQueriedDomains: PropTypes.array.isRequired,
    dnsQueries: PropTypes.number.isRequired,
    refreshButton: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(QueriedDomains);
