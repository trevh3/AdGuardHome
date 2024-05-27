// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import round from 'lodash/round';
import { withTranslation, Trans } from 'react-i18next';

// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Card from '../ui/Card';
// @ts-expect-error TS(6142): Module './DomainCell' was resolved to '/Users/igor... Remove this comment to see the full error message
import DomainCell from './DomainCell';
import { DASHBOARD_TABLES_DEFAULT_PAGE_SIZE, TABLES_MIN_ROWS } from '../../helpers/constants';

const TimeCell = ({
    value,
}: any) => {
    if (!value) {
        return '–';
    }

    const valueInMilliseconds = round(value * 1000);

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__row o-hidden">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="logs__text logs__text--full" title={valueInMilliseconds}>
                {valueInMilliseconds}&nbsp;ms
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </span>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

TimeCell.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

const UpstreamAvgTime = ({
    t,
    refreshButton,
    topUpstreamsAvgTime,
    subtitle,
}: any) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card
        title={t('average_upstream_response_time')}
        subtitle={subtitle}
        bodyType="card-table"
        refresh={refreshButton}
    >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactTable
            data={topUpstreamsAvgTime.map(({
                name: domain,
                count,
            }: any) => ({
                domain,
                count,
            }))}
            columns={[
                {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    Header: <Trans>upstream</Trans>,
                    accessor: 'domain',
                    Cell: DomainCell,
                },
                {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    Header: <Trans>response_time</Trans>,
                    accessor: 'count',
                    maxWidth: 190,
                    Cell: TimeCell,
                },
            ]}
            showPagination={false}
            noDataText={t('no_upstreams_data_found')}
            minRows={TABLES_MIN_ROWS}
            defaultPageSize={DASHBOARD_TABLES_DEFAULT_PAGE_SIZE}
            className="-highlight card-table-overflow--limited stats__table"
        />
    </Card>
);

UpstreamAvgTime.propTypes = {
    topUpstreamsAvgTime: PropTypes.array.isRequired,
    refreshButton: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(UpstreamAvgTime);
